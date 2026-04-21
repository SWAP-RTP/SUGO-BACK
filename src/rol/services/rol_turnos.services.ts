import { Turnos } from "../models/rol_turnos.models";

export const obtenerTurnosRol = async () => {
  return await Turnos.findAll();
};
