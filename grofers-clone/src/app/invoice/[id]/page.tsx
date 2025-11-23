'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const InvoiceDetailPage = () => {
  const { id } = useParams();

  // Sample invoice data - in a real app this would come from an API
  const invoiceData = {
    id: id || '#INV-001',
    date: 'October 15, 2023',
    dueDate: 'October 22, 2023',
    status: 'Paid',
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main Street, New York, NY 10001'
    },
    items: [
      { name: 'Organic Apples', quantity: 2, price: 4.99, total: 9.98 },
      { name: 'Whole Wheat Bread', quantity: 1, price: 3.49, total: 3.49 },
      { name: 'Organic Milk', quantity: 1, price: 4.29, total: 4.29 },
      { name: 'Free Range Eggs', quantity: 1, price: 5.99, total: 5.99 }
    ],
    subtotal: 23.75,
    tax: 1.90,
    shipping: 2.99,
    total: 28.64
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Invoice</h1>
              <p className="text-gray-600 mt-1">Invoice ID: {invoiceData.id}</p>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                invoiceData.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                invoiceData.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {invoiceData.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Bill To</h2>
              <p className="font-medium">{invoiceData.customer.name}</p>
              <p>{invoiceData.customer.email}</p>
              <p>{invoiceData.customer.address}</p>
            </div>
            <div className="text-right md:text-left">
              <div className="mb-2">
                <p className="text-gray-600">Invoice Date</p>
                <p className="font-medium">{invoiceData.date}</p>
              </div>
              <div>
                <p className="text-gray-600">Due Date</p>
                <p className="font-medium">{invoiceData.dueDate}</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th className="py-3 text-right text-sm font-semibold text-gray-700">Qty</th>
                  <th className="py-3 text-right text-sm font-semibold text-gray-700">Price</th>
                  <th className="py-3 text-right text-sm font-semibold text-gray-700">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 text-sm">{item.name}</td>
                    <td className="py-4 text-right text-sm">{item.quantity}</td>
                    <td className="py-4 text-right text-sm">${item.price.toFixed(2)}</td>
                    <td className="py-4 text-right text-sm font-medium">${item.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-end">
            <div className="w-full md:w-1/3">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${invoiceData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${invoiceData.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${invoiceData.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-4 border-t border-gray-300 mt-2">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">${invoiceData.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link href="/order" className="bg-gray-200 text-gray-800 px-6 py-3 rounded text-center hover:bg-gray-300 transition-colors">
            Back to Orders
          </Link>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            Download PDF
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailPage;