import React from 'react';
import { Search, X } from 'lucide-react';

interface BookSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function BookSearch({ searchQuery, setSearchQuery }: BookSearchProps) {
  return (
    <div className="relative mb-6">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title, author, or ISBN..."
          className="w-full pl-12 pr-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
    </div>
  );
}