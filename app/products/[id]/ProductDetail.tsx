
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  images: string[];
  variants?: { name: string; price: number; }[];
  inStock: boolean;
  category: string;
}

export default function ProductDetail({ productId }: { productId: string }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product: Product = {
    id: parseInt(productId),
    name: productId === '1' ? 'Eyes on Me - Kit Premium' : 'First Meet - Kit Naturel',
    price: productId === '1' ? 89.99 : 79.99,
    originalPrice: productId === '1' ? 109.99 : undefined,
    rating: 4.8,
    reviews: 234,
    description: productId === '1' 
      ? 'Kit d\'extension de cils premium pour un regard dramatique et captivant. Parfait pour les occasions spéciales et les soirées élégantes.'
      : 'Extension de cils naturelle pour un look quotidien sophistiqué. Idéal pour sublimer votre regard au quotidien avec élégance.',
    features: [
      'Cils de qualité premium en fibres synthétiques',
      'Colle hypoallergénique longue durée',
      'Pincettes de précision professionnelles',
      'Guide d\'application détaillé',
      'Résistant à l\'eau et aux larmes',
      'Tenue jusqu\'à 6 semaines'
    ],
    images: [
      `https://readdy.ai/api/search-image?query=${productId === '1' ? 'Professional dramatic eyelash extension kit with long black lashes, luxury rose gold packaging, beauty tools and premium adhesive, elegant product photography on marble background' : 'Natural volume eyelash extension kit with subtle lashes, elegant purple and silver packaging, professional beauty tools, soft lighting, luxury cosmetic product photography'}&width=600&height=600&seq=detail-${productId}-1&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=${productId === '1' ? 'Close up of dramatic eyelash extensions being applied, professional beauty treatment, elegant hands with tweezers, luxury salon setting' : 'Natural eyelash extensions application process, gentle volume lashes, professional beauty treatment, soft natural lighting'}&width=600&height=600&seq=detail-${productId}-2&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=${productId === '1' ? 'Before and after eyelash extension results, dramatic transformation, professional beauty photography, elegant woman with perfect lashes' : 'Subtle natural eyelash extension results, before and after comparison, elegant woman with beautiful natural lashes, soft lighting'}&width=600&height=600&seq=detail-${productId}-3&orientation=squarish`
    ],
    variants: [
      { name: 'Kit Standard', price: productId === '1' ? 89.99 : 79.99 },
      { name: 'Kit Premium', price: productId === '1' ? 119.99 : 109.99 }
    ],
    inStock: true,
    category: 'kits'
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    alert('Produit ajouté au panier !');
  };

  return (
    <div>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-black">Accueil</Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <Link href="/products" className="text-gray-500 hover:text-black">Produits</Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <span className="text-black">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
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
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`ri-star-fill ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews} avis)</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold">{product.variants?.[selectedVariant]?.price || product.price}€</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}€</span>
                )}
              </div>
            </div>

            {/* Variants */}
            {product.variants && (
              <div>
                <h3 className="font-semibold mb-3">Choisir votre kit</h3>
                <div className="space-y-2">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(index)}
                      className={`w-full p-4 border rounded-lg text-left transition-colors ${
                        selectedVariant === index ? 'border-black bg-gray-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{variant.name}</span>
                        <span className="font-bold">{variant.price}€</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantité</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <i className="ri-subtract-line"></i>
                </button>
                <span className="text-lg font-medium px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <i className="ri-add-line"></i>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Ajouter au panier' : 'Rupture de stock'}
              </button>
              <button className="w-full btn-secondary">
                <i className="ri-heart-line mr-2"></i>
                Ajouter aux favoris
              </button>
            </div>

            {/* Stock Status */}
            <div className={`p-3 rounded-lg ${product.inStock ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <div className="flex items-center">
                <i className={`${product.inStock ? 'ri-check-line' : 'ri-close-line'} mr-2`}></i>
                <span className="font-medium">
                  {product.inStock ? 'En stock - Expédition sous 24h' : 'Rupture de stock'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              {['description', 'features', 'reviews'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab 
                      ? 'border-black text-black' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'description' ? 'Description' : 
                   tab === 'features' ? 'Caractéristiques' : 'Avis clients'}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <i className="ri-check-line text-green-500 mt-1"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Avis clients ({product.reviews})</h3>
                  <button className="btn-secondary">Écrire un avis</button>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3].map(review => (
                    <div key={review} className="border-b border-gray-200 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                            ))}
                          </div>
                          <span className="font-medium">Marie L.</span>
                        </div>
                        <span className="text-sm text-gray-500">Il y a 2 jours</span>
                      </div>
                      <p className="text-gray-700">
                        Excellent produit ! Les cils sont très naturels et tiennent parfaitement. 
                        Je recommande vivement ce kit pour débuter.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
