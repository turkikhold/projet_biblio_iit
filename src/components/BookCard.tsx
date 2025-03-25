import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store/Store";
import { Rating } from "./ui/Rating";
import { BookOpen, ShoppingCart } from "lucide-react";
import { addOrder } from "../store/features/bookSlice";
import { Link } from "react-router-dom";

type coverImage = {
  url: string;
  key: string;
};

interface BookCardProps {
  _id: string;
  title: string;
  author: string;
  category: string;
  rating: string;
  totalRatings: string;
  price?: string;
  summary?: string;
  inStock?: boolean;
  releaseDate?: string;
  coverImage?: coverImage;
}

export function BookCard({
  _id,
  title,
  author,
  coverImage,
  category,
  rating,
  totalRatings,
  price,
  summary,
  inStock = true,
  releaseDate,
}: BookCardProps) {
  console.log(_id);
  console.log(title);

  const book = {
    _id,
    title,
    author,
    coverImage,
    category,
    rating,
    totalRatings,
    price,
    summary,
    releaseDate,
  };

  const dispatch: AppDispatch = useDispatch();

  const addOrders = (id: any) => {
    console.log(id);

    dispatch(addOrder({ book: book }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group">
      <div className="relative h-72">
        <img
          src={coverImage?.url}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {summary && (
          <div className="absolute inset-0 p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm line-clamp-3">{summary}</p>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
            {title}
          </h3>
          <p className="text-emerald-700 font-medium">{author}</p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <Rating rating={+rating} totalRatings={+totalRatings} />
          {releaseDate && (
            <span className="text-sm text-gray-500">
              Released: {releaseDate}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          {price && (
            <div className="text-lg font-bold text-emerald-600">{price}</div>
          )}
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors">
              <Link to={`books/${_id}`}>
                <BookOpen className="w-5 h-5" />
              </Link>
            </button>
            {inStock && (
              <button className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
                <ShoppingCart
                  className="w-5 h-5"
                  onClick={() => addOrders(_id)}
                />
              </button>
            )}
          </div>
        </div>
        <Link
          className="w-full flex items-center justify-center bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 hover:shadow-md transition mt-3 font-bold"
          to={`books/${_id}`}
        >
          Details Book
        </Link>
        {!inStock && <p className="mt-2 text-sm text-red-500">Out of Stock</p>}
      </div>
    </div>
  );
}
