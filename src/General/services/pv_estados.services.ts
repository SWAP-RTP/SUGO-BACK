import { Pv_estados } from "../models/pv_estados.models";
import { Motivo } from "../models/motivos.models";

export async function obtenerPv_estados() {
  return await Pv_estados.findAll({
    limit: 1000,
    order: [["id", "DESC"]],
    where: {
      tipo: 1
    },
    include: [
      {
        model: Motivo,
        as: "detalleMotivo",
        attributes: ["desc"],
      }
    ]
  });
}

export async function obtenerPv_estados_Recepcion() {
  return await Pv_estados.findAll({
    limit: 1000,
    order: [["id", "DESC"]],
    where: {
      tipo: 2
    },
    include: [
      {
        model: Motivo,
        as: "detalleMotivo",
        attributes: ["desc"],
      }
    ]
  });
}


export async function crearPv_estado(data: any) {
  const PostPv = await Pv_estados.create(data);
  return PostPv;
}

export const eliminarPvEstado = async (id: number) => {
  const registro = await Pv_estados.findByPk(id);
  if (!registro) throw new Error("Registro no encontrado");
  await registro.destroy();
};
