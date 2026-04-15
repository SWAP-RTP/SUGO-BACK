import { Request, Response } from "express";
import {
  obtenerPv_estados,
  crearPv_estado,
  obtenerPv_estados_Recepcion,
  eliminarPvEstado

} from "../services/pv_estados.services";

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

export async function getPv_estados_Recepcion(req: Request, res: Response) {
  try {
    const pv_estados = await obtenerPv_estados_Recepcion();
    res.json(pv_estados);
  } catch (error) {
    console.error("Error al obtener los estados de recepcion", error);
    res.status(500).json({ message: "Error al obtener los estados de Recepcion", error: error });
  }
}

export async function postPv_estado(req: Request, res: Response) {
  try {
    const data = req.body;
    const nuevo = await crearPv_estado(data);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el estado de PV", error });
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
};
