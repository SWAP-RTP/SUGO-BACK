import { Pv_estados } from "../models/pv_estados.models";
import { Motivo } from "../models/motivos.models";
import { Op } from "sequelize";
import sequelize from "../DB/db";

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
  // Si es un despacho (eco_estatus === 1), validar que no esté ya en despacho en el mismo módulo
  if (data.eco_estatus === 1 || data.eco_estatus === "1") {
    const eco = Number(data.economico);
    const modulo = Number(data.id_modulo);
    // Buscar el último estado de este económico en este módulo
    const ultimoEstado = await Pv_estados.findOne({
      where: {
        economico: eco,
        id_modulo: modulo
      },
      order: [["id", "DESC"]],
    });
    if (ultimoEstado && Number(ultimoEstado.getDataValue("eco_estatus")) === 1) {
      throw new Error(`El económico ${eco} ya está en despacho y necesita terminar la jornada.`);
    }
  }
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

export async function obtenerPv_estados_Activos(modulo?: number) {
  // 1. Obtener el max id para cada economico, filtrado opcionalmente por modulo
  const subqueryWhere: any = {};
  if (modulo !== undefined) {
    subqueryWhere.id_modulo = modulo;
  }

  const subquery = await Pv_estados.findAll({
    attributes: [
      [sequelize.fn("MAX", sequelize.col("id")), "id"]
    ],
    where: subqueryWhere,
    group: ["economico"],
    raw: true,
  });

  const ids = subquery.map((r: any) => r.id).filter(Boolean);
  if (ids.length === 0) return [];

  const whereCondition: any = {
    id: { [Op.in]: ids },
    eco_estatus: 1,
  };
  if (modulo !== undefined) {
    whereCondition.id_modulo = modulo;
  }

  return await Pv_estados.findAll({
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
