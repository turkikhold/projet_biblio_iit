import { create } from 'zustand';
import { Book } from '../types';

interface BookState {
  books: Book[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  addBook: (book: Omit<Book, 'id'>) => void;
  updateBook: (id: string, book: Partial<Book>) => void;
  deleteBook: (id: string) => void;
}

export const useBookStore = create<BookState>((set) => ({
  books: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '978-0743273565',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300',
      available: true,
      description: 'A story of decadence and excess.'
    },
    // Add more sample books as needed
  ],
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  addBook: (book) => set((state) => ({
    books: [...state.books, { ...book, id: Math.random().toString(36).substr(2, 9) }]
  })),
  updateBook: (id, updatedBook) => set((state) => ({
    books: state.books.map((book) => 
      book.id === id ? { ...book, ...updatedBook } : book
    )
  })),
  deleteBook: (id) => set((state) => ({
    books: state.books.filter((book) => book.id !== id)
  }))
}));