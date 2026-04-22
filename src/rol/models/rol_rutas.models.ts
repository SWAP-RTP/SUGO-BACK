import { DataTypes, Model } from "sequelize";
import sequelize from "../../General/DB/db";
import { rol_rutas } from "../interfaces/rol_rutas.interfaces";

export class rolRutas extends Model<rol_rutas> {}

rolRutas.init(
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
      allowNull: false,
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "rol_rutas",
    timestamps: false,
  },
);
