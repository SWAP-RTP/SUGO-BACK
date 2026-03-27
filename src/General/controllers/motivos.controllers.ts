import { Request, Response } from "express";
import { obtenerMotivos, ObtenerMotivosRecepcion } from "../services/motivos.services";

export const motivosController = async (req: Request, res: Response) => {
  try {
    const motivos = await obtenerMotivos();
    res.status(200).json(motivos);
  } catch (error) {
    console.error("Error al obtener los motivos:", error);
    res.status(500).json({ error: "Error al obtener los motivos" });
  }
};

export const motivosControllerRecepcion = async (req: Request, res: Response) => {
  try {
    const motivosRecepcion = await ObtenerMotivosRecepcion();
    res.status(200).json(motivosRecepcion);
  } catch (error) {
    console.error("Error al obtener los motivos", error);
    res.status(500).json({ error: "Error al obtner los motivos" });
  }
};
