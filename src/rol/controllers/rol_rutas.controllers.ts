import { Request, Response } from "express";
import { obtenerRutasRol } from "../services/rol_rutas.services";
import { guardarRutasRol } from "../services/rol_rutas.services";

export const getRutasRol = async (req: Request, res: Response) => {
  try {
    const rutas = await obtenerRutasRol();
    res.json(rutas);
  } catch (error) {
    console.error("Error al obtener las rutas del rol:", error);
    res.status(500).json({ error: "Error al obtener las rutas del rol" });
  }
};

export const postRutasRol = async (req: Request, res: Response) => {
  try {
    const datos = req.body;
    const nuevaRuta = await guardarRutasRol(datos);
    res.status(201).json({
      message: "Ruta del rol guardada exitosamente",
      data: nuevaRuta,
    });
  } catch (error) {
    console.error("Error al guardar la ruta del rol:", error);
    res.status(500).json({ error: "Error al guardar la ruta del rol" });
  }
};
