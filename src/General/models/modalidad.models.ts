import { DataTypes, Model } from "sequelize";
import sequelizeSwap from "../DB/dbswap";
import { Modalidad } from "../interfaces/modalidad.interface";

export class Modalidades extends Model<Modalidad> { }

Modalidades.init(
  {
    ruta_cve_servicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    servicio_descrip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeSwap,
    tableName: "op_ruta_serv",
    timestamps: false,
  },
);
