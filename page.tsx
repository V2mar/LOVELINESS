'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Nos Collections
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Explorez nos gammes exclusives de produits cosmétiques haut de gamme
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Extensions Cils",
                    description: "Volume et longueur parfaits",
                    image: "https://readdy.ai/api/search-image?query=Beautiful%20woman%20with%20long%20dramatic%20eyelashes%2C%20professional%20makeup%2C%20luxury%20beauty%20photography%2C%20elegant%20model%20with%20perfect%20lashes%2C%20sophisticated%20beauty%20portrait%2C%20high-end%20cosmetic%20advertisement%20style&width=400&height=500&seq=cat1&orientation=portrait",
                    link: "/extensions-cils",
                    color: "from-pink-500 to-rose-500"
                  },
                  {
                    title: "Masques Or",
                    description: "Soin anti-âge premium",
                    image: "https://readdy.ai/api/search-image?query=Luxury%20gold%20face%20mask%20treatment%20on%20elegant%20woman%2C%20spa%20environment%20with%20golden%20particles%2C%20premium%20skincare%20ritual%2C%20sophisticated%20beauty%20photography%2C%20high-end%20wellness%20experience&width=400&height=500&seq=cat2&orientation=portrait",
                    link: "/masques-or",
                    color: "from-yellow-400 to-orange-500"
                  },
                  {
                    title: "Kits Beauté",
                    description: "Collections complètes",
                    image: "https://readdy.ai/api/search-image?query=Luxury%20beauty%20kit%20collection%20with%20multiple%20cosmetic%20products%2C%20elegant%20packaging%2C%20premium%20skincare%20set%20arranged%20beautifully%2C%20sophisticated%20product%20photography%2C%20high-end%20cosmetic%20display&width=400&height=500&seq=cat3&orientation=portrait",
                    link: "/kits-beaute",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "Accessoires",
                    description: "Outils professionnels",
                    image: "https://readdy.ai/api/search-image?query=Professional%20makeup%20brushes%20and%20beauty%20tools%2C%20luxury%20cosmetic%20accessories%20with%20rose%20gold%20handles%2C%20elegant%20product%20photography%2C%20sophisticated%20beauty%20equipment%2C%20premium%20makeup%20tools&width=400&height=500&seq=cat4&orientation=portrait",
                    link: "/accessoires",
                    color: "from-indigo-500 to-purple-500"
                  }
                ].map((category, index) => (
                  <Link key={index} href={category.link} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                    <div className="aspect-[4/5] relative">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                      
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                        <p className="text-white/90 mb-4">{category.description}</p>
                        <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                          <span className="font-medium">Découvrir</span>
                          <i className="ri-arrow-right-line ml-2"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FeaturedProducts />

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "ri-shield-check-line",
                    title: "Qualité Premium",
                    description: "Tous nos produits sont certifiés et testés dermatologiquement pour garantir une qualité exceptionnelle."
                  },
                  {
                    icon: "ri-truck-line",
                    title: "Livraison Gratuite",
                    description: "Profitez de la livraison gratuite pour toute commande supérieure à 50€, partout en France."
                  },
                  {
                    icon: "ri-customer-service-2-line",
                    title: "Support Expert",
                    description: "Notre équipe de conseillères beauté est à votre disposition pour vous accompagner."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full mx-auto mb-6">
                      <i className={`${benefit.icon} text-2xl text-pink-600`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
          <div className="px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Restez au courant de nos nouveautés
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Inscrivez-vous à notre newsletter et recevez 10% de réduction sur votre première commande
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/20"
                />
                <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                  S'abonner
                </button>
              </div>
              
              <p className="text-sm opacity-75 mt-4">
                En vous abonnant, vous acceptez de recevoir nos communications marketing.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}