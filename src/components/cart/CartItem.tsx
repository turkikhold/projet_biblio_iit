import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { Book } from "../../types/book";
import { onRemove, onUpdateQuantity } from "../../store/features/bookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store/Store";

interface CartItemProps extends Book {
  quantity: number;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export function CartItem({
  _id,
  title,
  author,
  coverImage,
  price,
  quantity,
}: CartItemProps) {
  const itemTotal = +price * quantity;
  console.log("hello");

  const dispatch: AppDispatch = useDispatch();

  const UpdateQuantity = (id: string, cas: string) => {
    console.log(id);

    dispatch(onUpdateQuantity({ id, cas }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg">
      <div className="flex gap-6">
        <img
          src={coverImage}
          alt={title}
          className="w-24 h-32 object-cover rounded-lg shadow"
        />

        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {title}
            </h3>
            <p className="text-gray-600">{author}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => UpdateQuantity(_id, "dinc")}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>

              <span className="w-8 text-center font-medium text-gray-900">
                {quantity}
              </span>

              <button
                onClick={() => UpdateQuantity(_id, "inc")}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-emerald-600">
                ${itemTotal.toFixed(2)}
              </span>

              <button
                onClick={() => dispatch(onRemove({ id: _id }))}
                className="p-1.5 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                aria-label="Remove item"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
