import { Request, Response } from "express";
import { obtenerModulos } from "../services/modulo.services";

export const modulosController = async (req: Request, res: Response) => {
  try {
    const modulos = await obtenerModulos();
    res.status(200).json(modulos);
  } catch (error) {
    console.error("Error al obtener los módulos:", error);
    res.status(500).json({ error: "Error al obtener los módulos" });
  }
};


