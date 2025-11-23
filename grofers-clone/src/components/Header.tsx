"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { SearchIcon, CartIcon, UserIcon, MenuIcon, CloseIcon } from './Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Mock cart count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-white text-green-600 font-bold text-xl px-3 py-2 rounded-lg">
              GROFERS
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">QuickMart</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="absolute right-2 top-2 text-gray-500">
                <SearchIcon size={20} />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button className="hidden md:block p-2 rounded-full hover:bg-green-700 transition-colors">
              <UserIcon size={22} />
            </button>
            
            <Link href="/cart" className="relative p-2 rounded-full hover:bg-green-700 transition-colors">
              <CartIcon size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-green-700 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="absolute right-2 top-2 text-gray-500">
              <SearchIcon size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="space-y-3">
              <li><Link href="/" className="block py-2 hover:text-green-200">Home</Link></li>
              <li><Link href="/products" className="block py-2 hover:text-green-200">Products</Link></li>
              <li><Link href="/offers" className="block py-2 hover:text-green-200">Offers</Link></li>
              <li><Link href="/my-account" className="block py-2 hover:text-green-200">My Account</Link></li>
              <li><Link href="/cart" className="block py-2 hover:text-green-200">Cart</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;