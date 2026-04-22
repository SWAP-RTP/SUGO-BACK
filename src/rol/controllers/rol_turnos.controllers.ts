import { Request, Response } from "express";
import sequelize from "../../General/DB/db";
import { obtenerTurnosRol } from "../services/rol_turnos.services";
import { guardarTurnosRolLote } from "../services/rol_turnos.services";

export const getTurnosRol = async (req: Request, res: Response) => {
  try {
    const turnos = await obtenerTurnosRol();
    res.json(turnos);
  } catch (error) {
    console.error("Error al obtener los turnos del rol:", error);
    res.status(500).json({ error: "Error al obtener los turnos del rol" });
  }
};

export const postTurnosRol = async (req: Request, res: Response) => {
  try {
    const turnos = req.body; // Debe ser un array de turnos
    const resultado = await guardarTurnosRolLote(turnos);
    res.status(201).json({
      message: "Turnos guardados exitosamente",
      data: resultado,
    });
  } catch (error) {
    console.error("Error al guardar los turnos del rol:", error);
    res.status(500).json({ error: "Error al guardar los turnos del rol" });
  }
};
