import React from 'react';
import Product from './Product';

interface ProductData {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  discount: number;
}

interface ProductsSectionProps {
  products: ProductData[];
  onAddToCart: (id: number) => void;
}

const ProductsSection = ({ products, onAddToCart }: ProductsSectionProps) => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Popular Products</h2>
          <button className="text-green-600 font-medium hover:text-green-800">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              discount={product.discount}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;