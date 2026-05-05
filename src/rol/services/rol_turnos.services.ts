import { Turnos } from "../models/rol_turnos.models";
import { TurnosEdit } from "../models/rol_turnos_edit.models";
import { Transaction, QueryTypes } from "sequelize";
import sequelize from "../../General/DB/db";

import { rolArchivo } from "../models/rol_archivo.models";

export const obtenerTurnosRol = async () => {
  // Buscar el id_operacion más reciente en rol_turnos_edit
  const ultimoLote = await TurnosEdit.findOne({
    attributes: ['id_operacion'],
    where: {
      id_operacion: { [require('sequelize').Op.ne]: null }
    },
    order: [['createdat', 'DESC']],
  });

  if (ultimoLote && ultimoLote.getDataValue('id_operacion')) {
    // Traer solo los registros del último lote (último cierre de día)
    return await TurnosEdit.findAll({
      where: { id_operacion: ultimoLote.getDataValue('id_operacion') },
      order: [['economico', 'ASC']],
    });
  }

  // Fallback: si no hay lotes con id_operacion, usar lógica original por id_archivo
  const ultimoArchivo = await rolArchivo.findOne({ order: [['id', 'DESC']] });
  if (!ultimoArchivo) return [];

  return await TurnosEdit.findAll({
    where: { id_archivo: ultimoArchivo.getDataValue('id') },
    order: [['economico', 'ASC']]
  });
};

export const ejecutarCierreDia = async () => {
  // Ejecutar el stored procedure de cierre de día
  await sequelize.query('CALL pr_ejecutar_cierre_dia()', {
    type: QueryTypes.RAW,
  });

  // Después de ejecutar el SP, obtener el id_operacion más reciente que acaba de generar
  const nuevoLote = await TurnosEdit.findOne({
    attributes: ['id_operacion'],
    where: {
      id_operacion: { [require('sequelize').Op.ne]: null }
    },
    order: [['createdat', 'DESC']],
  });

  const idOperacion = nuevoLote ? nuevoLote.getDataValue('id_operacion') : null;

  return { id_operacion: idOperacion };
};

export const guardarTurnosRolLote = async (
  turnos: any[],
  transaction?: Transaction,
) => {
  const opciones = transaction ? { transaction } : undefined;

  return await Turnos.bulkCreate(
    turnos.map((t) => ({
      ...t,
      createdat: new Date(),
      updatedat: new Date(),
    })),
    opciones,
  );
};

export const guardarTurnoEditado = async (turnoData: any) => {
  const { id, ...dataSinId } = turnoData;
  return await TurnosEdit.update(
    {
      ...dataSinId,
      updatedat: new Date(),
    },
    { where: { id } }
  );
};

