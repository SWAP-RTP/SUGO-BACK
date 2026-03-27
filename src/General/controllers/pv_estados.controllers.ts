import { Request, Response } from "express";
import { obtenerPv_estados } from "../services/pv_estados.services";

export async function getPv_estados(req: Request, res: Response) {
  try {
    const pv_estados = await obtenerPv_estados();
    res.json(pv_estados);
  } catch (error) {
    console.error("Error al obtener los estados de PV:", error);
    res
      .status(500)
      .json({ message: "Error al obtener los estados de PV", error: error });
  }
}