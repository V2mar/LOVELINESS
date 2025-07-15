'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Pacifico", serif' }}>
            BeautyLux
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/extensions-cils" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap">
              Extensions Cils
            </Link>
            <Link href="/masques-or" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap">
              Masques Or
            </Link>
            <Link href="/kits-beaute" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap">
              Kits Beauté
            </Link>
            <Link href="/accessoires" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap">
              Accessoires
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap">
              À Propos
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
            >
              <i className="ri-search-line text-xl"></i>
            </button>

            {/* Account */}
            <Link href="/mon-compte" className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-pink-600 transition-colors">
              <i className="ri-user-line text-xl"></i>
            </Link>

            {/* Wishlist */}
            <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-pink-600 transition-colors cursor-pointer relative">
              <i className="ri-heart-line text-xl"></i>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Cart */}
            <Link href="/cart" className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-pink-600 transition-colors relative">
              <i className="ri-shopping-bag-line text-xl"></i>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Rechercher des produits..."
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-200 focus:outline-none focus:border-pink-500 text-sm"
              autoFocus
            />
            <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/extensions-cils" className="text-gray-700 hover:text-pink-600 transition-colors">
                Extensions Cils
              </Link>
              <Link href="/masques-or" className="text-gray-700 hover:text-pink-600 transition-colors">
                Masques Or
              </Link>
              <Link href="/kits-beaute" className="text-gray-700 hover:text-pink-600 transition-colors">
                Kits Beauté
              </Link>
              <Link href="/accessoires" className="text-gray-700 hover:text-pink-600 transition-colors">
                Accessoires
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition-colors">
                À Propos
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}