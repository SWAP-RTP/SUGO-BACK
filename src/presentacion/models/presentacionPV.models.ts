import { DataTypes, Model } from "sequelize";
import sequelize from "../../General/DB/db";
import { PresentacionPV } from "../interface/presentacionPV.interface";

export class HoraPresentacion extends Model<PresentacionPV> {}

HoraPresentacion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    economico: {
      type: DataTypes.INTEGER,
    },
    credencial: {
      type: DataTypes.INTEGER,
    },
    ruta: {
      type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    hora: {
      type: DataTypes.TIME,
    },
    modulo: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "presentacion_pv",
    timestamps: false,
  },
);
