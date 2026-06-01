export interface pv_registros {
  id: number;
  id_modulo: number;
  economico: number;
  id_motivos: number;
  credencial: number;
  turno: number;
  tipo_eco: number;
  extintor_1: number;
  extintor_2: number;
  id_modalidad: number;
  id_ruta: number;
  cc: number;
  observaciones: string;
  verificentro: string;
  taller: string;
  direccion: string;
  origen: string;
  destino: string;
  tipo_termino: number;
  tipo_combustible: number;
  linea_ruta: string;
  fecha: Date;
  hora: Date;
  eco_estatus: number;
}

// export interface pv_estados {
//   id: number;
//   momento: string;
//   tipo: number;
//   eco: number;
//   eco_estatus: number;
//   eco_tipo: number;
//   motivo_id: number;
//   motivo_desc: string;
//   modulo: number;
//   direccion: string;
//   ruta: string;
//   ruta_modalidad: string;
//   ruta_cc: string;
//   op_cred: number;
//   op_turno: number;
//   extintor: string;
//   estatus: number;
//   createdAt: string;
//   createdBy: number;
//   createdBy_modulo: number;
//   updatedAt: string;
//   updatedBy: number;
//   prev_values: string;
//   registro_id: number;
//   modulo_puerta: string;
//   hora_entrada_operador: string;
// }
