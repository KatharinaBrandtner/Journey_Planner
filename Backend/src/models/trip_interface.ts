// Autor: Katharina Brandtner 

export interface Trip {
  id: number;
  country: string;
  startDate: string;
  endDate: string;
  guide?: string;
  comment?: string;
}
