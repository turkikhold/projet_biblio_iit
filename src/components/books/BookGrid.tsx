import { BookCard } from '../book/BookCard';
import { Book } from '../../types/book';

interface BookGridProps {
  books: Book[];
}

export function BookGrid({ books }: BookGridProps) {
  console.log(books);
  
  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No books found</h3>
        <p className="mt-2 text-gray-600">Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book:any, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
}