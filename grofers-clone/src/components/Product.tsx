import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  discount: number;
  onAddToCart: (id: number) => void;
}

const Product = ({ id, name, price, originalPrice, image, discount, onAddToCart }: ProductProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-40 object-contain rounded-lg"
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
        </div>
        <div className="mt-4">
          <h3 className="font-medium text-gray-800 truncate">{name}</h3>
          <div className="flex items-center mt-2">
            <span className="text-lg font-bold text-gray-900">₹{price}</span>
            {originalPrice > price && (
              <span className="ml-2 text-sm text-gray-500 line-through">₹{originalPrice}</span>
            )}
          </div>
          <button 
            onClick={() => onAddToCart(id)}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;