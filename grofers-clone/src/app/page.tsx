'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Offers from '@/components/Offers';
import ProductsSection from '@/components/ProductsSection';
import { CartProvider, useCart } from '@/context/CartContext';

// Mock product data
const mockProducts = [
  { id: 1, name: 'Apple - Red', price: 120, originalPrice: 150, image: '/placeholder-fruit.jpg', discount: 20 },
  { id: 2, name: 'Banana - Dozen', price: 60, originalPrice: 80, image: '/placeholder-fruit.jpg', discount: 25 },
  { id: 3, name: 'Milk - 1L', price: 45, originalPrice: 50, image: '/placeholder-dairy.jpg', discount: 10 },
  { id: 4, name: 'Bread - Brown', price: 35, originalPrice: 40, image: '/placeholder-bakery.jpg', discount: 12 },
  { id: 5, name: 'Potato - 1kg', price: 30, originalPrice: 40, image: '/placeholder-vegetable.jpg', discount: 25 },
  { id: 6, name: 'Tomato - 1kg', price: 40, originalPrice: 50, image: '/placeholder-vegetable.jpg', discount: 20 },
  { id: 7, name: 'Onion - 1kg', price: 25, originalPrice: 35, image: '/placeholder-vegetable.jpg', discount: 28 },
  { id: 8, name: 'Rice - Basmati 1kg', price: 120, originalPrice: 140, image: '/placeholder-staples.jpg', discount: 14 },
  { id: 9, name: 'Sugar - 1kg', price: 45, originalPrice: 50, image: '/placeholder-staples.jpg', discount: 10 },
  { id: 10, name: 'Tea - 250g', price: 80, originalPrice: 100, image: '/placeholder-beverages.jpg', discount: 20 },
];

const HomePage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (id: number) => {
    const product = mockProducts.find(p => p.id === id);
    if (product) {
      addToCart(id, product.name, product.price);
      // Show a notification or update UI as needed
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Offers />
      <ProductsSection products={mockProducts} onAddToCart={handleAddToCart} />
    </div>
  );
};

// Wrapper component to provide cart context
const Home = () => {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
};

export default Home;
