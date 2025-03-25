import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Library, Menu, X } from "lucide-react";
import { CartIcon } from "./cart/CartIcon";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Framer Motion Variants for Menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Library className="h-10 w-10 text-emerald-600" />
            <span className="ml-3 text-2xl font-bold text-gray-900">
            IIT Library
            </span>
          </Link>

          {/* Menu button for small screens */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 gap-2">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Acceuil
            </Link>
            <Link
              to="/books"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Livres
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 hover:text-emerald-600 font-medium "
            >
              Categories
            </Link>
            <CartIcon />
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 space-y-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link
                to="/"
                className="block text-gray-700 hover:text-emerald-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="/books"
                className="block text-gray-700 hover:text-emerald-600 font-medium"
              >
                Books
              </Link>
              <Link
                to="/categories"
                className="block text-gray-700 hover:text-emerald-600 font-medium"
              >
                Categories
              </Link>
              <br />

              <CartIcon />
              <button className="w-full bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                Sign In
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
