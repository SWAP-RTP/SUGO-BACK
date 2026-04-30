import {RolTurnoDetalle} from "../interfaces/rol_turno_detalle.interfaces";
import { DataTypes, Model } from "sequelize";
import sequelize from "../../General/DB/db";


// Modelo para informacion de lunes a viernes
export class Rol_Detalle_LV extends Model<RolTurnoDetalle> {}

    Rol_Detalle_LV.init({
 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_archivo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nombre_ruta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    economico: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hora_inicio_1: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_inicio_cc_1: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_inicio_1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_termino_turno_1: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_inicio_2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_inicio_2: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_termino_turno_2: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_inicio_3: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_inicio_turno_3: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_termino_cc_t: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_termino_cc_t: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    termino_modulo_t: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    termino_turno_t: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    
},{
    sequelize,
    tableName: "rol_turno_lv",
    timestamps: false,

});

// modelo para informacion de sabado y domingo
export class Rol_Detalle_SD extends Model<RolTurnoDetalle> {}

    Rol_Detalle_SD.init({
 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_archivo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nombre_ruta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    economico: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hora_inicio_1: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_inicio_cc_1: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_inicio_1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_termino_turno_1: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_inicio_2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_inicio_2: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_termino_turno_2: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_inicio_3: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_inicio_turno_3: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_termino_cc_t: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_termino_cc_t: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    termino_modulo_t: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    termino_turno_t: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    

},{
    sequelize,
    tableName: "rol_turno_sabado",
    timestamps: false,

});

// modelo para informacion del domingo
export class Rol_Detalle_Dom extends Model<RolTurnoDetalle> {}

    Rol_Detalle_Dom.init({
 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_archivo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nombre_ruta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    economico: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hora_inicio_1: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_inicio_cc_1: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_inicio_1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_termino_turno_1: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_inicio_2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_inicio_2: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_termino_turno_2: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_inicio_3: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_inicio_turno_3: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_termino_cc_t: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lugar_termino_cc_t: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    termino_modulo_t: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    termino_turno_t: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    

},{
    sequelize,
    tableName: "rol_turno_domingo",
    timestamps: false,

});

