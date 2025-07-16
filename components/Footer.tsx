
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4">Restez informée de nos dernières nouveautés</h3>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="flex-1 px-4 py-3 text-black rounded-l-full focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-3 rounded-r-full hover:bg-gray-100 transition-colors whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="logo text-xl font-bold mb-4">LashPro</h4>
            <p className="text-gray-400 mb-4">
              Votre destination beauté pour des cils parfaits. Découvrez nos kits d'extension de cils professionnels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Service Client</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/help" className="hover:text-white">Centre d'aide</Link></li>
              <li><Link href="/contact" className="hover:text-white">Nous contacter</Link></li>
              <li><Link href="/shipping" className="hover:text-white">Livraison</Link></li>
              <li><Link href="/returns" className="hover:text-white">Retours</Link></li>
              <li><Link href="/size-guide" className="hover:text-white">Guide des tailles</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">Notre histoire</Link></li>
              <li><Link href="/careers" className="hover:text-white">Carrières</Link></li>
              <li><Link href="/press" className="hover:text-white">Presse</Link></li>
              <li><Link href="/sustainability" className="hover:text-white">Développement durable</Link></li>
              <li><Link href="/affiliates" className="hover:text-white">Programme d'affiliation</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-white">Politique de confidentialité</Link></li>
              <li><Link href="/terms" className="hover:text-white">Conditions d'utilisation</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Politique des cookies</Link></li>
              <li><Link href="/accessibility" className="hover:text-white">Accessibilité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LashPro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
