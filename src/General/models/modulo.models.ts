// importamos las dependencias necesarias para definir el modelo de Sequelize
import { DataTypes, Model } from "sequelize";
// importamos la instancia de Sequelize configurada en nuestro proyecto
import sequelize from "../DB/db";
// importamos la interfaz que define la estructura de los datos del módulo
import { Modulos } from "../interfaces/modulos.interface";

// definimos la clase Modulo que extiende de Model, utilizando la interfaz Modulos para tipar los atributos del modelo
export class Modulo extends Model<Modulos> {}

// inicializamos el modelo de Sequelize con la estructura de la tabla "modulos" y sus campos correspondientes

Modulo.init(
  {
    mod_clave: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    mod_nombre: {
      type: DataTypes.STRING,
    },
    mod_direccion: {
      type: DataTypes.STRING,
    },
    mod_telefono: {
      type: DataTypes.STRING,
    },
    mod_reponsable: {
      type: DataTypes.STRING,
    },
    mod_tipo: {
      type: DataTypes.STRING,
    },
    mod_desc: {
      type: DataTypes.STRING,
    },
    mod_servidor: {
      type: DataTypes.STRING,
    },
    mod_estado: {
      type: DataTypes.BOOLEAN,
    },
    mod_maestro: {
      type: DataTypes.BOOLEAN,
    },
    mod_estado_almacen: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    tableName: "modulo",
    timestamps: false,
  },
);
