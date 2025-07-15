'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
}

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Kit Extension Premium Russe",
      price: 149.99,
      originalPrice: 199.99,
      category: "Extensions Cils",
      rating: 4.9,
      reviews: 247,
      badge: "Bestseller",
      image: "https://readdy.ai/api/search-image?query=Professional%20eyelash%20extension%20kit%20with%20various%20curl%20types%20and%20lengths%2C%20luxury%20packaging%20in%20rose%20gold%2C%20premium%20beauty%20tools%2C%20elegant%20product%20photography%2C%20clean%20white%20background%2C%20sophisticated%20cosmetic%20display&width=400&height=400&seq=prod1&orientation=squarish"
    },
    {
      id: 2,
      name: "Masque Or 24k Anti-Âge",
      price: 89.99,
      category: "Masques Or",
      rating: 4.8,
      reviews: 189,
      isNew: true,
      image: "https://readdy.ai/api/search-image?query=Luxury%20gold%20face%20mask%20jar%20with%2024k%20gold%20particles%2C%20premium%20skincare%20packaging%2C%20elegant%20beauty%20product%20photography%2C%20marble%20background%2C%20sophisticated%20anti-aging%20cosmetic%2C%20golden%20accents&width=400&height=400&seq=prod2&orientation=squarish"
    },
    {
      id: 3,
      name: "Kit Beauté Complet Éclat",
      price: 259.99,
      originalPrice: 329.99,
      category: "Kits Beauté",
      rating: 4.7,
      reviews: 156,
      badge: "Kit Exclusif",
      image: "https://readdy.ai/api/search-image?query=Complete%20luxury%20beauty%20kit%20with%20multiple%20cosmetic%20products%2C%20elegant%20packaging%20in%20pink%20and%20gold%2C%20premium%20skincare%20set%2C%20sophisticated%20product%20arrangement%2C%20clean%20background%2C%20high-end%20cosmetic%20collection&width=400&height=400&seq=prod3&orientation=squarish"
    },
    {
      id: 4,
      name: "Pinceau Set Professional",
      price: 79.99,
      category: "Accessoires",
      rating: 4.9,
      reviews: 312,
      image: "https://readdy.ai/api/search-image?query=Professional%20makeup%20brush%20set%20with%20soft%20bristles%2C%20elegant%20rose%20gold%20handles%2C%20luxury%20beauty%20tools%20in%20premium%20case%2C%20sophisticated%20cosmetic%20accessories%2C%20clean%20product%20photography&width=400&height=400&seq=prod4&orientation=squarish"
    },
    {
      id: 5,
      name: "Sérum Cils Croissance Intense",
      price: 69.99,
      category: "Extensions Cils",
      rating: 4.6,
      reviews: 203,
      isNew: true,
      image: "https://readdy.ai/api/search-image?query=Luxury%20eyelash%20growth%20serum%20bottle%20with%20elegant%20dropper%2C%20premium%20skincare%20packaging%2C%20sophisticated%20beauty%20product%20photography%2C%20clean%20background%2C%20high-end%20cosmetic%20treatment&width=400&height=400&seq=prod5&orientation=squarish"
    },
    {
      id: 6,
      name: "Masque Hydrogel Premium",
      price: 45.99,
      category: "Masques Or",
      rating: 4.8,
      reviews: 178,
      image: "https://readdy.ai/api/search-image?query=Premium%20hydrogel%20face%20mask%20packaging%20with%20gold%20accents%2C%20luxury%20skincare%20product%2C%20elegant%20beauty%20photography%2C%20sophisticated%20cosmetic%20design%2C%20clean%20white%20background&width=400&height=400&seq=prod6&orientation=squarish"
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
    <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Produits Stars
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection exclusive de cosmétiques haut de gamme, plébiscités par nos clientes
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    {product.badge && (
                      <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.badge}
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium ml-2">
                        Nouveau
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <i className={`${favorites.includes(product.id) ? 'ri-heart-fill text-pink-600' : 'ri-heart-line text-gray-600'} text-lg`}></i>
                  </button>

                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap">
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
                  <div className="mb-2">
                    <span className="text-sm text-pink-600 font-medium">{product.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {product.name}
                  </h3>

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
                      <span className="text-2xl font-bold text-gray-900">
                        {product.price}€
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {product.originalPrice}€
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Voir tous nos produits
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}