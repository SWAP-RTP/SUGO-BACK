import { Request, Response } from "express";
import {
  obtenerPv_estados,
  crearPv_estado,
  obtenerPv_estados_Recepcion,
  eliminarPvEstado,
  obtenerUltimoRegistroPorEconomico
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
}

export async function verificarEconomico(req: Request, res: Response) {
  try {
    const { economico } = req.params;

    if (!economico) {
      return res.status(400).json({ message: "El numero economico es requerido" });
    }

    const ultimoRegistro = await obtenerUltimoRegistroPorEconomico(Number(economico));
    //PRIMERA REGLA SI NO TIENE REGISTROS PREVIOS EN LA TABLA , NO P[UEDE ENTRAR A PATIO]
    if (!ultimoRegistro) {
      return res.status(404).json({
        valido: false,
        message: `El Economico ${economico} no cuenta con registros de despacho previos. No se puede registrar su recepcion`,
      });
    }

    //SEGUNDA REGLA  SI EL ESTADO ES 2 (RECEPCION), SIGNIFICA QUE YA ESTA EN PATIO
    if (ultimoRegistro.eco_estatus === 2) {
      return res.status(400).json({
        valido: false,
        message: `El Economico ${economico} ya se encuentra en Patio. Debe salir a Ruta antes de volver a recibirse `,
      });
    }
    //SI PASA LOS FILTROS (eco_estatus 1), es apto para ser recibido
    res.json({
      valido: true,
      registro: ultimoRegistro
    });

  } catch (error) {
    console.error("Error al verificar el economico", error);
    res.status(500).json({ message: "Error al verificar el economico", error });
  }
}
