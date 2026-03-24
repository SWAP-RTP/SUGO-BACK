import { Request, Response } from "express";
import { obtenerRutas } from "../services/rutas.services";

export const rutasController = async (req: Request, res: Response) => {
  try {
    const rutas = await obtenerRutas();
    res.status(200).json(rutas);
  } catch (error) {
    console.error("Error al obtener las rutas:", error);
    res.status(500).json({ error: "Error al obtener las rutas" });
  }
};
