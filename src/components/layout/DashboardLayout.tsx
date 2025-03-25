import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Library, Users, LogOut } from 'lucide-react';

export function DashboardLayout() {
  const location = useLocation();

  const navigation = [
    { name: 'Books', href: '/dashboard/books', icon: BookOpen },
    { name: 'Loans', href: '/dashboard/loans', icon: Library },
    { name: 'Profile', href: '/dashboard/profile', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LibraryHub</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/logout" className="text-gray-500 hover:text-gray-700">
                <LogOut className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-5 px-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-4 h-6 w-6 ${
                      isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}