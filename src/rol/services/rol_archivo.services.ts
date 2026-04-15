import { rolArchivo } from "../models/rol_archivo.models";

export const saveRolArchivo = async (data: any) => {
  return await rolArchivo.create(data);
};
