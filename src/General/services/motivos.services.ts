import { Motivo } from "../models/motivos.models";

export const obtenerMotivos = async () => {
  return await Motivo.findAll();
};
