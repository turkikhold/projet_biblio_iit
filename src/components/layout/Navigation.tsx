import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Library, Menu, X, LogOut } from "lucide-react"; // Importer l'icône LogOut
import { motion, AnimatePresence } from "framer-motion";
import { CartIcon } from "../cart/CartIcon";
import { logout } from "../../service/AuthService"; // Import de la fonction logout

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Vérifie si l'utilisateur est connecté
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Si token existe, l'utilisateur est connecté
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        // Appel de la fonction logout depuis AuthService
        await logout(token);
  
        // Effacer les données de session après la déconnexion
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("user");
  
        // Redirection vers la page de connexion
        navigate("/login");
      }
    } catch (error: any) {
      console.error("Erreur lors de la déconnexion", error);
      alert("Erreur de déconnexion. Veuillez réessayer.");
    }
  };

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
            <Library className="h-10 w-10 text-[#2B4E84]" />
            <span className="ml-3 text-2xl font-bold text-gray-900">
              IIT Library
            </span>
          </Link>

          {/* Menu button for small screens */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 gap-2">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium">
              Acceuil
            </Link>
            <Link to="/books" className="text-gray-700 hover:text-emerald-600 font-medium">
              Livres
            </Link>
            <CartIcon />
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center w-12 h-12 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition-colors"
              >
                <LogOut className="h-6 w-6 text-white" />
              </button>
            )}
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
              <Link to="/" className="block text-gray-700 hover:text-emerald-600 font-medium">
                Acceuil
              </Link>
              <Link to="/books" className="block text-gray-700 hover:text-emerald-600 font-medium">
                Livres
              </Link>
              <CartIcon />
              
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="w-full bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  Sign In
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
