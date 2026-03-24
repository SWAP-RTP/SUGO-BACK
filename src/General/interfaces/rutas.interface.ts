export interface Ruta {
  ruta_cve_sist: number;
  mod_clave: number;
  ruta_origen_cve: number;
  ruta_destino_cve: number;
  ruta_cve_movi: number;
  ruta_cve_servicio: number;
  ruta_cve_tipo: number;
  institucion_cve: number;
  ruta_nombre: number;
  ruta_trayecto: string;
  ruta_trayecto_descrip: string;
  ruta_km: number;
  ruta_kmdo: number;
  ruta_imagen: string;
  ruta_fecha_alta: Date | string;
  ruta_datos_modif: string;
  ruta_obs: string;
  ruta_status: number;
}
