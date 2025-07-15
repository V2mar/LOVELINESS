'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
              BeautyLux
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Découvrez notre collection exclusive de cosmétiques haut de gamme pour révéler votre beauté naturelle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition-colors cursor-pointer">
                <i className="ri-youtube-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Produits</h4>
            <ul className="space-y-3">
              <li><Link href="/extensions-cils" className="text-gray-400 hover:text-white transition-colors">Extensions Cils</Link></li>
              <li><Link href="/masques-or" className="text-gray-400 hover:text-white transition-colors">Masques Or</Link></li>
              <li><Link href="/kits-beaute" className="text-gray-400 hover:text-white transition-colors">Kits Beauté</Link></li>
              <li><Link href="/accessoires" className="text-gray-400 hover:text-white transition-colors">Accessoires</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/mon-compte" className="text-gray-400 hover:text-white transition-colors">Mon Compte</Link></li>
              <li><Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">Mentions Légales</Link></li>
              <li><Link href="/cgv" className="text-gray-400 hover:text-white transition-colors">CGV</Link></li>
              <li><Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-2">Restez informée</h4>
              <p className="text-gray-400">Recevez nos dernières nouveautés et offres exclusives</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-l-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-pink-500 text-sm"
              />
              <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-r-full transition-colors cursor-pointer whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 BeautyLux. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line text-green-500"></i>
              <span className="text-sm text-gray-400">Paiement sécurisé</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-truck-line text-blue-500"></i>
              <span className="text-sm text-gray-400">Livraison gratuite</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}