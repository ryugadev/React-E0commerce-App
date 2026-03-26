import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Check, Shield, Truck } from 'lucide-react';
import toast from 'react-hot-toast';
import { mockProducts } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sản phẩm không tồn tại</h2>
          <p className="text-gray-500 mb-6">Sản phẩm bạn đang tìm kiếm không có sẵn hoặc đã bị xóa.</p>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Quay lại danh sách
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`, {
      icon: '🛒',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm font-medium text-gray-500">
          <button onClick={() => navigate('/products')} className="hover:text-indigo-600 transition-colors">
            Sản phẩm
          </button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate(`/products?category=${product.category}`)} className="hover:text-indigo-600 transition-colors">
            {product.category}
          </button>
          <span className="mx-2">/</span>
          <span className="text-gray-900 truncate">{product.name}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* Product Image */}
            <div className="p-8 md:p-12 bg-gray-50 flex items-center justify-center relative">
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    MỚI
                  </span>
                )}
                {product.isDiscount && (
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    GIẢM GIÁ
                  </span>
                )}
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md h-auto object-contain mix-blend-multiply"
              />
            </div>

            {/* Product Info */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="mb-2 text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                {product.category}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-end gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {formatCurrency(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through mb-1">
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}
              </div>

              <div className="prose prose-sm sm:prose text-gray-600 mb-8">
                <p className="leading-relaxed">{product.description}</p>
              </div>

              <div className="mt-auto space-y-6">
                {/* Quantity Selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số lượng</label>
                  <div className="flex items-center border border-gray-300 rounded-xl w-32 bg-white">
                    <button
                      onClick={decreaseQuantity}
                      className="px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-l-xl transition-colors"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-semibold text-gray-900">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-r-xl transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-500/30"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Thêm vào giỏ hàng
                  </button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>Còn hàng</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                      <Shield className="h-4 w-4" />
                    </div>
                    <span>Bảo hành 12 tháng</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                      <Truck className="h-4 w-4" />
                    </div>
                    <span>Giao hàng miễn phí</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
