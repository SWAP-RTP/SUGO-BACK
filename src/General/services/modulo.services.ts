import { Modulo } from "../models/modulo.models";
import { Op } from "sequelize";

export const obtenerModulos = async () => {
  return await Modulo.findAll({
    // where: {
    //   mod_nombre: {
    //     [Op.between]: ["01", "07"],
    //   },
    // },
  });
};
