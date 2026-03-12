import { Modulo } from "../models/modulo.models";

export const obtenerModulos = async () => {
  return await Modulo.findAll();
};
