import { DataTypes, Model } from "sequelize";
import sequelize from "../../General/DB/db";
import { rolPeriodos } from "../interfaces/rol_periodos.interfaces";

export class Periodos extends Model<rolPeriodos> {}

Periodos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    periodo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "periodos_rol",
    timestamps: false,
  },
);
