import { Motivo } from "../models/motivos.models";
export const obtenerMotivos = async () => {
  return await Motivo.findAll({
    where: {
      tipo: 1, // Solo obtener motivos de tipo 1
    },
    order: [["id", "ASC"]],
  });
};
