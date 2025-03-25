export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  available: boolean;
  genre: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  joinedDate: string;
}

export interface Order {
  id: string;
  userId: string;
  books: { bookId: string; quantity: number }[];
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  totalAmount: number;
  orderDate: string;
}