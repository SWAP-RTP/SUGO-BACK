import { Request, Response } from "express";
import {
  crearCabeceraRol,
  guardarCabeceraRol,
} from "../services/rol_cabecera.services";

export async function obtenerCabeceraRol(req: Request, res: Response) {
  try {
    const cabecera = await crearCabeceraRol();
    res.json(cabecera);
  } catch (error) {
    console.error("Error al obtener la cabecera del rol:", error);
    res.status(500).json({ error: "Error al obtener la cabecera del rol" });
  }
}


// Controlador para crear una nueva cabecera del rol, recibe los datos desde el cuerpo 
// de la solicitud y utiliza la función guardarCabeceraRol para guardarlos en la base de datos
export async function crearCabeceraRolController(req: Request, res: Response) {
  try {
    const datos = req.body;
    const nuevaCabecera = await guardarCabeceraRol(datos);
    res.status(201).json({
      mensaje: "Cabecera de rol creada exitosamente",
      data: nuevaCabecera
    });
  } catch (error) {
    console.error("Error al crear la cabecera del rol:", error);
    res.status(500).json({ error: "Error al crear la cabecera del rol" });
  }
}