import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center max-w-md w-full">
          <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-12 w-12 text-indigo-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Giỏ hàng trống</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy khám phá các sản phẩm của chúng tôi nhé!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center w-full px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Giỏ hàng của bạn</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {items.map((item) => (
                  <li key={item.id} className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 group">
                    <div className="w-32 h-32 bg-gray-50 rounded-2xl flex-shrink-0 p-2 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col w-full">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-sm font-medium text-indigo-600 mb-1">{item.category}</p>
                          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                            <Link to={`/product/${item.id}`} className="hover:text-indigo-600 transition-colors">
                              {item.name}
                            </Link>
                          </h3>
                        </div>
                        <p className="text-lg font-bold text-gray-900 ml-4">
                          {formatCurrency(item.price)}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-l-lg transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center font-medium text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-r-lg transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="hidden sm:inline">Xóa</span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Tổng quan đơn hàng</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Tạm tính</span>
                  <span className="font-medium text-gray-900">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Phí vận chuyển</span>
                  <span className="font-medium text-emerald-600">Miễn phí</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Tổng cộng</span>
                  <span className="text-2xl font-extrabold text-indigo-600">
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-indigo-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-colors duration-300"
              >
                Tiến hành thanh toán
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="mt-6 text-center">
                <Link to="/products" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                  Tiếp tục mua sắm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
