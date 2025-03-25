import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import { BookFormUpdate } from "./BookFormUpdate";
import { FaStar, FaRegStar } from "react-icons/fa"; // أيقونات النجوم
import type { Book } from "../../types/book";

interface BookListProps {
  books: any;
  onEdit: (book: any) => void;
  onDelete: (id: string) => void;
}

export function BookList({ books, onEdit, onDelete }: BookListProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState<Book | null>(null);

  const handleEdit = (book: Book) => {
    setCurrentBook(book);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentBook(null);
  };

  const renderStars = (rating: number) => {
    const maxStars = 5;
    return Array.from({ length: maxStars }, (_, index) => {
      if (index < rating) {
        return <FaStar key={index} className="text-yellow-500" />;
      }
      return <FaRegStar key={index} className="text-gray-400" />;
    });
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Edit Modal */}
      {isEditing && currentBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 md:w-1/2">
            <BookFormUpdate
              initialData={currentBook}
              onCancel={handleCancelEdit}
            />
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase text-sm">
              Id
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase text-sm">
                Titre
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase text-sm">
                Auteur
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase text-sm">
                Catégorie
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase text-sm">
                Departement
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase text-sm">
              Disponibilite
              </th>
            
              <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: any, index: number) => (
              <tr
                key={book._id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-6 py-4 text-gray-800">{book.title}</td>
                <td className="px-6 py-4 text-gray-600">{book.author}</td>
                <td className="px-6 py-4 text-gray-600">{book.category}</td>
                <td className="px-6 py-4 text-gray-800">${book.price}</td>
                <td className="px-6 py-4 text-gray-800">${book.rentalPrice}</td>
                <td className="px-6 py-4 text-gray-600 flex items-center space-x-1">
                  {renderStars(book.rating)}
                </td>
                <td className="px-6 py-4 text-gray-600">{book.releaseDate}</td>
                <td className="px-6 py-4 text-gray-600">{book.pages}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(book)}
                      className="p-2 bg-green-100 text-green-600 hover:bg-green-200 rounded-lg shadow-sm"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(book._id)}
                      className="p-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg shadow-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
