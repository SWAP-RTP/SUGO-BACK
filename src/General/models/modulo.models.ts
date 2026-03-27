import { DataTypes, Model } from "sequelize";
import sequelize from "../DB/db";
import { Modulos } from "../interfaces/modulos.interface";

export class Modulo extends Model<Modulos> {}

Modulo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    modulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    mod_clave: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "modulos",
    timestamps: false,
  },
);
