import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/mockData';

const Home: React.FC = () => {
  const newProducts = mockProducts.filter(p => p.isNew).slice(0, 4);
  const bestSellers = mockProducts.filter(p => p.isBestSeller).slice(0, 4);
  const discountProducts = mockProducts.filter(p => p.isDiscount).slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Công nghệ đỉnh cao, <br />
              <span className="text-indigo-400">Trải nghiệm hoàn hảo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Khám phá bộ sưu tập các thiết bị công nghệ mới nhất từ các thương hiệu hàng đầu thế giới. Nâng tầm cuộc sống số của bạn ngay hôm nay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-500/30"
              >
                Mua sắm ngay
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link
                to="/products?category=Điện%20thoại"
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-gray-600 text-base font-medium rounded-xl text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                Xem điện thoại
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-xl text-indigo-600">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Giao hàng miễn phí</h3>
                <p className="text-sm text-gray-500 mt-1">Cho đơn hàng trên 1.000.000đ</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex-shrink-0 bg-emerald-100 p-3 rounded-xl text-emerald-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Bảo hành chính hãng</h3>
                <p className="text-sm text-gray-500 mt-1">Cam kết 100% hàng chính hãng</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex-shrink-0 bg-amber-100 p-3 rounded-xl text-amber-600">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Hỗ trợ 24/7</h3>
                <p className="text-sm text-gray-500 mt-1">Luôn sẵn sàng giải đáp thắc mắc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* New Products */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Sản phẩm mới</h2>
              <p className="text-gray-500 mt-2">Những thiết bị công nghệ vừa ra mắt</p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center text-indigo-600 hover:text-indigo-800 font-medium group">
              Xem tất cả <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link to="/products" className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 rounded-xl transition-colors">
              Xem tất cả sản phẩm mới
            </Link>
          </div>
        </section>

        {/* Best Sellers */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Bán chạy nhất</h2>
              <p className="text-gray-500 mt-2">Sản phẩm được khách hàng yêu thích nhất</p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center text-indigo-600 hover:text-indigo-800 font-medium group">
              Xem tất cả <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Discounted Products */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Đang giảm giá</h2>
              <p className="text-gray-500 mt-2">Cơ hội sở hữu công nghệ với giá ưu đãi</p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center text-indigo-600 hover:text-indigo-800 font-medium group">
              Xem tất cả <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discountProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
