// importamos las dependencias necesarias para definir el modelo de Sequelize
import { DataTypes, Model } from "sequelize";
// importamos la instancia de Sequelize configurada en nuestro proyecto
import sequelize from "../DB/db";
// importamos la interfaz que define la estructura de los datos del motivo
import { Motivos } from "../interfaces/motivos.interfaces";

// definimos la clase Motivo que extiende de Model, utilizando la interfaz Motivos para tipar los atributos del modelo
export class Motivo extends Model<Motivos> {}

// inicializamos el modelo de Sequelize con la estructura de la tabla "motivo" y sus campos correspondientes
Motivo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eco_disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    estatus: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
    prev_values: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    tableName: "pv_estados_motivos",
    timestamps: true,
  }
);