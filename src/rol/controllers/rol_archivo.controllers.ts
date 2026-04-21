import { Request, Response } from "express";
import sequelize from "../../General/DB/db";
import { saveRolArchivo } from "../services/rol_archivo.services";
import { guardarRutasRolLote } from "../services/rol_rutas.services";
import { rolArchivo } from "../models/rol_archivo.models";
import * as XLSX from "xlsx";

export const uploadRolArchivo = async (req: Request, res: Response) => {
  try {
    const archivoSubido = req.file;

    if (!archivoSubido) {
      return res.status(400).json({ error: "No se envió ningún archivo" });
    }

    const modulo = Number(req.body.modulo);
    const periodo = Number(req.body.periodo);

    if (Number.isNaN(modulo) || Number.isNaN(periodo)) {
      return res.status(400).json({
        error: "Modulo y periodo son obligatorios y deben ser numéricos",
      });
    }

    // Procesar el archivo para contar hojas
    const workbook = XLSX.read(archivoSubido.buffer, { type: "buffer" });
    const numSheets = workbook.SheetNames.length;
    const sheetNames = workbook.SheetNames; // Obtén los nombres de las hojas

    const resultado = await sequelize.transaction(async (transaction) => {
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

      return {
        archivoGuardado,
        rutasGuardadas,
      };
    });

    res.status(200).json({
      message: "Archivo guardado",
      numSheets,
      sheetNames,
      modulo,
      periodo,
      id_archivo: resultado.archivoGuardado.getDataValue("id") as number,
      rutas_guardadas: resultado.rutasGuardadas.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar el archivo" });
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
