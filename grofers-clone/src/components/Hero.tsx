import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Fresh Groceries Delivered to Your Doorstep</h1>
            <p className="text-lg mb-6">Get your daily essentials with best prices and fastest delivery</p>
            <button className="bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 w-full max-w-md">
              <div className="grid grid-cols-3 gap-4">
                {['Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Snacks', 'Beverages'].map((category, index) => (
                  <div key={index} className="bg-white bg-opacity-30 rounded-lg p-4 text-center hover:bg-opacity-40 transition-all cursor-pointer">
                    <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xl">🛒</span>
                    </div>
                    <p className="text-sm font-medium">{category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;