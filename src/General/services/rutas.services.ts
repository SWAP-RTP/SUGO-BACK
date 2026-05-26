import { QueryTypes } from "sequelize";
import sequelize from "../DB/dbswap";
import { RutaSwap } from "../interfaces/rutas.interface";

//FUNCION PARA GENERAR LAS RUTAS YA UNIDAS PARA EL FRONTEND
export const obtenerRutasPorModulo = async (modClav: number): Promise<RutaSwap[]> => {
  try {
    const rutas = await sequelize.query(
      `
      SELECT DISTINCT
        r.ruta_cve_sist,
        r.mod_clave,
        r.ruta_nombre,
        r.ruta_trayecto,        
        r.ruta_origen_cve,
        p_origen.punto_nombre AS origen_nombre,
        p_origen.punto_descrip AS origen_descripcion,
        r.ruta_destino_cve,
        p_destino.punto_nombre AS destino_nombre,
        p_destino.punto_descrip AS destino_descripcion
      FROM op_ruta AS r 
      LEFT JOIN op_ruta_punto AS p_origen
        ON r.ruta_origen_cve = p_origen.punto_cve 
      LEFT JOIN op_ruta_punto AS p_destino
        ON r.ruta_destino_cve = p_destino.punto_cve
      WHERE r.mod_clave = :modClav AND r.ruta_status = 1
      `,
      {
        replacements: { modClav },
        type: QueryTypes.SELECT,
      },
    );

    return rutas as RutaSwap[];
  } catch (error) {
    console.error("Error al obtener las rutas del back:", error);
    throw error;
  }
};

//FUNCION PARA LOS CIERRES DE CIRCUITO CORRESPONDIENTES A LOS SERVICIOS DE RUTA

export const obtenerCCPorRutaNombre = async (modClav: number, rutaNombre: number | null): Promise<any[]> => {
  try {
    const cc = await sequelize.query(
      `
      SELECT 
        r.ruta_cve_sist,
        r.ruta_destino_cve,
        r.ruta_nombre,
        p_destino.punto_nombre AS destino_nombre,
         p_destino.punto_descrip AS destino_descripcion
      FROM op_ruta AS r
      LEFT JOIN op_ruta_punto AS p_destino
        ON r.ruta_destino_cve = p_destino.punto_cve
      WHERE r.mod_clave = :modClav
        AND r.ruta_cve_movi = 3 
        AND r.ruta_status = 1
        AND (r.ruta_nombre = :rutaNombre OR :rutaNombre IS NULL OR r.ruta_nombre IS NULL)
      ORDER BY p_destino.punto_nombre
      `,
      {
        replacements: { modClav, rutaNombre },
        type: QueryTypes.SELECT,
      },
    );

    return cc;
  } catch (error) {
    console.error("Error al obtener CC:", error);
    throw error;
  }
};