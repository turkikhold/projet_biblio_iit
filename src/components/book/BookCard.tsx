import { useDispatch } from "react-redux";
import { addOrder } from "../../store/features/bookSlice";
import { AppDispatch } from "../../store/store/Store";

interface BookCardProps {
  title: string;
  author: string;
  coverImage: any;
  rating: number;
  totalRatings: number;
  price: string;
  language?: string;
}

export function BookCard(book: BookCardProps) {
  const dispatch: AppDispatch = useDispatch();

  const addOrders = () => {
    dispatch(addOrder({ book: book }));
  };
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-64 sm:h-72">
        <img
          src={book.coverImage.url}
          alt={book.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {book.title}
          </h2>
          <p className="text-sm text-gray-500">By {book.author}</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-yellow-500">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ${
                  Number(book.rating) > index
                    ? "fill-current"
                    : Number(book.rating) > index - 0.5
                    ? "fill-current text-yellow-300"
                    : "text-gray-300"
                }`}
                
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {Number(book.rating).toFixed(1)}
          </span>
          <span className="text-xs text-gray-500">({book.totalRatings})</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Starting from</span>
          <div className="text-2xl font-bold text-emerald-600">
            {book.price}
          </div>
        </div>

        {book.language && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-medium">book.:</span>
            <span>{book.language}</span>
          </div>
        )}

        <button
          onClick={() => addOrders()}
          className="w-full flex items-center justify-center bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 hover:shadow-md transition"
        >
          <span className="mr-2">🛒</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
