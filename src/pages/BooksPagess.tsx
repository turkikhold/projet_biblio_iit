import { useEffect, useState } from "react";
import { BookGrid } from "../components/books/BookGrid";
import { BookFilters } from "../components/books/BookFilters";
import { BookSearch } from "../components/books/BookSearch";
import { Layout } from "../components/layout/Layout";
import { getbooks } from "../store/features/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store/Store";

export function BooksPagess() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<string>("newest");

  const dispatch: AppDispatch = useDispatch();
  const { isLoading, count, books, cartBooks, carts } = useSelector(
    (state: any) => state.book
  );

  console.log("===========Book==============");

  console.log(carts);
  console.log("===========Book==============");

  useEffect(() => {
    dispatch(getbooks());
  }, [count]);

  const filteredBooks = books
    ?.filter(
      (book: any) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (book: any) => !selectedCategory || book.category === selectedCategory
    )
    .filter(
      (book: any) => !selectedLanguage || book.language === selectedLanguage
    )
    .filter((book: any) => {
      const price = +book.price;
      return price >= priceRange[0];
    })
    .sort((a: any, b: any) => {
      switch (sortBy) {
        case "price-asc":
          return (
            parseFloat(a.price.replace("$", "")) -
            parseFloat(b.price.replace("$", ""))
          );
        case "price-desc":
          return (
            parseFloat(b.price.replace("$", "")) -
            parseFloat(a.price.replace("$", ""))
          );
        case "rating":
          return b.rating - a.rating;
        default:
          return (
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
          );
      }
    });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Header Section */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Explore Our Books
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Discover our vast collection of books across all genres
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/4">
              <BookFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>

            <div className="lg:w-3/4">
              <BookSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                </div>
              ) : (
                <BookGrid books={filteredBooks} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
