import React from 'react';
import { ExternalLink } from 'lucide-react';
import ingenieurie from '../images/ingenieurie.jpg'; // Importer l'image
import licence from '../images/licence3.jpg'; // Importer l'image
import prepa from '../images/prepa.jpg'; // Importer l'image
import architecture from '../images/architecture.png'; // Importer l'image


interface Author {
  name: string;
  image: string;
  books: number;
  awards: number;
  // category: string;
}

const authors: Author[] = [
  {
    name: "INGÉNIUERIE",
    image: ingenieurie,
    books: 14,
    awards: 12
    // category: "Fantasy"
  },
  {
    name: "LICENCE",
    image: licence,
    books: 64,
    awards: 15
    // category: "Horror"
  },
  {
    name: "PRÉPARATOIRE",
    image: prepa,
    books: 66,
    awards: 8
    // category: "Mystery"
  },
  {
    name: "ARCHITECTURE",
    image: architecture,
    books: 28,
    awards: 6
    // category: "Fiction"
  }
];

export function PopularAuthors() {
  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Secteurs d'études</h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2">
        Voir Secteurs d'études
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {authors.map((author, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative h-48">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ width: '150px', height: 'auto', margin: '0 auto' }}  // Centrer l'image horizontalement
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{author.name}</h3>
                {/* <p className="text-sm text-emerald-300">{author.category}</p> */}
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{author.books} Books Published</span>
                <span>{author.awards} Awards</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}