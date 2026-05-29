export interface PresentacionPV {
  id: number;
  economico: number;
  credencial: number;
  ruta?: string | null;
  fecha?: Date;
  hora?: Date;
  modulo?: number;
}
