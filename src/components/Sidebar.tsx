import React from "react";
import {
  BookOpen,
  Users,
  ShoppingCart,
  BarChart2,
  Settings,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  onNavigate: (page: string) => void;
}

const menuItems = [
  { id: "dashboard", icon: Home, label: "Tableau de bord" },
  { id: "books/dashboard", icon: BookOpen, label: "Livres" },
  { id: "users", icon: Users, label: "Utilisateurs" },
  { id: "orders", icon: ShoppingCart, label: "Emprunt" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export function Sidebar({ onNavigate }: SidebarProps) {
  const [active, setActive] = React.useState("dashboard");

  const handleClick = (id: string) => {
    setActive(id);
    onNavigate(id);
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <BookOpen className="w-8 h-8 text-[#2B4E84]" />
        <span className="ml-2 text-xl font-bold text-gray-800">
          <Link to="/">LibraryAdmin</Link>
        </span>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
         <button
         key={item.id}
         onClick={() => handleClick(item.id)}
         className={`w-full flex items-center px-6 py-3 transition-colors 
           ${
             active === item.id
               ? "bg-[#E3F0FE] text-[#2B4E84]" // Couleur active
               : "text-gray-700 hover:bg-[#E3F0FE] hover:text-[#2B4E84]" // Couleur au survol
           }`}
       >
         <item.icon className="w-5 h-5" />
         <span className="ml-3">{item.label}</span>
       </button>
       
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">Admin</p>
            <p className="text-xs text-gray-500">Administrateur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
