import { useState } from "react";
import type { Book, BookFormData } from "../types/book";

// Simulated books data
const initialBooks: any[] = [
  {
    _id: "676587f967b845f79205c47e",
    title: "Optio neque corpori",
    author: "Modi in rerum eum vi",
    category: "Excepteur repudianda",
    isbn: "Amet voluptatem do",
    quantity: 1,
    availableQuantity: 0,
    coverImage: {
      url: "https://upload-image-by-nest.s3.amazonaws.com/book-images/1734707192548-bing_generated_qrcode.png",
      key: "book-images/1734707192548-bing_generated_qrcode.png",
    },
    rating: "3",
    totalRatings: "2",
    price: "704",
    rentalPrice: "561",
    isAvailable: true,
    releaseDate: "29-Sep-1982",
    pages: "39",
    language: "Est dicta facilis n",
    isNew: true,
    isBestseller: false,
    status: "available",
    createdAt: "2024-12-20T15:06:33.443Z",
    updatedAt: "2024-12-20T15:06:33.443Z",
  },
];

export function useBooks() {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (bookData: BookFormData) => {
    const newBook: Book = {
      ...bookData,
      _id: Date.now().toString(),
      available: bookData.stockQuantity > 0,
    };
    setBooks([...books, newBook]);
  };

  const updateBook = (id: string, bookData: Partial<BookFormData>) => {
    setBooks(
      books.map((book) => {
        if (book._id === id) {
          const updatedBook = {
            ...book,
            ...bookData,
            available: (bookData.stockQuantity ?? book.stockQuantity) > 0,
          };
          return updatedBook;
        }
        return book;
      })
    );
  };

  const deleteBook = (id: string) => {
    setBooks(books.filter((book) => book._id !== id));
  };

  const getBook = (id: string) => {
    return books.find((book) => book._id === id);
  };

  return {
    books,
    addBook,
    updateBook,
    deleteBook,
    getBook,
  };
}
