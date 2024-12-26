// Katharina Brandtner

export interface TwoCardsProps {
    trips: Array<{
      id: number;
      country: string;
      startDate: string;
      endDate: string;
      city?: string;
      guide: string;
      comment: string;
    }>;
    onDelete: (tripId: number) => void;
  }