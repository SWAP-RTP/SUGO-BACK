import { HoraPresentacion } from "../models/presentacionPV.models";
import { PresentacionPV } from "../interface/presentacionPV.interface";

// GET
// servicio para obtener hora de presentacion
export const getHoraPresentacion = async (modulo?: number) => {
  if (modulo !== undefined) {
    return await HoraPresentacion.findAll({
      where: {
        modulo: modulo,
      },
    });
  }
  return await HoraPresentacion.findAll();
};

// POST

export const HoraPresentacionP = async (data: PresentacionPV) => {
  try {
    const postHoraPresentacion = await HoraPresentacion.create(data);
    return postHoraPresentacion;
  } catch (error) {
    console.log(error);
    return error;
  }
};
