import { Request, Response } from "express";
import { obtenerRutasPorModulo, obtenerCCPorRutaNombre } from "../services/rutas.services";

//CONTROLADOR PARA OBTENER LAS RUTAS POR MODULO, SE OBTIENE EL MODULO DEL TOKEN 
export const rutasController = async (req: Request, res: Response) => {
  try {
    const modClav = req.usuario?.modulo;

    if (!modClav) {
      return res.status(400).json({ error: "Falta el parámetro modClav" });
    }

    const rutas = await obtenerRutasPorModulo(modClav);
    res.status(200).json(rutas);
  } catch (error) {
    console.error("Error al obtener las rutas:", error);
    res.status(500).json({ error: "Error al obtener las rutas" });
  }
};

//CONTROLADOR PARA OBTENER LOS CIERRES DE CIRCUITO CORRESPONDIENTES A LOS SERVICIOS DE RUTA
export const rutasCCController = async (req: Request, res: Response) => {
  try {
    const modClav = req.usuario?.modulo;
    const rutaNombre = req.params.rutaNombre ? Number(req.params.rutaNombre as string) : null;

    if (!modClav) {
      return res.status(400).json({ error: "Falta el parámetro modClav" });
    }

    const cc = await obtenerCCPorRutaNombre(modClav, rutaNombre);
    res.status(200).json(cc);
  } catch (error) {
    console.error("Error al obtener los cierres de circuito:", error);
    res.status(500).json({ error: "Error al obtener los cierres de circuito" });
  }
};