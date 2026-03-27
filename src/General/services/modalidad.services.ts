import { Modalidades } from "../models/modalidad.models";

export const obtenerModalidades = async () => {
  return await Modalidades.findAll({
    order: [["ruta_cve_servicio", "ASC"]],
  });
};
