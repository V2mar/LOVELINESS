'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  benefits: string[];
}

export default function MasquesOrPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  const products: Product[] = [
    {
      id: 7,
      name: "Masque Or 24k Anti-Âge Premium",
      price: 89.99,
      rating: 4.9,
      reviews: 234,
      badge: "Bestseller",
      description: "Masque luxueux à l'or 24 carats pour une peau éclatante et raffermie",
      benefits: ["Anti-âge", "Éclat immédiat", "Hydratation intense", "Raffermissement"],
      image: "https://readdy.ai/api/search-image?query=Luxury%20gold%20face%20mask%20jar%20with%2024k%20gold%20particles%2C%20premium%20skincare%20packaging%2C%20elegant%20beauty%20product%20photography%2C%20marble%20background%2C%20sophisticated%20anti-aging%20cosmetic%2C%20golden%20accents&width=400&height=400&seq=gold1&orientation=squarish"
    },
    {
      id: 8,
      name: "Masque Hydrogel Or & Collagène",
      price: 45.99,
      rating: 4.8,
      reviews: 187,
      badge: "Nouveau",
      description: "Masque hydrogel enrichi à l'or et au collagène pour un effet liftant",
      benefits: ["Effet lifting", "Hydratation 72h", "Anti-rides", "Régénération"],
      image: "https://readdy.ai/api/search-image?query=Premium%20hydrogel%20face%20mask%20with%20gold%20particles%20and%20collagen%2C%20luxury%20skincare%20packaging%2C%20sophisticated%20beauty%20product%2C%20elegant%20cosmetic%20photography%2C%20golden%20treatment%20mask&width=400&height=400&seq=gold2&orientation=squarish"
    },
    {
      id: 9,
      name: "Sérum Or Concentré Réparateur",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.7,
      reviews: 156,
      description: "Sérum haute concentration à l'or pur pour réparer et revitaliser",
      benefits: ["Réparation cellulaire", "Antioxydant", "Éclat du teint", "Anti-taches"],
      image: "https://readdy.ai/api/search-image?query=Luxury%20gold%20serum%20bottle%20with%20dropper%2C%20premium%20skincare%20product%20with%2024k%20gold%20particles%2C%20elegant%20packaging%2C%20sophisticated%20cosmetic%20photography%2C%20anti-aging%20treatment&width=400&height=400&seq=gold3&orientation=squarish"
    },
    {
      id: 10,
      name: "Kit Rituel Or Complet",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.9,
      reviews: 98,
      badge: "Kit Exclusif",
      description: "Rituel complet de soins à l'or : nettoyant, sérum, masque et crème",
      benefits: ["Routine complète", "Synergie des actifs", "Résultats optimaux", "Coffret luxe"],
      image: "https://readdy.ai/api/search-image?query=Complete%20luxury%20gold%20skincare%20ritual%20kit%20with%20multiple%20products%2C%20elegant%20golden%20packaging%2C%20premium%20beauty%20set%2C%20sophisticated%20cosmetic%20collection%2C%20high-end%20spa%20treatment&width=400&height=400&seq=gold4&orientation=squarish"
    },
    {
      id: 11,
      name: "Crème Nuit Or & Perles",
      price: 79.99,
      rating: 4.6,
      reviews: 203,
      description: "Crème de nuit enrichie à l'or et aux perles pour une régénération nocturne",
      benefits: ["Régénération nocturne", "Nutrition intense", "Éclat au réveil", "Texture soyeuse"],
      image: "https://readdy.ai/api/search-image?query=Luxury%20night%20cream%20with%20gold%20and%20pearl%20extracts%2C%20elegant%20jar%20packaging%2C%20premium%20skincare%20product%2C%20sophisticated%20beauty%20photography%2C%20golden%20cosmetic%20cream&width=400&height=400&seq=gold5&orientation=squarish"
    },
    {
      id: 12,
      name: "Gommage Or & Diamant",
      price: 59.99,
      rating: 4.8,
      reviews: 167,
      description: "Gommage luxueux aux particules d'or et de diamant pour un éclat optimal",
      benefits: ["Exfoliation douce", "Éclat instantané", "Texture affinée", "Préparation optimale"],
      image: "https://readdy.ai/api/search-image?query=Luxury%20face%20scrub%20with%20gold%20and%20diamond%20particles%2C%20premium%20exfoliating%20product%2C%20elegant%20packaging%2C%20sophisticated%20skincare%20photography%2C%20golden%20beauty%20treatment&width=400&height=400&seq=gold6&orientation=squarish"
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Luxurious%20spa%20treatment%20with%20gold%20face%20mask%20on%20elegant%20woman%2C%20golden%20particles%20floating%2C%20premium%20wellness%20environment%2C%20sophisticated%20beauty%20photography%2C%20warm%20golden%20lighting%2C%20high-end%20cosmetic%20treatment%2C%20marble%20spa%20setting&width=1200&height=400&seq=hero-gold&orientation=landscape"
            alt="Masques à l'or"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/60 to-black/40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6">
              <div className="max-w-7xl mx-auto text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Masques à l'Or</h1>
                <p className="text-xl mb-6 max-w-2xl">Offrez-vous un traitement royal avec nos soins enrichis à l'or 24 carats</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="bg-yellow-500/20 px-3 py-1 rounded-full">✨ Or 24 carats</span>
                  <span className="bg-yellow-500/20 px-3 py-1 rounded-full">👑 Effet luxe immédiat</span>
                  <span className="bg-yellow-500/20 px-3 py-1 rounded-full">⚡ Anti-âge puissant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sort Section */}
        <section className="py-8 bg-white border-b">
          <div className="px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Nos Soins à l'Or</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 font-medium">Trier par:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500 pr-8"
                  >
                    <option value="featured">Produits vedettes</option>
                    <option value="price-low">Prix croissant</option>
                    <option value="price-high">Prix décroissant</option>
                    <option value="rating">Meilleures notes</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-gradient-to-b from-yellow-50/30 to-white">
          <div className="px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-yellow-100">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Badges */}
                      {product.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {product.badge}
                          </span>
                        </div>
                      )}

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-300 cursor-pointer"
                      >
                        <i className={`${favorites.includes(product.id) ? 'ri-heart-fill text-yellow-600' : 'ri-heart-line text-gray-600'} text-lg`}></i>
                      </button>

                      {/* Quick Actions */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
                            Ajouter au panier
                          </button>
                          <Link href={`/product/${product.id}`} className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                            <i className="ri-eye-line text-gray-700"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.benefits.slice(0, 2).map((benefit, index) => (
                          <span key={index} className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full border border-yellow-200">
                            {benefit}
                          </span>
                        ))}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`${i < Math.floor(product.rating) ? 'ri-star-fill' : 'ri-star-line'} text-sm`}></i>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          {product.rating} ({product.reviews} avis)
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-gray-900">
                            {product.price}€
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {product.originalPrice}€
                            </span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <div className="px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Les Bienfaits de l'Or pour Votre Peau</h2>
                <p className="text-xl opacity-90">Découvrez pourquoi l'or est l'ingrédient de luxe par excellence</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                    <i className="ri-flashlight-line text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Éclat Immédiat</h3>
                  <p className="text-white/90 text-sm">L'or illumine instantanément le teint</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                    <i className="ri-leaf-line text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Anti-Âge</h3>
                  <p className="text-white/90 text-sm">Stimule la régénération cellulaire</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                    <i className="ri-drop-line text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hydratation</h3>
                  <p className="text-white/90 text-sm">Maintient l'hydratation optimale</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                    <i className="ri-shield-line text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Protection</h3>
                  <p className="text-white/90 text-sm">Protège des agressions extérieures</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}