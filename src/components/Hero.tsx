import React from 'react';
import { BookOpen, Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-[#1E3A66] text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=80"
          alt="Library Background"
          className="w-full h-full object-cover opacity-20"
          style={{ backgroundColor: "#1E3A66" }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
                                          Votre BIBLIOTHEQUE NUMERIQUE
                      <span className="block text-white">est maintenant accéssible depuis votre espace moodle</span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-12 text-[#ADD8E6] max-w-3xl mx-auto">          Découvrez des milliers de livres et de PFE dans tous les genres. Votre prochaine aventure académique vous attend.          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <button className="flex items-center justify-center bg-[#2B4E84] hover:bg-[#2B4E84] text-white px-8 py-4 rounded-lg transition-colors text-lg font-semibold">
  <BookOpen className="mr-2" />
  Explore Collection
</button>

            <div className="relative flex-1 min-w-[300px]">
              <input
                type="text"
                placeholder="Search by title, author, or genre..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}