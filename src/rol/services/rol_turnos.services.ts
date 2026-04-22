import { Turnos } from "../models/rol_turnos.models";
import { Transaction } from "sequelize";

export const obtenerTurnosRol = async () => {
  return await Turnos.findAll();
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
