import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & About */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <ShoppingCart className="h-8 w-8 text-indigo-500" />
              <span>TechStore</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              TechStore là điểm đến tin cậy cho các thiết bị công nghệ chính hãng. Chúng tôi cam kết mang đến sản phẩm chất lượng và dịch vụ tốt nhất.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Trang chủ</Link></li>
              <li><Link to="/products" className="hover:text-indigo-400 transition-colors">Sản phẩm</Link></li>
              <li><Link to="/cart" className="hover:text-indigo-400 transition-colors">Giỏ hàng</Link></li>
              <li><Link to="/login" className="hover:text-indigo-400 transition-colors">Đăng nhập</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Chính sách</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Điều khoản sử dụng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>123 Đường Công Nghệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>support@techstore.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TechStore. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
