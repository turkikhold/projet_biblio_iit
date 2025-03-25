import React from 'react';
import { Star } from 'lucide-react';
import type { Book } from '../../types';

const popularBooks: (Book & { rating: number })[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A story of decadence and excess.',
    price: 29.99,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200',
    available: true,
    genre: 'Classic',
    rating: 4.8
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian social science fiction.',
    price: 24.99,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=200',
    available: true,
    genre: 'Science Fiction',
    rating: 4.9
  }
];

export function PopularBooks() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Livres populaires</h2>
        <button className="text-green-600 text-sm hover:text-green-700">Voir Tout</button>
      </div>
      <div className="space-y-4">
        {popularBooks.map((book) => (
          <div key={book.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-16 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">${book.price}</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {book.available ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}