import { Request, Response } from "express";
import { obtenerModalidades } from "../services/modalidad.services";

export const getModalidades = async (req: Request, res: Response) => {
  try {
    const modalidades = await obtenerModalidades();
    res.json(modalidades);
  } catch (error) {
    console.error("Error al obtener modalidades:", error);
    res.status(500).json({ error: "Error al obtener modalidades" });
  }
};
