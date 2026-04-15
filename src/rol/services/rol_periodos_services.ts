import { Periodos } from "../models/rol_periodos.models";

export const obtenePeriodos = async () => {
    try {
        const periodos = await Periodos.findAll();
        return periodos;
    } catch (error) {
        console.error("Error al obtener los periodos:", error);
        throw error;
    }
}