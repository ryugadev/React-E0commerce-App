import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/mockData';
import { formatCurrency } from '../utils/format';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              MỚI
            </span>
          )}
          {product.isDiscount && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              GIẢM GIÁ
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              HOT
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">{product.category}</div>
        <h3 className="text-gray-900 font-semibold text-lg mb-2 line-clamp-2 leading-tight">
          <Link to={`/product/${product.id}`} className="hover:text-indigo-600 transition-colors">
            {product.name}
          </Link>
        </h3>
        
        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            <div className="text-indigo-600 font-bold text-xl">
              {formatCurrency(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-gray-400 text-sm line-through mt-0.5">
                {formatCurrency(product.originalPrice)}
              </div>
            )}
          </div>
        </div>
        
        <Link
          to={`/product/${product.id}`}
          className="mt-4 w-full block text-center bg-gray-900 hover:bg-indigo-600 text-white font-medium py-2.5 rounded-xl transition-colors duration-300"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
