import { create } from 'zustand';
import { Book } from '../types/book';

interface CartItem extends Book {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (book: Book) => void;
  removeItem: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (book: Book) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.isbn === book.isbn);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.isbn === book.isbn
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...book, quantity: 1 }] };
    });
  },
  removeItem: (bookId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.isbn !== bookId),
    }));
  },
  updateQuantity: (bookId: string, quantity: number) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.isbn === bookId ? { ...item, quantity } : item
      ),
    }));
  },
  clearCart: () => set({ items: [] }),
  get total() {
    return get().items.reduce(
      (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
      0
    );
  },
}));