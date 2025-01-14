// Autor: Katharina Brandtner 

export interface Trip {
  id: number;
  country: string;
  startDate: string;
  endDate: string;
  guide?: string;
  comment?: string;
  cityone?: string;
  numbercityone?: number;
  citytwo?: string;
  numbercitytwo?: number;
  citythree?: string;
  numbercitythree?: number;  
}
