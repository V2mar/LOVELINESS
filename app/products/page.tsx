
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Eyes on Me - Kit Premium',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 234,
      category: 'kits',
      image: 'https://readdy.ai/api/search-image?query=Professional%20dramatic%20eyelash%20extension%20kit%20with%20long%20black%20lashes%2C%20luxury%20rose%20gold%20packaging%2C%20beauty%20tools%20and%20premium%20adhesive%2C%20elegant%20product%20photography%20on%20marble%20background%2C%20high-end%20cosmetic%20styling&width=400&height=400&seq=product-1&orientation=squarish',
      badge: 'Bestseller',
      isNew: false
    },
    {
      id: 2,
      name: 'First Meet - Kit Naturel',
      price: 79.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 189,
      category: 'kits',
      image: 'https://readdy.ai/api/search-image?query=Natural%20volume%20eyelash%20extension%20kit%20with%20subtle%20lashes%2C%20elegant%20purple%20and%20silver%20packaging%2C%20professional%20beauty%20tools%2C%20soft%20lighting%2C%20luxury%20cosmetic%20product%20photography%20on%20white%20marble&width=400&height=400&seq=product-2&orientation=squarish',
      badge: 'Nouveau',
      isNew: true
    },
    {
      id: 3,
      name: 'Colle Premium Pro',
      price: 24.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 456,
      category: 'accessories',
      image: 'https://readdy.ai/api/search-image?query=Professional%20eyelash%20adhesive%20glue%20bottle%20with%20precision%20applicator%2C%20black%20and%20silver%20packaging%2C%20beauty%20product%20photography%20on%20clean%20white%20background%2C%20luxury%20cosmetic%20styling&width=400&height=400&seq=product-3&orientation=squarish',
      badge: null,
      isNew: false
    },
    {
      id: 4,
      name: 'Pincettes de Précision',
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.6,
      reviews: 123,
      category: 'accessories',
      image: 'https://readdy.ai/api/search-image?query=Professional%20precision%20tweezers%20for%20eyelash%20extensions%2C%20stainless%20steel%20tools%2C%20elegant%20packaging%2C%20beauty%20product%20photography%20on%20marble%20surface%2C%20luxury%20cosmetic%20styling&width=400&height=400&seq=product-4&orientation=squarish',
      badge: 'Promo',
      isNew: false
    },
    {
      id: 5,
      name: 'Démaquillant Doux',
      price: 16.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 98,
      category: 'care',
      image: 'https://readdy.ai/api/search-image?query=Gentle%20makeup%20remover%20bottle%20for%20eyelash%20extensions%2C%20clear%20liquid%20in%20elegant%20glass%20bottle%2C%20pink%20and%20white%20packaging%2C%20beauty%20product%20photography%20on%20clean%20background&width=400&height=400&seq=product-5&orientation=squarish',
      badge: null,
      isNew: false
    },
    {
      id: 6,
      name: 'Sérum Fortifiant',
      price: 34.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 167,
      category: 'care',
      image: 'https://readdy.ai/api/search-image?query=Eyelash%20growth%20serum%20in%20elegant%20dropper%20bottle%2C%20luxury%20packaging%20with%20gold%20accents%2C%20beauty%20product%20photography%20on%20marble%20surface%2C%20high-end%20cosmetic%20styling&width=400&height=400&seq=product-6&orientation=squarish',
      badge: 'Recommandé',
      isNew: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les produits', count: products.length },
    { id: 'kits', name: 'Kits Complets', count: products.filter(p => p.category === 'kits').length },
    { id: 'accessories', name: 'Accessoires', count: products.filter(p => p.category === 'accessories').length },
    { id: 'care', name: 'Soins', count: products.filter(p => p.category === 'care').length }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-black">Accueil</Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <span className="text-black">Produits</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filtres</h3>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden w-6 h-6 flex items-center justify-center"
                >
                  <i className="ri-filter-line"></i>
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Categories */}
                <div>
                  <h4 className="font-medium mb-3">Catégories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id 
                            ? 'bg-black text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <span className="text-sm opacity-75">({category.count})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-3">Prix</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>{priceRange[0]}€</span>
                      <span>{priceRange[1]}€</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h4 className="font-medium mb-3">Note minimum</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map(rating => (
                      <button key={rating} className="flex items-center space-x-2 w-full text-left hover:bg-gray-100 px-3 py-2 rounded-lg">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`ri-star-fill text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                          ))}
                        </div>
                        <span className="text-sm">et plus</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">
                {selectedCategory === 'all' ? 'Tous nos produits' : categories.find(c => c.id === selectedCategory)?.name}
                <span className="text-gray-500 font-normal ml-2">({filteredProducts.length} produits)</span>
              </h1>
              
              <div className="flex items-center space-x-4">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-8"
                >
                  <option value="popular">Plus populaires</option>
                  <option value="newest">Plus récents</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                  <option value="rating">Mieux notés</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover object-top rounded-t-lg"
                    />
                    {product.badge && (
                      <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-full ${
                        product.badge === 'Bestseller' ? 'bg-yellow-400 text-black' :
                        product.badge === 'Nouveau' ? 'bg-green-500 text-white' :
                        product.badge === 'Promo' ? 'bg-red-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                    <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="ri-heart-line text-gray-600"></i>
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-gray-800">{product.name}</h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`ri-star-fill text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-black">{product.price}€</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}€</span>
                        )}
                      </div>
                      <Link 
                        href={`/products/${product.id}`}
                        className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors text-sm whitespace-nowrap"
                      >
                        Voir détails
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
