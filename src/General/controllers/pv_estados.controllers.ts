import { Request, Response } from "express";
import {
  obtenerPv_estados,
  crearPv_estado,
  obtenerPv_estados_Recepcion,
  eliminarPvEstado,
  obtenerPv_estados_Activos,
} from "../services/pv_estados.services";

// get

// Controller para obtener los estados de PV
export async function getPv_estados(req: Request, res: Response) {
  try {
    const moduloStr = req.query.modulo as string;
    const modulo = moduloStr ? Number(moduloStr) : undefined;
    const pv_estados = await obtenerPv_estados(modulo);
    res.json(pv_estados);
  } catch (error) {
    console.error("Error al obtener los estados de PV:", error);
    res
      .status(500)
      .json({ message: "Error al obtener los estados de PV", error: error });
  }
}

// Controller para obtener los estados de PV de Recepción
export async function getPv_estados_Recepcion(req: Request, res: Response) {
  try {
    const moduloStr = req.query.modulo as string;
    const modulo = moduloStr ? Number(moduloStr) : undefined;
    const pv_estados = await obtenerPv_estados_Recepcion(modulo);
    res.json(pv_estados);
  } catch (error) {
    console.error("Error al obtener los estados de recepcion", error);
    res
      .status(500)
      .json({
        message: "Error al obtener los estados de Recepcion",
        error: error,
      });
  }
}

// post

// Controller para crear un estado de PV
export async function postPv_estado(req: Request, res: Response) {
  try {
    const data = req.body;
    const nuevo = await crearPv_estado(data);
    res.status(201).json(nuevo);
  } catch (error: any) {
    const msg = error.message || "Error al crear el estado de PV";
    const status = msg.includes("ya está en despacho") ? 400 : 500;
    res.status(status).json({ error: msg });
  }
}

export async function deletePvEstado(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await eliminarPvEstado(Number(id));
    res.status(200).json({ message: "Registro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el estado de PV" });
  }
}

// Controller para obtener los estados de PV Activos (en despacho)
export async function getPv_estados_Activos(req: Request, res: Response) {
  try {
    const moduloStr = req.query.modulo as string;
    const modulo = moduloStr ? Number(moduloStr) : undefined;
    const pv_estados = await obtenerPv_estados_Activos(modulo);
    res.json(pv_estados);
  } catch (error) {
    console.error("Error al obtener los estados de PV activos:", error);
    res.status(500).json({ message: "Error al obtener los estados de PV activos", error });
  }
}
