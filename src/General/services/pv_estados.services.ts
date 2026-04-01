import { Pv_estados } from "../models/pv_estados.models";

export async function obtenerPv_estados() {
  return await Pv_estados.findAll({
    limit: 1000,
    order: [["id", "DESC"]],
  });
}

export async function crearPv_estado(data: any) {
  const PostPv = await Pv_estados.create(data);
  return PostPv;
}
