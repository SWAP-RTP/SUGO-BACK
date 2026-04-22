import { rolRutas } from "../models/rol_rutas.models";
import { rol_rutas } from "../interfaces/rol_rutas.interfaces";
import { Transaction } from "sequelize";

export const obtenerRutasRol = async () => {
  return await rolRutas.findAll();
};

export const guardarRutasRol = async (data: rol_rutas) => {
  try {
    const nuevaRuta = await rolRutas.create({
      ...data,
      createdat: data.createdat ?? new Date(),
    });
    return nuevaRuta;
  } catch (error) {
    console.error("Error al guardar la ruta del rol:", error);
    throw new Error("Error al guardar la ruta del rol");
  }
};

export const guardarRutasRolLote = async (
  rutas: Omit<rol_rutas, "id" | "createdat">[],
  transaction?: Transaction,
) => {
  try {
    const opciones = transaction ? { transaction } : undefined;

    return await rolRutas.bulkCreate(
      rutas.map((ruta) => ({
        ...ruta,
        createdat: new Date(),
      })),
      opciones,
    );
  } catch (error) {
    console.error("Error al guardar las rutas del rol:", error);
    throw new Error("Error al guardar las rutas del rol");
  }
};
