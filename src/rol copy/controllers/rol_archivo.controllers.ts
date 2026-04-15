import { Request, Response } from "express";
import { saveRolArchivo } from "../services/rol_archivo.services";
import { rolArchivo } from "../models/rol_archivo.models";
import * as XLSX from "xlsx";

export const uploadRolArchivo = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No se envió ningún archivo" });
    }

    // Procesar el archivo para contar hojas
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    const numSheets = workbook.SheetNames.length;

    // Guardar en la base de datos (debes agregar la columna archivo en el modelo y migración)
    await saveRolArchivo({
      nombre: req.file.originalname,
      archivo: req.file.buffer,
      path: req.file.originalname, // o la ruta donde lo guardas, si aplica
      usuario: "usuario_demo",
    });

    res.status(200).json({ message: "Archivo guardado", numSheets });
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
