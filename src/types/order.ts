export interface Order {
  id: string;
  userId: string;
  userName: string;
  books: {
    bookId: string;
    title: string;
    quantity: number;
    pricePerUnit: number;
  }[];
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  totalAmount: number;
  orderDate: string;
  returnDate?: string;
  isOverdue: boolean;
}