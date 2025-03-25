import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "../store/useCartStore";
import { CartItem } from "../components/cart/CartItem";
import { CartSummary } from "../components/cart/CartSummary";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store/Store";

export function CartPage() {
  const { cartBooks } = useSelector((state: any) => state.book);

  const tot = cartBooks.reduce(
    (a: any, b: any) => +a + +b.price * +b.quantity,
    0
  );

  console.log("Book Carts");

  console.log(cartBooks);
  console.log("Book Carts");

  const handleCheckout = () => {
    // Implement checkout logic
    console.log("Proceeding to checkout...");
  };

  if (cartBooks.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any books to your cart yet.
          </p>
          <Link
            to="/books"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Shopping Cart</h2>
        <p className="text-gray-600">
          {cartBooks.length} {cartBooks.length === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {cartBooks.map((item: any) => (
              <CartItem key={item._id} {...item} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <CartSummary subtotal={tot} total={tot} onCheckout={handleCheckout}  />
        </div>
      </div>
    </div>
  );
}
