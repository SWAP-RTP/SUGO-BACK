import { DataTypes, Model } from "sequelize";
import sequelize from "../../General/DB/db";
import { rolArchivos } from "../interfaces/rol_archivo.interfaces";

export class rolArchivo extends Model<rolArchivos> {}

rolArchivo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    archivo: {
      type: DataTypes.BLOB, // o DataTypes.BYTEA si usas PostgreSQL
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "rol_archivos",
    timestamps: true,
  },
);
