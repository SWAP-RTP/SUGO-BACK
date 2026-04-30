export interface RolTurnos {
  id: number;
  id_archivo: number;
  nombre_ruta: string;
  economico: number;
  sistema: string;
  primer_t: number;
  segundo_t: number;
  tercer_t: number;
  lunes?: boolean;
  martes?: boolean;
  miercoles?: boolean;
  jueves?: boolean;
  viernes?: boolean;
  sabado?: boolean;
  domingo?: boolean;
  createdat: Date;
  updatedat: Date;
}
