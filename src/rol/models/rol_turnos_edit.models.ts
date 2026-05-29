import { DataTypes, Model } from "sequelize";
import sequelize from "../../General/DB/db";
import { RolTurnos } from "../interfaces/rol_turnos.interfaces";

export class TurnosEdit extends Model<RolTurnos> { }

TurnosEdit.init(
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
    nombre_ruta: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    modalidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    modulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    economico: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sistema: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    primer_t: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    segundo_t: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tercer_t: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lunes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    martes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    miercoles: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    jueves: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    viernes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    sabado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    domingo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    id_operacion: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "rol_turnos_edit",
    timestamps: false,
  },
);
