import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { OrdersPage } from "./pages/OrdersPage";
import { UsersPage } from "./pages/UsersPage";
import Home from "./pages/Home";
import { BooksPage } from "./pages/BooksPage";
import { Navigation } from "./components/layout/Navigation";
import { Layout } from "./components/layout/Layout";
import { BookDetailsPage } from "./pages/BookDetailsPage";
import { CartPage } from "./pages/CartPage";
import { BooksPagess } from "./pages/BooksPagess";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

// Define a PrivateRoute component
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />;
      case "books/dashboard":
        return <BooksPage />;
      case "orders":
        return <OrdersPage />;
      case "users":
        return <UsersPage />;
      default:
        return <DashboardPage />;
    }
  };

  const ConditionalNavigation = () => {
    const location = useLocation();
    return location.pathname === "/dashboard" ? null : <Navigation />;
  };

  return (
    <Router>
      <ConditionalNavigation />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout onNavigate={setCurrentPage}>
                {renderPage()}
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route path="/books" element={<BooksPagess />} />
        <Route
          path="/books/:id"
          element={
            <Layout>
              <BookDetailsPage />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
