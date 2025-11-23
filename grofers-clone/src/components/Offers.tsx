import React from 'react';

const Offers = () => {
  const offers = [
    { id: 1, title: '50% OFF', description: 'On first order', code: 'WELCOME50' },
    { id: 2, title: 'FLAT ₹100 OFF', description: 'On orders above ₹500', code: 'SAVE100' },
    { id: 3, title: 'Buy 2 Get 1 FREE', description: 'On household items', code: 'B2G1FREE' },
    { id: 4, title: '25% OFF', description: 'On organic products', code: 'ORGANIC25' },
  ];

  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
                <h3 className="text-xl font-bold text-white">{offer.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                    {offer.code}
                  </span>
                  <button className="text-green-600 text-sm font-medium hover:text-green-800">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;