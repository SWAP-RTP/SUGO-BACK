// importamos las dependencias necesarias para definir el modelo de Sequelize
import { DataTypes, Model } from "sequelize";
// importamos la instancia de Sequelize configurada en nuestro proyecto
import sequelize from "../DB/db";

// importamos la interfaz que define la estructura de los datos del motivo
import { pv_registros } from "../interfaces/pv_estados.interface";
import { Motivo } from "./motivos.models";

export class Pv_estados extends Model<pv_registros> {}

Pv_estados.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_modulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    economico: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_motivos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    credencial: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    turno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo_eco: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    extintor_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    extintor_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_modalidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_ruta: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cc: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    verificentro: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    taller: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    origen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipo_termino: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tipo_combustible: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    linea_ruta: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    eco_estatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    sequelize,
    tableName: "pv_registros",
    timestamps: false,
  },
);
Pv_estados.belongsTo(Motivo, {
  foreignKey: "id_motivos",
  targetKey: "id",
  as: "detalleMotivo",
});
