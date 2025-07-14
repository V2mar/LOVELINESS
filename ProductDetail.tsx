
'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

interface ProductData {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  images: string[];
  rating: number;
  reviews: number;
  stock: number;
  category: string;
  benefits: string[];
  ingredients?: string[];
  usage?: string[];
}

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export default function ProductDetail({ productId }: { productId: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Données produit basées sur l'ID
  const getProductData = (id: string): ProductData => {
    const products: { [key: string]: ProductData } = {
      '1': {
        id: 1,
        name: "Kit Extension Cils Glamour Pro",
        price: 39.99,
        originalPrice: 49.99,
        description: "Un kit complet pour un regard irrésistible avec pince, colle, cils en soie et brosse. Parfait pour débuter ou perfectionner votre technique d'application.",
        features: ["Cils en soie premium", "Colle hypoallergénique", "Pince de précision", "Brosse de séparation", "Guide d'application"],
        images: [
          "https://readdy.ai/api/search-image?query=Complete%20eyelash%20extension%20kit%20with%20precision%20tweezers%2C%20hypoallergenic%20glue%2C%20silk%20lashes%20and%20separation%20brush%2C%20elegant%20packaging%2C%20professional%20beauty%20tools%20arranged%20beautifully%2C%20luxury%20cosmetic%20photography&width=600&height=600&seq=prod-detail1&orientation=squarish",
          "https://readdy.ai/api/search-image?query=Close-up%20of%20silk%20eyelashes%20in%20various%20lengths%20and%20curls%2C%20premium%20quality%20lash%20extensions%2C%20detailed%20product%20photography%2C%20beauty%20accessories%2C%20professional%20cosmetic%20supplies&width=600&height=600&seq=prod-detail1b&orientation=squarish",
          "https://readdy.ai/api/search-image?query=Precision%20tweezers%20and%20eyelash%20glue%20bottle%2C%20professional%20application%20tools%2C%20clean%20product%20photography%2C%20beauty%20equipment%20for%20lash%20extensions&width=600&height=600&seq=prod-detail1c&orientation=squarish",
          "https://readdy.ai/api/search-image?query=Beautiful%20woman%20applying%20eyelash%20extensions%20with%20professional%20kit%2C%20step-by-step%20application%20process%2C%20beauty%20tutorial%20photography&width=600&height=600&seq=prod-detail1d&orientation=squarish"
        ],
        rating: 4.8,
        reviews: 52,
        stock: 128,
        category: "Extensions Cils",
        benefits: ["Effet naturel", "Longue tenue", "Application facile", "Kit complet"],
        ingredients: ["Cils en soie 100% naturelle", "Colle cyanoacrylate médicale", "Matériaux hypoallergéniques"],
        usage: ["Nettoyer les cils naturels", "Appliquer la colle sur l'extension", "Placer délicatement sur le cil", "Laisser sécher 24h"]
      },
      '2': {
        id: 2,
        name: "Masque Or 24k Anti-Âge Premium",
        price: 89.99,
        description: "Masque luxueux à l'or 24 carats pour une peau éclatante et raffermie. Formule anti-âge révolutionnaire.",
        features: ["Or 24 carats", "Collagène marin", "Acide hyaluronique", "Effet lifting immédiat"],
        images: [
          "https://readdy.ai/api/search-image?query=Luxury%20gold%20face%20mask%20jar%20with%2024k%20gold%20particles%2C%20premium%20skincare%20packaging%2C%20elegant%20beauty%20product%20photography%2C%20marble%20background%2C%20sophisticated%20anti-aging%20cosmetic&width=600&height=600&seq=gold-detail1&orientation=squarish",
          "https://readdy.ai/api/search-image?query=Gold%20face%20mask%20applied%20on%20elegant%20woman%2C%20spa%20treatment%20with%20golden%20particles%2C%20luxury%20skincare%20ritual%2C%20professional%20beauty%20photography&width=600&height=600&seq=gold-detail2&orientation=squarish"
        ],
        rating: 4.9,
        reviews: 234,
        stock: 45,
        category: "Masques Or",
        benefits: ["Anti-âge", "Éclat immédiat", "Hydratation intense", "Raffermissement"]
      },
      '3': {
        id: 3,
        name: "Kit Beauté Complet Éclat",
        price: 259.99,
        originalPrice: 329.99,
        description: "Routine complète pour un teint éclatant et une peau parfaite. Collection de 5 produits synergiques.",
        features: ["Nettoyant purifiant", "Sérum vitamine C", "Crème hydratante", "Masque éclat", "Huile précieuse"],
        images: [
          "https://readdy.ai/api/search-image?query=Complete%20luxury%20beauty%20kit%20with%20multiple%20cosmetic%20products%2C%20elegant%20packaging%20in%20pink%20and%20gold%2C%20premium%20skincare%20set%20arranged%20beautifully&width=600&height=600&seq=kit-detail1&orientation=squarish"
        ],
        rating: 4.9,
        reviews: 178,
        stock: 23,
        category: "Kits Beauté",
        benefits: ["Routine complète", "Synergie des actifs", "Résultats optimaux", "Économies"]
      }
    };
    
    return products[id] || products['1'];
  };

  const product = getProductData(productId);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Marie L.",
      rating: 5,
      date: "15 Nov 2024",
      comment: "Produit exceptionnel ! Les résultats sont visibles dès la première utilisation. Je recommande vivement.",
      verified: true
    },
    {
      id: 2,
      name: "Sophie M.",
      rating: 4,
      date: "10 Nov 2024",
      comment: "Très bon produit, conforme à la description. L'application est facile grâce au guide fourni.",
      verified: true
    },
    {
      id: 3,
      name: "Emma R.",
      rating: 5,
      date: "8 Nov 2024",
      comment: "Je suis absolument ravie ! La qualité est au rendez-vous et le packaging est magnifique.",
      verified: true
    }
  ];

  const handleAddToCart = () => {
    // Logique d'ajout au panier
    console.log(`Ajout au panier: ${quantity}x ${product.name}`);
  };

  const handleBuyNow = () => {
    // Logique d'achat immédiat
    console.log(`Achat immédiat: ${quantity}x ${product.name}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50">
          <div className="px-6">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center space-x-2 text-sm">
                <Link href="/" className="text-gray-500 hover:text-pink-600">Accueil</Link>
                <i className="ri-arrow-right-s-line text-gray-400"></i>
                <Link href={`/${product.category.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-pink-600">{product.category}</Link>
                <i className="ri-arrow-right-s-line text-gray-400"></i>
                <span className="text-gray-900">{product.name}</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Images */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {product.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-3">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`aspect-square rounded-lg overflow-hidden cursor-pointer ${
                            currentImageIndex === index ? 'ring-2 ring-pink-500' : ''
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <span className="text-sm text-pink-600 font-medium">{product.category}</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                      {product.name}
                    </h1>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`${i < Math.floor(product.rating) ? 'ri-star-fill' : 'ri-star-line'} text-lg`}></i>
                          ))}
                        </div>
                        <span className="text-gray-600 ml-2">{product.rating}</span>
                      </div>
                      <span className="text-gray-500">({product.reviews} avis)</span>
                      <span className="text-green-600 text-sm">✓ {product.stock} en stock</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-3xl font-bold text-gray-900">
                        {product.price}€
                      </span>
                      {product.originalPrice && (
                        <>
                          <span className="text-xl text-gray-500 line-through">
                            {product.originalPrice}€
                          </span>
                          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <i className="ri-check-line text-green-500"></i>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-4">
                    {/* Quantity */}
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-700 font-medium">Quantité:</span>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          <i className="ri-subtract-line"></i>
                        </button>
                        <span className="w-12 text-center font-medium">{quantity}</span>
                        <button
                          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Ajouter au panier
                      </button>
                      <button
                        onClick={handleBuyNow}
                        className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Acheter maintenant
                      </button>
                    </div>

                    {/* Wishlist */}
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className="w-full flex items-center justify-center space-x-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <i className={`${isWishlisted ? 'ri-heart-fill text-pink-600' : 'ri-heart-line text-gray-600'} text-lg`}></i>
                      <span className="text-gray-700">
                        {isWishlisted ? 'Retiré des favoris' : 'Ajouter aux favoris'}
                      </span>
                    </button>

                    {/* Info */}
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-3">
                        <i className="ri-truck-line text-green-600"></i>
                        <span className="text-sm text-gray-600">Livraison gratuite dès 50€</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-shield-check-line text-green-600"></i>
                        <span className="text-sm text-gray-600">Garantie satisfaction 30 jours</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-customer-service-2-line text-green-600"></i>
                        <span className="text-sm text-gray-600">Support expert 7j/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-gray-50">
          <div className="px-6">
            <div className="max-w-4xl mx-auto">
              {/* Tabs */}
              <div className="flex space-x-8 border-b border-gray-200 mb-8">
                {[
                  { id: 'description', label: 'Description' },
                  { id: 'features', label: 'Caractéristiques' },
                  { id: 'usage', label: 'Utilisation' },
                  { id: 'reviews', label: `Avis (${product.reviews})` }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`py-3 px-1 border-b-2 font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      selectedTab === tab.id
                        ? 'border-pink-500 text-pink-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-2xl p-8">
                {selectedTab === 'description' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Description détaillée</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <i className="ri-check-double-line text-green-500 mt-1"></i>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === 'features' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
                    <div className="space-y-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <i className="ri-arrow-right-s-line text-pink-500"></i>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {product.ingredients && (
                      <div className="mt-8">
                        <h4 className="font-semibold mb-3">Ingrédients</h4>
                        <ul className="text-gray-600 space-y-1">
                          {product.ingredients.map((ingredient, index) => (
                            <li key={index}>• {ingredient}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {selectedTab === 'usage' && product.usage && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Mode d'emploi</h3>
                    <div className="space-y-4">
                      {product.usage.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 flex-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === 'reviews' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">Avis clients</h3>
                      <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap">
                        Écrire un avis
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      {reviews.map(review => (
                        <div key={review.id} className="border-b border-gray-200 pb-6">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <span className="font-semibold text-gray-900">{review.name}</span>
                              {review.verified && (
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                  Achat vérifié
                                </span>
                              )}
                            </div>
                            <span className="text-gray-500 text-sm">{review.date}</span>
                          </div>
                          
                          <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className={`${i < review.rating ? 'ri-star-fill' : 'ri-star-line'} text-sm`}></i>
                            ))}
                          </div>
                          
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
