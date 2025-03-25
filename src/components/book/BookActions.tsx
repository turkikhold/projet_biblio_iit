import React from "react";
import { ShoppingCart, Clock, BookOpen, Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store/Store";
import { addOrder } from "../../store/features/bookSlice";

export function BookActions(book: any) {
  const dispatch: AppDispatch = useDispatch();

  const addOrders = () => {
    dispatch(addOrder({ book: book }));
  };
  return (
    <div className="space-y-4">
      {/* Price and Wishlist Section */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
            {book.price}
          </div>
          {book.rentalPrice && (
            <div className="text-sm text-gray-600 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>
                Rent for{" "}
                <span className="font-medium text-emerald-600">
                  {book.rentalPrice}
                </span>
                /month
              </span>
            </div>
          )}
        </div>
        <button
          className="group relative p-2 rounded-full hover:bg-rose-50 transition-colors"
          title="Add to Wishlist"
        >
          <Heart className="w-6 h-6 text-gray-400 group-hover:text-rose-500 transition-colors" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Add to Wishlist
          </span>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        {book.isAvailable ? (
          <>
            <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-100 transform hover:-translate-y-0.5">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium" onClick={() => addOrders()}>
                Buy Now
              </span>
            </button>

            {book.rentalPrice && (
              <button className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-emerald-600 text-emerald-600 px-4 py-3 rounded-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-emerald-100 transform hover:-translate-y-0.5">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Rent</span>
              </button>
            )}

            <button
              className="flex items-center justify-center p-3 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group relative"
              title="Preview Book"
            >
              <BookOpen className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Preview Book
              </span>
            </button>
          </>
        ) : (
          <div className="flex-1 space-y-2">
            <button
              disabled
              className="w-full bg-gray-100 text-gray-400 px-4 py-3 rounded-lg cursor-not-allowed transition-all duration-300"
            >
              <span className="font-medium">Out of Stock</span>
            </button>
            <button className="w-full text-sm text-emerald-600 hover:text-emerald-700 font-medium">
              Notify When Available
            </button>
          </div>
        )}
      </div>

      {/* Additional Options */}
      {book.isAvailable && (
        <div className="flex justify-between text-sm">
          <button className="text-gray-600 hover:text-emerald-600 transition-colors">
            Compare
          </button>
          <button className="text-gray-600 hover:text-emerald-600 transition-colors">
            Share
          </button>
        </div>
      )}
    </div>
  );
}
