import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingProps {
  rating: number;
  totalRatings: number;
}

export function Rating({ rating, totalRatings }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 fill-amber-400 text-amber-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
      <span className="text-sm text-gray-600">({totalRatings})</span>
    </div>
  );
}