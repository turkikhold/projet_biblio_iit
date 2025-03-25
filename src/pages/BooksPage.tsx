import React, { useEffect, useState } from "react";
import { Plus, Search } from "lucide-react";
import { useBooks } from "../hooks/useBooks";
import { BookList } from "../components/books/BookList";
import { BookForm } from "../components/books/BookForm";
import type { Book, BookFormData, BookFilters } from "../types/book";
import { AppDispatch } from "../store/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { getbooks } from "../store/features/bookSlice";

export function BooksPage() {
  const {  addBook, updateBook, deleteBook } = useBooks();

  const dispatch: AppDispatch = useDispatch();
  const { isLoading, count, books} = useSelector(
    (state: any) => state.book
  );

  useEffect(() => {
    dispatch(getbooks());
  }, [count]);

  console.log("======");

  console.log(books);

  console.log("======");

  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>();
  const [filters, setFilters] = useState<BookFilters>({
    search: "",
    genre: "",
    availability: "all",
  });

  const handleAddBook = (data: BookFormData) => {
    addBook(data);
    setShowForm(false);
  };

  const handleUpdateBook = (data: BookFormData) => {
    if (selectedBook) {
      updateBook(selectedBook._id, data);
      setSelectedBook(undefined);
      setShowForm(false);
    }
  };

  const handleEdit = (book: Book) => {
    setSelectedBook(book);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      deleteBook(id);
    }
  };

  const filteredBooks = books && books.filter((book: any) => {
    const matchesSearch =
      book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      book.author.toLowerCase().includes(filters.search.toLowerCase());
    const matchesGenre = !filters.genre || book.genre === filters.genre;
    const matchesAvailability =
      filters.availability === "all" ||
      (filters.availability === "in-stock" && book.stockQuantity > 0) ||
      (filters.availability === "out-of-stock" && book.stockQuantity === 0);

    return matchesSearch && matchesGenre && matchesAvailability;
  });

  const genres = Array.from(new Set(books.map((book) => book.genre)));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gestion Des Livres</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center px-4 py-2 bg-[#2B4E84] text-white rounded-lg hover:bg-[#1F3A66]"
        >
          <Plus className="w-5 h-5 mr-2" />
          Ajouter 
        </button>
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Recherche livres..."
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
          />
        </div>

        <select
          value={filters.genre}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, genre: e.target.value }))
          }
          className="w-full p-2 border border-gray-200 rounded-lg"
        >
          <option value="">Tous les genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select
          value={filters.availability}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              availability: e.target.value as BookFilters["availability"],
            }))
          }
          className="w-full p-2 border border-gray-200 rounded-lg"
        >
          <option value="all">Tous les livres</option>
<option value="in-stock">En stock</option>
<option value="out-of-stock">En rupture de stock</option>

        </select>
      </div>

      {showForm ? (
        <div className="mb-6">
          <BookForm
            initialData={selectedBook}
            onSubmit={selectedBook ? handleUpdateBook : handleAddBook}
            onCancel={() => {
              setShowForm(false);
              setSelectedBook(undefined);
            }}
          />
        </div>
      ) : (
        <BookList
          books={filteredBooks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
