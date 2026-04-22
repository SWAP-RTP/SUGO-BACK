import { Request, Response } from "express";
import sequelize from "../../General/DB/db";
import { saveRolArchivo } from "../services/rol_archivo.services";
import { guardarRutasRolLote } from "../services/rol_rutas.services";
import { guardarTurnosRolLote } from "../services/rol_turnos.services";
import { rolArchivo } from "../models/rol_archivo.models";
import { rolRutas } from "../models/rol_rutas.models";
import * as XLSX from "xlsx";

export const uploadRolArchivo = async (req: Request, res: Response) => {
  try {
    const archivoSubido = req.file;

    if (!archivoSubido) {
      return res.status(400).json({ error: "No se envió ningún archivo" });
    }

    const modulo = Number(req.body.modulo);
    const periodo = Number(req.body.periodo);
    const hojasRolesJson = req.body.hojasRoles;

    console.log("📥 Datos recibidos:");
    console.log("  - Archivo:", archivoSubido?.originalname);
    console.log("  - Modulo:", modulo);
    console.log("  - Periodo:", periodo);
    console.log("  - hojasRoles enviadas:", hojasRolesJson ? "Sí" : "No");

    if (Number.isNaN(modulo) || Number.isNaN(periodo)) {
      return res.status(400).json({
        error: "Modulo y periodo son obligatorios y deben ser numéricos",
      });
    }

    let hojasRoles;
    try {
      hojasRoles =
        typeof hojasRolesJson === "string"
          ? JSON.parse(hojasRolesJson)
          : hojasRolesJson;
      console.log(
        "  - Hojas parseadas:",
        Array.isArray(hojasRoles) ? hojasRoles.length : "no es array",
      );
    } catch {
      return res.status(400).json({ error: "Datos de hojas/rutas inválidos" });
    }

    // Procesar el archivo para contar hojas
    const workbook = XLSX.read(archivoSubido.buffer, { type: "buffer" });
    const numSheets = workbook.SheetNames.length;
    const sheetNames = workbook.SheetNames;

    const resultado = await sequelize.transaction(async (transaction) => {
      // Guardar archivo
      const archivoGuardado = await saveRolArchivo(
        {
          nombre: archivoSubido.originalname,
          archivo: archivoSubido.buffer,
          path: archivoSubido.originalname,
          usuario: "usuario_demo",
          modulo,
          periodo,
        },
        transaction,
      );

      const idArchivo = archivoGuardado.getDataValue("id") as number;

      // Guardar rutas
      const rutasGuardadas = await guardarRutasRolLote(
        sheetNames
          .map((nombreRuta) => nombreRuta.trim())
          .filter((nombreRuta) => nombreRuta.length > 0)
          .map((nombreRuta) => ({
            id_archivo: idArchivo,
            nombre_ruta: nombreRuta,
          })),
        transaction,
      );

      // Crear mapeo: nombre_ruta -> id para vincular turnos
      const rutasMap = new Map<string, number>();
      rutasGuardadas.forEach((ruta) => {
        const nombreRuta = ruta.getDataValue("nombre_ruta") as string;
        const rutaId = ruta.getDataValue("id") as number;
        rutasMap.set(nombreRuta, rutaId);
      });

      // Preparar turnos para guardar
      const turnosParaGuardar: any[] = [];
      if (Array.isArray(hojasRoles)) {
        hojasRoles.forEach((hoja) => {
          if (Array.isArray(hoja.filas)) {
            hoja.filas.forEach((fila: any) => {
              // Validar que los campos numéricos sean válidos
              const economico = Number(fila.economico);
              const primerT = Number(fila.primerTurno);
              const segundoT = Number(fila.segundoTurno);
              const tercerT = Number(fila.tercerTurno);

              if (!Number.isNaN(economico)) {
                turnosParaGuardar.push({
                  id_archivo: idArchivo,
                  economico: economico || 0,
                  sistema: fila.sistema || "",
                  primer_t: primerT || 0,
                  segundo_t: segundoT || 0,
                  tercer_t: tercerT || 0,
                });
              }
            });
          }
        });
      }

      // Guardar turnos en lote
      const turnosGuardados: any[] = [];
      console.log("📊 Turnos para guardar:", turnosParaGuardar.length);
      if (turnosParaGuardar.length > 0) {
        const guardados = await guardarTurnosRolLote(
          turnosParaGuardar,
          transaction,
        );
        turnosGuardados.push(...guardados);
        console.log(
          "✅ Turnos guardados exitosamente:",
          turnosGuardados.length,
        );
      }

      return {
        archivoGuardado,
        rutasGuardadas,
        turnosGuardados,
      };
    });

    res.status(200).json({
      message: "Archivo y datos guardados exitosamente",
      numSheets,
      sheetNames,
      modulo,
      periodo,
      id_archivo: resultado.archivoGuardado.getDataValue("id") as number,
      rutas_guardadas: resultado.rutasGuardadas.length,
      turnos_guardados: resultado.turnosGuardados.length,
    });
  } catch (error) {
    console.error("Error completo:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Mensaje de error:", errorMessage);
    res.status(500).json({
      error: "Error al guardar el archivo",
      details: errorMessage,
    });
  }
};

export const descargarArchivo = async (req: Request, res: Response) => {
  try {
    // Asegúrate de convertir el id a número (o string si tu PK es string)
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const archivo = await rolArchivo.findByPk(id);

    if (!archivo || !archivo.get("archivo")) {
      return res.status(404).json({ error: "Archivo no encontrado" });
    }

    const buffer = archivo.get("archivo") as Buffer;
    const nombre = archivo.get("nombre") as string;

    res.setHeader("Content-Disposition", `attachment; filename="${nombre}"`);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error: "Error al descargar el archivo" });
  }
};
