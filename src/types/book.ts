export interface Book {
  _id: string;
  title: string;
  description: string;
  price: number;
  coverImage: string;
  available: boolean;
  category: string;
  stockQuantity: number;
  isbn: string;
  publishedYear: number;
  quantity: number;
  author: string;
  releaseDate: string;
}

export type BookFormData = Omit<Book, "id">;

export interface BookFilters {
  search: string;
  genre: string;
  availability: "all" | "in-stock" | "out-of-stock";
}
