import { Rol_Detalle_LV, Rol_Detalle_SD, Rol_Detalle_Dom } from "../models/rol_turno_detalle.models";
import { Turnos } from "../models/rol_turnos.models";
import { RolTurnoDetalle } from "../interfaces/rol_turno_detalle.interfaces";
import { Transaction } from "sequelize";
import { rolArchivo } from "../models/rol_archivo.models";

//Obtener el detalle de los turnos 
export const obtener_detalle_turnos = async () => {
    const ultimoArchivo = await rolArchivo.findOne({ order: [['id', 'DESC']] });
    if (!ultimoArchivo) return [];

    const detalle_turno = await Turnos.findAll({
        where: { id_archivo: ultimoArchivo.getDataValue('id') }
    });
    return detalle_turno;
}

// Obtener el detalle de lunes a viernes

export const obtener_detalle_lv = async () => {
    // Buscamos el último archivo registrado
    const ultimoArchivo = await rolArchivo.findOne({ order: [['id', 'DESC']] });
    if (!ultimoArchivo) return [];

    const detalle_lv = await Rol_Detalle_LV.findAll({
        where: { id_archivo: ultimoArchivo.getDataValue('id') }
    });
    return detalle_lv;
}

// Obtener el detalle de sabado

export const obtener_detalle_sd = async () => {
    const ultimoArchivo = await rolArchivo.findOne({ order: [['id', 'DESC']] });
    if (!ultimoArchivo) return [];

    const detalle_sd = await Rol_Detalle_SD.findAll({
        where: { id_archivo: ultimoArchivo.getDataValue('id') }
    });
    return detalle_sd;
}

// Obtener el detalle de domingo

export const obtener_detalle_dom = async () => {
    const ultimoArchivo = await rolArchivo.findOne({ order: [['id', 'DESC']] });
    if (!ultimoArchivo) return [];

    const detalle_dom = await Rol_Detalle_Dom.findAll({
        where: { id_archivo: ultimoArchivo.getDataValue('id') }
    });
    return detalle_dom;
}


// !*** funciones para crear (POST) 

// crear el detalle de lunes a viernes

export const crear_detalle_lv = async (data: RolTurnoDetalle) => {

    try {
        const detalle_lv = await Rol_Detalle_LV.create(data);
        return detalle_lv;
    } catch (error) {
        throw new Error("Error al crear el detalle de lunes a viernes");
    }
}


// crear el detalle de sabado

export const crear_detalle_sd = async (data: RolTurnoDetalle) => {

    try {
        const detalle_sd = await Rol_Detalle_SD.create(data);
        return detalle_sd;
    } catch (error) {
        throw new Error("Error al crear el detalle de sabado");
    }
}

// crear el detalle de domingo

export const crear_detalle_dom = async (data: RolTurnoDetalle) => {

    try {
        const detalle_dom = await Rol_Detalle_Dom.create(data);
        return detalle_dom;
    } catch (error) {
        throw new Error("Error al crear el detalle de domingo");
    }
}


// Función para guardar los detalles de turnos de manera masiva con transacción
export const guardarDetallesTurnosLote = async (
    datosLV: RolTurnoDetalle[],
    datosSD: RolTurnoDetalle[],
    datosDom: RolTurnoDetalle[],
    transaction?: Transaction
) => {
    try {
        const lvGuardados = datosLV.length > 0 ? await Rol_Detalle_LV.bulkCreate(datosLV, { transaction: transaction || null }) : [];
        const sdGuardados = datosSD.length > 0 ? await Rol_Detalle_SD.bulkCreate(datosSD, { transaction: transaction || null }) : [];
        const domGuardados = datosDom.length > 0 ? await Rol_Detalle_Dom.bulkCreate(datosDom, { transaction: transaction || null }) : [];

        return {
            lvGuardados,
            sdGuardados,
            domGuardados
        };
    } catch (error) {
        console.error("Error en guardarDetallesTurnosLote:", error);
        throw new Error("Error al guardar los detalles de los turnos en lote");
    }
}

// update
