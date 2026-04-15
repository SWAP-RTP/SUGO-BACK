import { Request, Response } from "express";
import { obtenePeriodos } from "../services/rol_periodos_services";

export const periodosController = async (req: Request, res: Response) => {
  try {
    const periodos = await obtenePeriodos();
    res.json(periodos);
  } catch (error) {
    console.error("Error al obtener los periodos:", error);
    res.status(500).json({ error: "Error al obtener los periodos" });
  }
};
