'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AccountLayout = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Account', path: '/account' },
    { name: 'Security', path: '/security' },
    { name: 'Orders', path: '/order' },
    { name: 'Change Password', path: '/changepassword' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Menu</h2>
              <nav>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link 
                        href={item.path}
                        className={`block px-4 py-2 rounded transition-colors ${
                          pathname === item.path 
                            ? 'bg-blue-100 text-blue-700 font-medium' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="md:w-3/4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;