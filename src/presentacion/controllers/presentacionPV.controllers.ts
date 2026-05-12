import { Request, Response } from "express";
import {
  getHoraPresentacion,
  HoraPresentacionP,
} from "../services/presentacionPV.services";

// GET

// CONTROLLADOR PARA OBTENER HORA DE PRESENTACION
export const HoraPresentacionController = async (
  req: Request,
  res: Response,
) => {
  try {
    const HoraPresentacion = await getHoraPresentacion();
    res.status(200).json(HoraPresentacion);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

// POST

// CONTROLLADOR PARA CREAR LA HORA DE PRESENTACION
export const HoraPresentacionControllerP = async (
  req: Request,
  res: Response,
) => {
  try {
    const HoraPresentacion = await HoraPresentacionP(req.body);
    res.status(201).json(HoraPresentacion);
  } catch (error) {
    res.status(500).json({ message: "error al crear la hora de presentacion" });
  }
};
