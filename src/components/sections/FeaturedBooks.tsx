import React from "react";
import { BookCard } from "../book/BookCard";
import { Slider } from "../ui/Slider";

const featuredBooks = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    category: "Fiction",
    rating: 4.5,
    totalRatings: 2547,
    price: "$19.99",
    rentalPrice: "$4.99",
    summary:
      "Between life and death there is a library, and within that library, the shelves go on forever...",
    releaseDate: "2020",
    pages: 304,
    language: "English",
    isbn: "978-0525559474",
    isNew: true,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    coverUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    category: "Sci-Fi",
    rating: 4.8,
    totalRatings: 3842,
    price: "$24.99",
    rentalPrice: "$5.99",
    summary:
      "A stunning blend of adventure and mysticism, environmentalism and politics...",
    releaseDate: "1965",
    pages: 688,
    language: "English",
    isbn: "978-0441172719",
    isBestseller: true,
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    coverUrl:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    category: "Thriller",
    rating: 4.6,
    totalRatings: 1923,
    price: "$21.99",
    rentalPrice: "$4.99",
    summary:
      "A woman's act of violence against her husband—and of silence in its aftermath—upends the world...",
    releaseDate: "2019",
    pages: 336,
    language: "English",
    isbn: "978-1250301697",
    isBestseller: true,
  },
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    coverUrl:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80",
    category: "Contemporary",
    rating: 4.7,
    totalRatings: 2891,
    price: "$22.99",
    rentalPrice: "$4.99",
    summary:
      "The story of one of old Hollywood's biggest celebrities revealing the truth about her life...",
    releaseDate: "2017",
    pages: 400,
    language: "English",
    isbn: "978-1501161933",
    isAvailable: false,
  },
];

export function FeaturedBooks() {
  return (
    <div className="space-y-16">
      <div>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Books</h2>
            <p className="text-gray-600 mt-2">
              Discover our handpicked selection of must-read books
            </p>
          </div>
          <button className="text-emerald-600 hover:text-emerald-700 font-medium">
            View All Books
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.slice(0, 4).map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
            <p className="text-gray-600 mt-2">
              The latest additions to our collection
            </p>
          </div>
          <button className="text-emerald-600 hover:text-emerald-700 font-medium">
            View All New Arrivals
          </button>
        </div>
        <Slider>
          {featuredBooks.map((book, index) => (
            <div key={index} className="px-4">
              <BookCard key={index} {...book} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
