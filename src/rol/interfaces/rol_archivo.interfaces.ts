export interface rolArchivos {
  id: number;
  path: string;
  nombre: string;
  usuario: string;
  createdAt: Date;
  updatedAt: Date;
  archivo: Buffer; // Agrega esta propiedad para almacenar el archivo como un buffer
}
