import { DataTypes, Model } from "sequelize";
import sequelize from "../../General/DB/db";
import { RolTurnos } from "../interfaces/rol_turnos.interfaces";

export class Turnos extends Model<RolTurnos> {}

Turnos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_archivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    economico: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sistema: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    primer_t: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    segundo_t: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tercer_t: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "rol_turnos",
    timestamps: false,
  },
);
