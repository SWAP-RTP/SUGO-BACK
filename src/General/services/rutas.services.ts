import { QueryTypes } from "sequelize";
import sequelize from "../DB/db";

export const obtenerRutas = async () => {
  try {
    const rutas = await sequelize.query(
      `
      SELECT 
        op.ruta_cve_sist,
        op.mod_clave,
        op.ruta_origen_cve,
        op.ruta_destino_cve,
        op.ruta_cve_movi,
        op.ruta_cve_servicio,
        op.ruta_cve_tipo,
        op.institucion_cve,
        op.ruta_nombre,
        op.ruta_trayecto,
        op.ruta_trayecto_descrip,
        op.ruta_km,.
        op.ruta_kmdo,
        op.ruta_imagen,
        op.ruta_fecha_alta,
        op.ruta_datos_modif,
        op.ruta_obs,
        op.ruta_status,
        origen.punto_descrip AS nombre_origen,
        destino.punto_descrip AS nombre_destino
      FROM op_ruta op
      LEFT JOIN op_ruta_punto origen 
        ON op.ruta_origen_cve = origen.punto_cve
      LEFT JOIN op_ruta_punto destino 
        ON op.ruta_destino_cve = destino.punto_cve
      LIMIT 100
      `,
      {
        type: QueryTypes.SELECT,
      },
    );

    return rutas;
  } catch (error) {
    console.error("Error al obtener las rutas del back:", error);
    throw error;
  }
};
