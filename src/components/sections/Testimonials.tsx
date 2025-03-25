// import React from 'react';
// import { Quote } from 'lucide-react';

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Book Club Leader",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
//     quote: "LibraryHub has transformed our book club experience. The vast selection and easy access to new releases keep our discussions fresh and engaging."
//   },
//   {
//     name: "Michael Chen",
//     role: "Literature Professor",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
//     quote: "An invaluable resource for both my research and teaching. The academic collection is particularly impressive."
//   },
//   {
//     name: "Emma Thompson",
//     role: "Avid Reader",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
//     quote: "I love how personalized the recommendations are. It's like having a personal librarian who knows exactly what I enjoy reading."
//   }
// ];

// export function Testimonials() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">What Our Readers Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white rounded-xl p-8 shadow-lg relative">
//               <Quote className="absolute -top-6 -left-6 w-12 h-12 text-emerald-500 bg-white rounded-full p-2" />
//               <p className="text-gray-600 mb-8 italic">{testimonial.quote}</p>
//               <div className="flex items-center gap-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
//                   <p className="text-sm text-emerald-600">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }