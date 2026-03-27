import { Pv_estados } from "../models/pv_estados.models";

export async function obtenerPv_estados() {
  return await Pv_estados.findAll({
    limit: 1000,
  });
}
