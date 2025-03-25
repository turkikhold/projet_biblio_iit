import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { useSelector } from "react-redux";
import { BookOpen } from "lucide-react";
export function CartIcon() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const { cartBooks, counterCart } = useSelector((state: any) => state.book);

  return (
    <Link to="/cart" className="relative">
<BookOpen className="h-10 w-10 text-[#2B4E84]" />
      {cartBooks.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {cartBooks.length}
        </span>
      )}
    </Link>
  );
}
