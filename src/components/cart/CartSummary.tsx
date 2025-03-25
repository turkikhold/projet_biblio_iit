import React from "react";
import { ShoppingBag } from "lucide-react";
import { createOrder } from "../../store/features/bookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store/Store";

interface CartSummaryProps {
  subtotal: number;
  shipping?: number;
  total: number;
  onCheckout: () => void;
}

export function CartSummary({
  subtotal,
  shipping = 0,
  total,
  onCheckout,
}: CartSummaryProps) {
  const dispatch: AppDispatch = useDispatch();

  const getTotale = (total: number) => {
    dispatch(createOrder({ total }));
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Order Summary
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between text-base text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-base text-gray-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>

        {/* Potential Discount Section */}
        <div className="pt-4">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-emerald-600">${total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => dispatch(createOrder({ totale: total }))}
          className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Proceed to Checkout</span>
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Secure checkout powered by Stripe
        </p>
      </div>
    </div>
  );
}
