import { DataTypes, Model } from "sequelize";
import sequelize from "../DB/db";
import { RutaPunto } from "../interfaces/rutas.interface";

export class RutaPuntos extends Model<RutaPunto> {}

RutaPuntos.init(
  {
    punto_cve: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    punto_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
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
    sequelize,
    tableName: "op_ruta_punto",
    timestamps: false,
  },
);
