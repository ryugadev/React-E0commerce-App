import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, CheckCircle, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

const Checkout: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cod', // 'cod' or 'qr'
  });

  const [isSuccess, setIsSuccess] = useState(false);

  if (items.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    setTimeout(() => {
      clearCart();
      setIsSuccess(true);
      toast.success('Đặt hàng thành công!', {
        icon: '🎉',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center max-w-md w-full">
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Đặt hàng thành công!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Cảm ơn bạn đã mua sắm tại TechStore. Đơn hàng của bạn đang được xử lý và sẽ sớm được giao đến bạn.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center w-full px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại giỏ hàng
        </button>

        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Thanh toán</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Truck className="h-6 w-6 text-indigo-500" />
                Thông tin giao hàng
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ giao hàng</label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors resize-none"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Nhập địa chỉ chi tiết (Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố)"
                  ></textarea>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-indigo-500" />
                    Phương thức thanh toán
                  </h2>
                  
                  <div className="space-y-4">
                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${formData.paymentMethod === 'cod' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="ml-3 block text-sm font-medium text-gray-900">
                        Thanh toán khi nhận hàng (COD)
                      </span>
                    </label>

                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${formData.paymentMethod === 'qr' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="qr"
                        checked={formData.paymentMethod === 'qr'}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="ml-3 block text-sm font-medium text-gray-900">
                        Thanh toán qua mã QR (Chuyển khoản)
                      </span>
                    </label>
                  </div>

                  {formData.paymentMethod === 'qr' && (
                    <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                      <p className="text-sm text-gray-600 mb-4 font-medium">Quét mã QR dưới đây để thanh toán</p>
                      <div className="bg-white p-4 inline-block rounded-xl shadow-sm border border-gray-100">
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TechStorePayment"
                          alt="QR Code"
                          className="w-48 h-48 mx-auto"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-4">
                        Nội dung chuyển khoản: <span className="font-bold text-gray-900">TECHSTORE {formData.phone || 'SĐT'}</span>
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-indigo-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg shadow-indigo-500/30"
                  >
                    Xác nhận đặt hàng
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Đơn hàng của bạn</h2>
              
              <ul className="divide-y divide-gray-100 mb-6">
                {items.map((item) => (
                  <li key={item.id} className="py-4 flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl flex-shrink-0 p-1">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-500">SL: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 pt-6 border-t border-gray-100">
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
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
