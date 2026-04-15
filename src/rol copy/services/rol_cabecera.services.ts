import { RolCabecera } from "../models/rol_cabecera.models";
// Importamos la interfaz CabeceraRol para tipar el retorno de la función crearCabeceraRol
import { CabeceraRol } from "../interfaces/rol_cabecera.interfaces";

export async function crearCabeceraRol() {
  try {
    return await RolCabecera.findAll();
  } catch (error) {
    console.error("Error al crear la cabecera del rol:", error);
    throw error;
  }
}

// Función para guardar una nueva cabecera del rol, ademas importamos la interfaz CabeceraRol
// para tipar el parámetro de entrada
export async function guardarCabeceraRol(data: CabeceraRol) {
  try {
    const nuevaCabecera = await RolCabecera.create(data);
    return nuevaCabecera;
  } catch (error) {
    console.error("Error al guardar la cabecera del rol:", error);
    throw error;
  }
}
