
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Luxury%20beauty%20cosmetics%20studio%20with%20elegant%20makeup%20brushes%2C%20high-end%20skincare%20products%2C%20and%20professional%20lash%20extension%20tools%20on%20marble%20surface%2C%20soft%20natural%20lighting%2C%20minimal%20modern%20aesthetic%2C%20pink%20and%20white%20color%20palette%2C%20professional%20photography%20style&width=1920&height=1080&seq=hero-main&orientation=landscape"
            alt="Hero Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="w-full max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Révélez la beauté de vos cils
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Découvrez nos kits d'extension de cils professionnels "Eyes on Me" et "First Meet" pour un regard irrésistible
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-center">
                Découvrir nos produits
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos Kits Signature</h2>
            <p className="text-xl text-gray-600">Deux collections uniques pour sublimer votre regard</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Eyes on Me Kit */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-pink-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20eyelash%20extension%20kit%20with%20dramatic%20long%20black%20lashes%2C%20luxury%20packaging%20in%20rose%20gold%20and%20pink%20colors%2C%20beauty%20tools%20and%20adhesive%2C%20elegant%20product%20photography%20on%20marble%20background%2C%20high-end%20cosmetic%20styling&width=600&height=400&seq=eyes-on-me&orientation=landscape"
                  alt="Eyes on Me Kit"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Eyes on Me</h3>
                <p className="text-gray-600 mb-6">Kit d'extension de cils pour un regard dramatique et captivant. Parfait pour les occasions spéciales.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">89,99 €</span>
                  <Link href="/products/eyes-on-me" className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors whitespace-nowrap">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>

            {/* First Meet Kit */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <img 
                  src="https://readdy.ai/api/search-image?query=Natural%20eyelash%20extension%20kit%20with%20subtle%20volume%20lashes%2C%20elegant%20packaging%20in%20purple%20and%20silver%20colors%2C%20professional%20beauty%20tools%2C%20soft%20natural%20lighting%2C%20luxury%20cosmetic%20product%20photography%20on%20white%20marble%20surface&width=600&height=400&seq=first-meet&orientation=landscape"
                  alt="First Meet Kit"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">First Meet</h3>
                <p className="text-gray-600 mb-6">Extension de cils naturelle pour un look quotidien sophistiqué et élégant.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">79,99 €</span>
                  <Link href="/products/first-meet" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pourquoi choisir LashPro ?</h2>
            <p className="text-xl text-gray-600">L'excellence dans chaque détail</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full mx-auto mb-4">
                <i className="ri-star-fill text-2xl text-pink-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Qualité Premium</h3>
              <p className="text-gray-600">Matériaux de haute qualité pour des résultats professionnels durables</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-fill text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Sécurité Testée</h3>
              <p className="text-gray-600">Produits testés dermatologiquement et approuvés par des professionnels</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-2-fill text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Support Expert</h3>
              <p className="text-gray-600">Accompagnement personnalisé par nos experts beauté</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Restez au courant des tendances</h2>
          <p className="text-xl mb-8 opacity-90">Recevez nos conseils beauté et nos offres exclusives</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="flex-1 px-6 py-4 text-black rounded-l-full focus:outline-none text-lg"
            />
            <button className="bg-black text-white px-8 py-4 rounded-r-full hover:bg-gray-800 transition-colors whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
