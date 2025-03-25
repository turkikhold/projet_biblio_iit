import React from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";
import { useCartStore } from "../store/useCartStore";
import { BookDetails } from "../components/book/BookDetails";
import { BookActions } from "../components/book/BookActions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store/Store";
import { addOrder } from "../store/features/bookSlice";

export function BookDetailsPage() {
  const dispatch: AppDispatch = useDispatch();

  const addOrders = (id: any) => {
    console.log(id);

    dispatch(addOrder({ book: book }));
  };
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addItem);

  const { books } = useSelector((state: any) => state.book);

  const book = books.find((item: any) => item._id === id);

  if (!book) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={book.coverImage.url}
            alt={book.title}
            className="w-full h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-8">
          <BookDetails {...book} />
          <BookActions {...book} onBuy={() => addOrders(book)} />
        </div>
      </div>
    </div>
  );
}
