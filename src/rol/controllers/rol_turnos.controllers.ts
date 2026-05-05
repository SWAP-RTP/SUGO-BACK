import { Request, Response } from "express";
import sequelize from "../../General/DB/db";
import { obtenerTurnosRol } from "../services/rol_turnos.services";
import { guardarTurnosRolLote, guardarTurnoEditado, ejecutarCierreDia } from "../services/rol_turnos.services";

// controlador para obtener los turnos
export const getTurnosRol = async (req: Request, res: Response) => {
  try {
    const turnos = await obtenerTurnosRol();
    res.json(turnos);
  } catch (error) {
    console.error("Error al obtener los turnos del rol:", error);
    res.status(500).json({ error: "Error al obtener los turnos del rol" });
  }
};

// controlador para guardar los turnos
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

// controlador para editar un turno

export const postTurnoEditado = async (req: Request, res: Response) => {
  try {
    const turnoData = req.body;
    const resultado = await guardarTurnoEditado(turnoData);
    res.status(201).json({
      message: "Turno editado guardado exitosamente",
      data: resultado,
    });
  } catch (error) {
    console.error("Error al guardar el turno editado:", error);
    res.status(500).json({ error: "Error al guardar el turno editado" });
  }
};


// controlador para el cierre del día
export const postCierreDia = async (req: Request, res: Response) => {
  try {
    // Ejecutar el stored procedure
    const resultado = await ejecutarCierreDia();

    // Después de ejecutar el SP, obtener los nuevos datos del último lote
    const nuevosTurnos = await obtenerTurnosRol();

    res.status(200).json({
      message: "Cierre de día ejecutado exitosamente",
      id_operacion: resultado.id_operacion,
      data: nuevosTurnos,
    });
  } catch (error) {
    console.error("Error al ejecutar cierre de día:", error);
    res.status(500).json({ error: "Error al ejecutar el cierre de día" });
  }
};
