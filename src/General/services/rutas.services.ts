import { Rutas } from "../models/rutas.models";

export const obtenerRutas = async () => {
  try {
    const rutas = await Rutas.findAll({
      limit: 100,
    });
    return rutas;
  } catch (error) {
    console.error("Error al obtener las rutas:", error);
    throw error;
  }
};
