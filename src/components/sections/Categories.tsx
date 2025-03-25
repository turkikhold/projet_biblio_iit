import React from 'react';
import {  Heart, Hammer ,Laptop,FlaskConical,Wrench,Factory} from 'lucide-react';

const categories = [
  { name: "Informatique", icon: Laptop, count: 2584, color: "bg-blue-500" },
  { name: "Procédure", icon: FlaskConical, count: 1829, color: "bg-purple-500" },
  { name: "Industrielle", icon: Factory, count: 3421, color: "bg-pink-500" },
  { name: "Mécanique", icon: Wrench, count: 942, color: "bg-red-500" },
  { name: "Civil", icon: Hammer, count: 1672, color: "bg-amber-500" },
];

export function Categories() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Départements</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`${category.color} h-32 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <Icon className="w-12 h-12 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} Books</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}