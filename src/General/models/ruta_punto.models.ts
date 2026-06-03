import { DataTypes, Model } from "sequelize";
import sequelizeSwap from "../DB/dbswap";
import { RutaPunto } from "../interfaces/rutas.interface";

export class RutaPuntos extends Model<RutaPunto> { }

RutaPuntos.init(
  {
    punto_cve: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    punto_nombre: {
      type: DataTypes.STRING,
    },
    punto_descrip: {
      type: DataTypes.STRING,
    },
    punto_status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize: sequelizeSwap,
    tableName: "op_ruta_punto",
    timestamps: false,
  },
);
