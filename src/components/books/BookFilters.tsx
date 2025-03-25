import React from 'react';
import { Slider } from '../ui/Slider';
import { Sliderss } from '../ui/Sliderss';

interface BookFiltersProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedLanguage: string | null;
  setSelectedLanguage: (language: string | null) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const categories = [
  'Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Romance', 
  'Fantasy', 'Biography', 'History', 'Self-Help', 'Children'
];

const languages = ['English', 'Spanish', 'French', 'German', 'Arabic', 'Chinese'];

const sortOptions = [
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' }
];

export function BookFilters({
  selectedCategory,
  setSelectedCategory,
  selectedLanguage,
  setSelectedLanguage,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy
}: BookFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6 sticky top-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Language</h3>
        <div className="space-y-2">
          {languages.map(language => (
            <label key={language} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedLanguage === language}
                onChange={() => setSelectedLanguage(selectedLanguage === language ? null : language)}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">{language}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="px-2">
          <Sliderss
            min={0}
            max={100}
            value={priceRange}
            onChange={setPriceRange}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setSelectedCategory(null);
          setSelectedLanguage(null);
          setPriceRange([0, 100]);
          setSortBy('newest');
        }}
        className="w-full py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
      >
        Reset Filters
      </button>
    </div>
  );
}