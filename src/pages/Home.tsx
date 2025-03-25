import React from "react";
import { BookOpen, Users, Phone, BookMarked } from "lucide-react";
import { Hero } from "../components/Hero";
import { Categories } from "../components/sections/Categories";
import { PopularAuthors } from "../components/sections/PopularAuthors";
// import { Testimonials } from "../components/sections/Testimonials";

function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Categories />
        <PopularAuthors />

        {/* Features Section
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Vast Collection</h3>
              <p className="text-gray-600">
                Over 100,000 books across all genres
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Member Benefits</h3>
              <p className="text-gray-600">Exclusive perks and early access</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <BookMarked className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Digital Library</h3>
              <p className="text-gray-600">Read on any device, anywhere</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Always here to assist you</p>
            </div>
          </div>
        </section> */}
      </main>

      {/* <Testimonials /> */}

      {/* Footer */}
      <footer className="bg-[#2B4E84] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-6">About IIT Library</h4>
              <p className=" text-white leading-relaxed">
              Votre destination principale pour les livres, le savoir et les aventures littéraires.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4  text-white">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <ul className="space-y-4  text-white">
                <li>Rte de Tunis, Sakiet Ezzit</li>
                <li>Tunisie, Sfax</li>
                <li>Phone: (+216) 74 465 020</li>
                <li>Email: info@iit.tn</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
              <ul className="space-y-4  text-white">
                <li>Monday - Friday: 8AM - 6PM</li>
                <li>Saturday: 8AM - 1PM</li>
                <li>Sunday: closed</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center  text-white">
            <p>&copy; 2024 IIT Library. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
