import { rolArchivo } from "../models/rol_archivo.models";

interface SaveRolArchivoInput {
  path: string;
  nombre: string;
  usuario: string;
  modulo: number;
  periodo: number;
  archivo: Buffer;
}

export const saveRolArchivo = async (data: SaveRolArchivoInput) => {
  return await rolArchivo.create(data);
};
