// importamos las dependencias necesarias para definir el modelo de Sequelize
import { DataTypes, Model } from "sequelize";
// importamos la instancia de Sequelize configurada en nuestro proyecto
import sequelize from "../DB/db";

// importamos la interfaz que define la estructura de los datos del motivo
import { pv_estados } from "../interfaces/pv_estados.interface";

export class Pv_estados extends Model<pv_estados> {}

Pv_estados.init(  
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    momento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eco: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eco_estatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eco_tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    motivo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    motivo_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    modulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ruta: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ruta_modalidad: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ruta_cc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    op_cred: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    op_turno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    extintor: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    estatus: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdBy_modulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    prev_values: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    registro_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    modulo_puerta: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    hora_entrada_operador: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "pv_estados",
    timestamps: false,
  },
);
