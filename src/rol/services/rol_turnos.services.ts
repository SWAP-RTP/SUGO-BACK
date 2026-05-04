import { Turnos } from "../models/rol_turnos.models";
import { TurnosEdit } from "../models/rol_turnos_edit.models";
import { Transaction } from "sequelize";

import { rolArchivo } from "../models/rol_archivo.models";

export const obtenerTurnosRol = async () => {
  const ultimoArchivo = await rolArchivo.findOne({ order: [['id', 'DESC']] });
  if (!ultimoArchivo) return [];

  return await TurnosEdit.findAll({
    where: { id_archivo: ultimoArchivo.getDataValue('id') },
    order: [['economico', 'ASC']]
  });
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
