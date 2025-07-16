
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          <span>Livraison gratuite à partir de 50€ • Échantillons gratuits avec chaque commande</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="logo text-2xl font-bold text-black">
            LashPro
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-black transition-colors">
              Produits
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-black transition-colors">
              Catégories
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-black transition-colors">
              Marques
            </Link>
            <Link href="/offers" className="text-gray-700 hover:text-black transition-colors">
              Offres
            </Link>
            <Link href="/beauty-tips" className="text-gray-700 hover:text-black transition-colors">
              Conseils Beauté
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-6 h-6 flex items-center justify-center"
              >
                <i className="ri-search-line text-xl"></i>
              </button>
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 border">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Rechercher des produits..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input-field pr-10"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <i className="ri-search-line text-gray-400"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link href="/wishlist" className="w-6 h-6 flex items-center justify-center">
              <i className="ri-heart-line text-xl"></i>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative w-6 h-6 flex items-center justify-center">
              <i className="ri-shopping-bag-line text-xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link href="/account" className="w-6 h-6 flex items-center justify-center">
              <i className="ri-user-line text-xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-gray-50 px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/products" className="text-sm text-gray-700">Produits</Link>
          <Link href="/categories" className="text-sm text-gray-700">Catégories</Link>
          <Link href="/brands" className="text-sm text-gray-700">Marques</Link>
          <Link href="/offers" className="text-sm text-gray-700">Offres</Link>
        </div>
      </div>
    </header>
  );
}
