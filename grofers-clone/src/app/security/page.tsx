'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const SecurityPage = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Security Settings</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Password Management</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Change Password</p>
                <p className="text-sm text-gray-600">Last updated: 2 weeks ago</p>
              </div>
              <Link href="/changepassword" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Change Password
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Two-Factor Authentication</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">2FA Status</p>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <button 
              onClick={toggleTwoFactor}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${twoFactorEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Sessions</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <p className="font-medium">Current Session</p>
                <p className="text-sm text-gray-600">Your current device</p>
              </div>
              <span className="text-green-600 text-sm">Active now</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <p className="font-medium">Mobile App</p>
                <p className="text-sm text-gray-600">iPhone - 2 days ago</p>
              </div>
              <button className="text-blue-600 text-sm">End Session</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;