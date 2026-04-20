export interface rolArchivos {
  id?: number;
  path: string;
  nombre: string;
  usuario: string;
  modulo: number;
  periodo: number;
  createdAt?: Date;
  updatedAt?: Date;
  archivo: Buffer; // Agrega esta propiedad para almacenar el archivo como un buffer
}
