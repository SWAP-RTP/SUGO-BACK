export interface Motivos {
  id: number;
  desc: string;
  tipo: number;
  eco_disponible: boolean;
  estatus: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: number;
  updatedBy: number;
  prev_values: any; // o JSON si lo tienes tipado
}

