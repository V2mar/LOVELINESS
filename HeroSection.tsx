'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Révélez votre beauté naturelle",
      subtitle: "Collection Exclusive 2024",
      description: "Découvrez nos cosmétiques haut de gamme conçus pour sublimer votre éclat naturel avec des ingrédients d'exception.",
      cta: "Découvrir la collection",
      link: "/kits-beaute",
      image: "https://readdy.ai/api/search-image?query=Luxury%20cosmetics%20collection%20with%20golden%20packaging%2C%20soft%20pink%20roses%2C%20marble%20background%2C%20elegant%20beauty%20products%20arranged%20artistically%2C%20high-end%20skincare%20bottles%20and%20makeup%20items%2C%20warm%20lighting%2C%20sophisticated%20display%2C%20minimalist%20aesthetic%20with%20premium%20feel&width=800&height=600&seq=hero1&orientation=landscape"
    },
    {
      title: "Extensions de cils premium",
      subtitle: "Volume & Longueur",
      description: "Obtenez un regard captivant avec nos extensions de cils ultra-légères et naturelles, appliquées par nos experts.",
      cta: "Voir les extensions",
      link: "/extensions-cils",
      image: "https://readdy.ai/api/search-image?query=Beautiful%20woman%20with%20perfect%20long%20eyelashes%2C%20close-up%20beauty%20shot%2C%20professional%20makeup%2C%20soft%20lighting%2C%20elegant%20model%20with%20flawless%20skin%2C%20luxury%20beauty%20treatment%2C%20premium%20cosmetic%20advertisement%20style%2C%20sophisticated%20beauty%20photography&width=800&height=600&seq=hero2&orientation=landscape"
    },
    {
      title: "Masques à l'or 24 carats",
      subtitle: "Soin Anti-Âge",
      description: "Offrez-vous un traitement royal avec nos masques enrichis à l'or pur pour une peau éclatante et raffermie.",
      cta: "Découvrir les masques",
      link: "/masques-or",
      image: "https://readdy.ai/api/search-image?query=Luxurious%20gold%20face%20mask%20on%20elegant%20woman%2C%20spa%20treatment%20with%20gold%20leaf%20particles%2C%20premium%20skincare%20ritual%2C%20sophisticated%20beauty%20photography%2C%20soft%20golden%20lighting%2C%20high-end%20cosmetic%20treatment%2C%20marble%20spa%20environment%2C%20luxury%20wellness%20experience&width=800&height=600&seq=hero3&orientation=landscape"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    currentSlide === index 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                >
                  {currentSlide === index && (
                    <>
                      <p className="text-pink-300 text-lg font-medium mb-4 tracking-wide">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href={slide.link}
                          className="inline-flex items-center px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
                        >
                          {slide.cta}
                          <i className="ri-arrow-right-line ml-2"></i>
                        </Link>
                        <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
                          <i className="ri-play-circle-line mr-2 text-xl"></i>
                          Voir la vidéo
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index 
                ? 'bg-pink-500 w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer z-20"
      >
        <i className="ri-arrow-left-line text-white text-xl"></i>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer z-20"
      >
        <i className="ri-arrow-right-line text-white text-xl"></i>
      </button>
    </section>
  );
}