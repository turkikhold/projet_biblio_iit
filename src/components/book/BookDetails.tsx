import React from 'react';
import { Rating } from '../ui/Rating';

interface BookDetailsProps {
  title: string;
  author: string;
  rating: number;
  totalRatings: number;
  releaseDate: string;
  pages?: number;
  language?: string;
  isbn?: string;
}

export function BookDetails({
  title,
  author,
  rating,
  totalRatings,
  releaseDate,
  pages,
  language,
  isbn
}: BookDetailsProps) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">{title}</h3>
        <p className="text-emerald-700 font-medium">by {author}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <Rating rating={rating} totalRatings={totalRatings} />
        <span className="text-sm text-gray-500">Released: {releaseDate}</span>
      </div>
      
      {(pages || language || isbn) && (
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          {pages && (
            <div>
              <span className="font-medium">Pages:</span> {pages}
            </div>
          )}
          {language && (
            <div>
              <span className="font-medium">Language:</span> {language}
            </div>
          )}
          {isbn && (
            <div className="col-span-2">
              <span className="font-medium">ISBN:</span> {isbn}
            </div>
          )}
        </div>
      )}
    </div>
  );
}