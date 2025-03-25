import React from 'react';
import { Clock, Package } from 'lucide-react';
import type { Order } from '../../types';

const recentOrders: Order[] = [
  {
    id: '1',
    userId: 'user1',
    books: [{ bookId: 'book1', quantity: 2 }],
    status: 'pending',
    totalAmount: 59.98,
    orderDate: '2024-03-10T10:00:00Z'
  },
  {
    id: '2',
    userId: 'user2',
    books: [{ bookId: 'book2', quantity: 1 }],
    status: 'confirmed',
    totalAmount: 29.99,
    orderDate: '2024-03-09T15:30:00Z'
  }
];

export function RecentOrders() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Emprunts récentes</h2>
        <button className="text-green-600 text-sm hover:text-green-700">Voir Tout</button>
      </div>
      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-green-100 rounded-full">
                <Package className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Order #{order.id}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(order.orderDate).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">${order.totalAmount}</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}