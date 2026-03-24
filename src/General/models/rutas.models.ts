// importamos las dependencias necesarias para definir el modelo de Sequelize
import { DataTypes, Model } from "sequelize";
// importamos la instancia de Sequelize configurada en nuestro proyecto
import sequelize from "../DB/db";
// importamos la interfaz que define la estructura de los datos de una ruta
import { Ruta } from "../interfaces/rutas.interface";

export class Rutas extends Model<Ruta> {}

Rutas.init(
  {
    ruta_cve_sist: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    mod_clave: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ruta_origen_cve: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ruta_destino_cve: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ruta_cve_movi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ruta_cve_servicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ruta_cve_tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    institucion_cve: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ruta_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ruta_trayecto: {
      type: DataTypes.STRING,
    },
    ruta_trayecto_descrip: {
      type: DataTypes.STRING,
    },
    ruta_km: {
      type: DataTypes.FLOAT,
    },
    ruta_kmdo: {
      type: DataTypes.FLOAT,
    },
    ruta_imagen: {
      type: DataTypes.STRING,
    },
    ruta_fecha_alta: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    ruta_datos_modif: {
      type: DataTypes.STRING,
    },
    ruta_obs: {
      type: DataTypes.STRING,
    },
    ruta_status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: "op_ruta",
    timestamps: false,
  },
);
