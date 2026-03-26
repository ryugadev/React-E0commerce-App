import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
              <ShoppingCart className="h-8 w-8" />
              <span>TechStore</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Trang chủ</Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600 font-medium">Sản phẩm</Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="absolute left-3 top-2.5 text-gray-400 hover:text-indigo-600">
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 font-medium">Chào, {user.username}</span>
                <button
                  onClick={logout}
                  className="text-gray-500 hover:text-red-600 flex items-center gap-1 text-sm font-medium"
                >
                  <LogOut className="h-4 w-4" /> Đăng xuất
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-indigo-600 flex items-center gap-1 font-medium">
                <User className="h-5 w-5" /> Đăng nhập
              </Link>
            )}

            <Link to="/cart" className="relative text-gray-700 hover:text-indigo-600">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative text-gray-700">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-4 space-y-4">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute left-3 top-2.5 text-gray-400">
              <Search className="h-5 w-5" />
            </button>
          </form>
          
          <nav className="flex flex-col space-y-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium hover:text-indigo-600">Trang chủ</Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium hover:text-indigo-600">Sản phẩm</Link>
            
            <div className="border-t border-gray-200 pt-3">
              {user ? (
                <div className="flex flex-col space-y-3">
                  <span className="text-gray-700 font-medium">Chào, {user.username}</span>
                  <button
                    onClick={() => { logout(); setIsMenuOpen(false); }}
                    className="text-red-600 text-left font-medium flex items-center gap-2"
                  >
                    <LogOut className="h-5 w-5" /> Đăng xuất
                  </button>
                </div>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium flex items-center gap-2 hover:text-indigo-600">
                  <User className="h-5 w-5" /> Đăng nhập / Đăng ký
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
