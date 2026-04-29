import { Request, Response } from "express";
// importamos los servicios
import { obtener_detalle_lv, obtener_detalle_sd, obtener_detalle_dom, crear_detalle_lv, crear_detalle_sd, crear_detalle_dom } from "../services/rol_turno_detalle.services";


// !!** controladores para el get

// Controller para obtener el detalle de lunes a viernes

export const get_detalle_lv = async (req: Request, res: Response) => {

    try {
        const detalle_lv = await obtener_detalle_lv();
        res.json(detalle_lv);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el detalle de lunes a viernes", error });
    }
}

// Controller para obtener el detalle de sabado

export const get_detalle_sd = async (req: Request, res: Response) => {

    try {
        const detalle_sd = await obtener_detalle_sd();
        res.json(detalle_sd);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el detalle de sabado", error });
    }
}

// Controller para obtener el detalle de domingo

export const get_detalle_dom = async (req: Request, res: Response) => {

    try {
        const detalle_dom = await obtener_detalle_dom();
        res.json(detalle_dom);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el detalle de domingo", error });
    }
}


// !!** controladores para el post **!!

export const post_detalle_lv = async (req: Request, res: Response) => {

    try {
        const detalle_lv = req.body;
        const data = await crear_detalle_lv(detalle_lv);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el detalle de lunes a viernes", error });
    }
}

export const post_detalle_sd = async (req: Request, res: Response) => {

    try {
        const detalle_sd = req.body;
        const data = await crear_detalle_sd(detalle_sd);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el detalle de sabado", error });
    }
}

export const post_detalle_dom = async (req: Request, res: Response) => {

    try {
        const detalle_dom = req.body;
        const data = await crear_detalle_dom(detalle_dom);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el detalle de domingo", error });
    }
}
