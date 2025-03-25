import { useState, useEffect } from "react";
import { Books } from "../types/books";

// Sample data - In a real app, this would come from an API
const sampleBooks: any[] = [
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
    __v: 0,
  },
];

export function useBookss() {
  const [books, setBooks] = useState<Books[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setBooks(sampleBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, isLoading };
}
