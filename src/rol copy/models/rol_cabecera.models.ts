import { DataTypes, Model } from "sequelize";
import sequelize from "../../General/DB/db";
import { CabeceraRol } from "../interfaces/rol_cabecera.interfaces";

export class RolCabecera extends Model<CabeceraRol> {}

RolCabecera.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    periodos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ruta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    origen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    modalidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    modulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "rol_cabecera",
    timestamps: false,
  },
);
