import { Turnos } from "../models/rol_turnos.models";
import { TurnosEdit } from "../models/rol_turnos_edit.models";
import { Transaction, QueryTypes, Op } from "sequelize";
import sequelize from "../../General/DB/db";

import { rolArchivo } from "../models/rol_archivo.models";

export const obtenerTurnosRol = async (modulo?: number) => {
  let idArchivosPermitidos: number[] = [];
  if (modulo) {
    const archivosDelModulo = await rolArchivo.findAll({
      where: { modulo },
      attributes: ['id']
    });
    idArchivosPermitidos = archivosDelModulo.map(a => a.getDataValue('id') as number);
    if (idArchivosPermitidos.length === 0) return [];
  }

  const whereCondition: any = {};
  if (modulo) {
    whereCondition.id_archivo = {
      [Op.in]: idArchivosPermitidos
    };
  }

  //CREAMOS UN FILTRO ESPECIFICO PARA EL LOTE
  const whereLote: any = {
    id_operacion: { [Op.ne]: null } as any
  }

  //SI HAY MODULO , LEDECIMOS QUE SOLO BUSQUE EL ULTIMO LOTE DE ESE MODULO
  if (modulo) {
    whereLote.id_archivo = {
      [Op.in]: idArchivosPermitidos
    }
  }
  // Buscar el id_operacion más reciente en rol_turnos_edit
  const ultimoLote = await TurnosEdit.findOne({
    attributes: ['id_operacion'],
    where: whereLote,
    order: [['createdat', 'DESC']],
  });

  if (ultimoLote && ultimoLote.getDataValue('id_operacion')) {
    whereCondition.id_operacion = ultimoLote.getDataValue('id_operacion')
    // Traer solo los registros del último lote (último cierre de día)
    return await TurnosEdit.findAll({
      where: whereCondition,
      order: [['economico', 'ASC']],
    });
  }

  //BUSCAMOS ULTIMO ARCHIVO, PERO QUE TAMBIEN PERTENEZCA AL MODULO 
  const queryUltimoArchivo: any = { order: [['id', 'DESC']] };
  if (modulo) {
    queryUltimoArchivo.where = { modulo }
  }

  // Fallback: si no hay lotes con id_operacion, usar lógica original por id_archivo
  const ultimoArchivo = await rolArchivo.findOne(queryUltimoArchivo);
  if (!ultimoArchivo) return [];
  //SOBREEESCRIBIMOS EL ID_ARCHJIVO CON EL ULTIMO ARCHIVO ENCONTRADO
  whereCondition.id_archivo = ultimoArchivo.getDataValue('id');

  return await TurnosEdit.findAll({
    where: whereCondition,
    order: [['economico', 'ASC']]
  });
};



export const ejecutarCierreDia = async (modulo: number) => {
  // Ejecutar el stored procedure de cierre de día
  await sequelize.query(`CALL pr_ejecutar_cierre_dia(${modulo})`, {
    type: QueryTypes.RAW,
  });

  //BUSCAMOS EL ID_OPERACION MAS RECIENTE DE ESTE MODULO
  const archivosDelModulo = await rolArchivo.findAll({
    where: { modulo },
    attributes: ['id']
  });

  const idArchivosPermitidos = archivosDelModulo.map(a =>
    a.getDataValue('id') as number);

  // Después de ejecutar el SP, obtener el id_operacion más reciente que acaba de generar
  const nuevoLote = await TurnosEdit.findOne({
    attributes: ['id_operacion'],
    where: {
      id_operacion: { [Op.ne]: null } as any,
      id_archivo: { [Op.in]: idArchivosPermitidos }
    },
    order: [['createdat', 'DESC']],
  });

  //const idOperacion = nuevoLote ? nuevoLote.getDataValue('id_operacion') : null;

  return { id_operacion: nuevoLote ? nuevoLote.getDataValue('id_operacion') : null };
};

export const guardarTurnosRolLote = async (
  turnos: any[],
  transaction?: Transaction,
) => {
  const opciones = transaction ? { transaction } : undefined;

  const turnosGuardados = await Turnos.bulkCreate(
    turnos.map((t) => ({
      ...t,
      createdat: new Date(),
      updatedat: new Date(),
    })),
    opciones,
  );

  await TurnosEdit.bulkCreate(
    turnos.map((t) => ({
      ...t,
      createdat: new Date(),
      updatedat: new Date(),
    })),
    opciones,
  );

  return turnosGuardados;
};

export const guardarTurnoEditado = async (turnoData: any) => {
  const { id, ...dataSinId } = turnoData;
  return await TurnosEdit.update(
    {
      ...dataSinId,
      updatedat: new Date(),
    },
    { where: { id } }
  );
};

