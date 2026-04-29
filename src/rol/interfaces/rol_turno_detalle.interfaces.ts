export interface RolTurnoDetalle {
  id?: number;
  id_archivo: number;
  economico: number;
  hora_inicio_1: string | null;
  hora_inicio_cc_1: string | null;
  lugar_inicio_1: string | null;
  hora_termino_turno_1: string | null;
  lugar_inicio_2: string | null;
  hora_inicio_2: string | null;
  hora_termino_turno_2: string | null;
  lugar_inicio_3: string | null;
  hora_inicio_turno_3: string | null;
  hora_termino_cc_t: string | null;
  lugar_termino_cc_t: string | null;
  termino_modulo_t: string | null;
  termino_turno_t: string | null;
}
