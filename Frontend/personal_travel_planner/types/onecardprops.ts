// Katharina Brandtner 

export interface OneCardProps {
    trip: {
      id: number;
      country: string;
      startDate: string;
      endDate: string;
      city?: string;
      guide: string;
      comment: string;
    };
    onDelete: (tripId: number) => void;
  }