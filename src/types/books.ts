export interface Books {
  title: string;
  author: string;
  coverUrl: string;
  category: string;
  rating: number;
  totalRatings: number;
  price: string;
  rentalPrice?: string;
  summary?: string;
  isAvailable?: boolean;
  releaseDate: string;
  pages?: number;
  language?: string;
  isbn?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}
