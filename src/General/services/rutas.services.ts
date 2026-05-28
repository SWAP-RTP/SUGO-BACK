import { QueryTypes, Op } from "sequelize";
import sequelize from "../DB/dbswap";
import { RutaSwap } from "../interfaces/rutas.interface";
import { Rutas } from "../models/rutas.models";
import { RutaPuntos } from "../models/ruta_punto.models";


//FUNCION PARA GENERAR LAS RUTAS YA UNIDAS PARA EL FRONTEND
export const obtenerRutasPorModulo = async (modClav: number): Promise<RutaSwap[]> => {
  try {
    const rutas = await Rutas.findAll({
      attributes: [
        "ruta_cve_sist",
        "mod_clave",
        "ruta_nombre",
        "ruta_trayecto",
        "ruta_origen_cve",
        "ruta_destino_cve"
      ],
      where: {
        mod_clave: modClav,
        ruta_status: 1
      },
      include: [
        {
          model: RutaPuntos,
          as: "origen",
          attributes: ["punto_nombre", "punto_descrip"]
        },
        {
          model: RutaPuntos,
          as: "destino",
          attributes: ["punto_nombre", "punto_descrip"],
        },
      ],
    });

    const rutasFormateadas = rutas.map((rutaInstance) => {
      const ruta = rutaInstance.toJSON() as any;
      return {
        ruta_cve_sist: ruta.ruta_cve_sist,
        mod_clave: ruta.mod_clave,
        ruta_nombre: ruta.ruta_nombre,
        ruta_trayecto: ruta.ruta_trayecto,
        ruta_origen_cve: ruta.ruta_origen_cve,
        //ACCEDEMOS A LOS DAOTS DE LA RELACION DEL JOIN
        origen_nombre: ruta.origen?.punto_nombre || "",
        origen_descripcion: ruta.origen?.punto_descrip || "",
        ruta_destino_cve: ruta.ruta_destino_cve,
        destino_nombre: ruta.destino?.punto_nombre || "",
        destino_descripcion: ruta.destino?.punto_descrip || ""
      };
    });
    return rutasFormateadas as RutaSwap[];
  } catch (error) {
    console.error("Error al obtener las rutas del back:", error);
    throw error;
  }
};

//FUNCION PARA LOS CIERRES DE CIRCUITO CORRESPONDIENTES A LOS SERVICIOS DE RUTA

export const obtenerCCPorRutaNombre = async (modClav: number, rutaNombre: number | null): Promise<any[]> => {
  try {
    const whereConditions: any = {
      mod_clave: modClav,
      ruta_cve_movi: 3,
      ruta_status: 1
    };
    //SI RECIBIMOS UN NOMBRE, APLICAMOS EL OPERADOR OR, SI NO , SOLO FILTRAMOS POR NULL
    if (rutaNombre !== null) {
      whereConditions[Op.or] = [
        { ruta_nombre: rutaNombre },
        { ruta_nombre: { [Op.is]: null } }
      ];
    } else {
      whereConditions.ruta_nombre = { [Op.is]: null };
    }
    //CONSULTA CON ORM 
    const cc = await Rutas.findAll({
      attributes: [
        "ruta_cve_sist",
        "ruta_destino_cve",
        "ruta_nombre"
      ],
      where: whereConditions,
      include: [
        {
          model: RutaPuntos,
          as: "destino",
          attributes: ["punto_nombre", "punto_descrip"],
        },
      ],
      //ORDENAMOS LOS RESULTADOS POR EL DESTINO 
      order: [
        [{ model: RutaPuntos, as: "destino" }, "punto_nombre", "ASC"],
      ],
    });
    //PREPARAMOS LA RESPUESTA PARA EL CONTROLADOR 
    const ccFormateados = cc.map((ccInstance) => {
      const rutaCC = ccInstance.toJSON() as any;
      return {
        ruta_cve_sist: rutaCC.ruta_cve_sist,
        ruta_destino_cve: rutaCC.ruta_destino_cve,
        ruta_nombre: rutaCC.ruta_nombre,
        destino_nombre: rutaCC.destino?.punto_nombre || "",
        destino_descripcion: rutaCC.destino?.punto_descrip || ""
      };
    });
    return ccFormateados;
  } catch (error) {
    console.error("Error al obtener CC:", error);
    throw error;
  }
};