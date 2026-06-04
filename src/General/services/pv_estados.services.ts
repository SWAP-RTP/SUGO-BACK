import { Pv_estados } from "../models/pv_estados.models";
import { Motivo } from "../models/motivos.models";

// Get
// Obtener los últimos 1000 registros de pv_estados con tipo 1 (Despacho)
export async function obtenerPv_estados(modulo?: number) {
  const whereCondition: any = {
    eco_estatus: 1,
  };
  if (modulo !== undefined) {
    whereCondition.id_modulo = modulo;
  }
  return await Pv_estados.findAll({
    limit: 1000,
    order: [["id", "DESC"]],
    where: whereCondition,
    include: [
      {
        model: Motivo,
        as: "detalleMotivo",
        attributes: ["desc"],
      },
    ],
  });
}

// get
// Obtener los últimos 1000 registros de pv_estados con tipo 2 (Recepción)
export async function obtenerPv_estados_Recepcion(modulo?: number) {
  const whereCondition: any = {
    eco_estatus: 2,
  };
  if (modulo !== undefined) {
    whereCondition.id_modulo = modulo;
  }
  return await Pv_estados.findAll({
    limit: 1000,
    order: [["id", "DESC"]],
    where: whereCondition,
    include: [
      {
        model: Motivo,
        as: "detalleMotivo",
        attributes: ["desc"],
      },
    ],
  });
}

// post
// Crear un nuevo registro en pv_estados
export async function crearPv_estado(data: any) {
  const PostPv = await Pv_estados.create(data);
  return PostPv;
}

// eleminar un registro de pv_estados por su ID
export const eliminarPvEstado = async (id: number) => {
  const registro = await Pv_estados.findByPk(id);
  if (!registro) throw new Error("Registro no encontrado");
  await registro.destroy();
};

//BUSCAR EL ULTIMO REGISTRO DE UN ECONOMICO PARA VALIDAR SU ESTADO ACTUAL.
export async function obtenerUltimoRegistroPorEconomico(economico: number) {
  return await Pv_estados.findOne({
    where: { economico },
    order: [["id", "DESC"]],//TRAE EL ULTIMO INSERTADO 
    include: [{
      model: Motivo,
      as: "detalleMotivo",
      attributes: ["desc"]
    },
    ],
  });
}