import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search as SearchIcon, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts, categories } from '../data/mockData';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sync state with URL params
  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
    setSelectedCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  // Update URL params when state changes
  const updateParams = (search: string, category: string) => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category !== 'all') params.set('category', category);
    setSearchParams(params);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    updateParams(value, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateParams(searchTerm, category);
    setIsMobileFiltersOpen(false);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSearchParams(new URLSearchParams());
    setIsMobileFiltersOpen(false);
  };

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Tất cả sản phẩm</h1>
            <p className="text-gray-500 mt-2">Hiển thị {filteredProducts.length} kết quả</p>
          </div>
          
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="md:hidden flex items-center justify-center gap-2 bg-white border border-gray-300 px-4 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
          >
            <Filter className="h-5 w-5" />
            Lọc & Tìm kiếm
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <SearchIcon className="h-5 w-5 text-indigo-500" />
                  Tìm kiếm
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tên sản phẩm..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-indigo-500" />
                  Danh mục
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`w-full text-left px-4 py-2.5 rounded-xl transition-colors ${
                        selectedCategory === 'all'
                          ? 'bg-indigo-50 text-indigo-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      Tất cả
                    </button>
                  </li>
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl transition-colors ${
                          selectedCategory === category
                            ? 'bg-indigo-50 text-indigo-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="mt-8 w-full py-2.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors"
                >
                  Xóa bộ lọc
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filters Modal */}
          {isMobileFiltersOpen && (
            <div className="fixed inset-0 z-50 flex md:hidden">
              <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)}></div>
              <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Lọc & Tìm kiếm</h2>
                  <button onClick={() => setIsMobileFiltersOpen(false)} className="text-gray-400 hover:text-gray-500">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto flex-grow">
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Tìm kiếm</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Tên sản phẩm..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Danh mục</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => handleCategoryChange('all')}
                        className={`w-full text-left px-4 py-3 rounded-xl border ${
                          selectedCategory === 'all'
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700 font-medium'
                            : 'border-gray-200 text-gray-700'
                        }`}
                      >
                        Tất cả
                      </button>
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => handleCategoryChange(category)}
                          className={`w-full text-left px-4 py-3 rounded-xl border ${
                            selectedCategory === category
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-700 font-medium'
                              : 'border-gray-200 text-gray-700'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50 flex gap-4">
                  <button
                    onClick={clearFilters}
                    className="flex-1 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl font-medium"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="flex-1 py-3 text-white bg-indigo-600 rounded-xl font-medium"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <SearchIcon className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-gray-500">
                  Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Products;
