import { rolArchivo } from "../models/rol_archivo.models";
import { Transaction } from "sequelize";

interface SaveRolArchivoInput {
  path: string;
  nombre: string;
  usuario: string;
  modulo: number;
  periodo: number;
  archivo: Buffer;
}

export const saveRolArchivo = async (
  data: SaveRolArchivoInput,
  transaction?: Transaction,
) => {
  const options = transaction ? { transaction } : undefined;
  return await rolArchivo.create(data, options);
};
