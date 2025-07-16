
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Eyes on Me - Kit Premium',
      price: 89.99,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Professional%20dramatic%20eyelash%20extension%20kit%20with%20long%20black%20lashes%2C%20luxury%20rose%20gold%20packaging%2C%20beauty%20tools%20and%20premium%20adhesive%2C%20elegant%20product%20photography%20on%20marble%20background&width=300&height=300&seq=cart-1&orientation=squarish',
      variant: 'Kit Standard'
    },
    {
      id: 2,
      name: 'Colle Premium Pro',
      price: 24.99,
      quantity: 2,
      image: 'https://readdy.ai/api/search-image?query=Professional%20eyelash%20adhesive%20glue%20bottle%20with%20precision%20applicator%2C%20black%20and%20silver%20packaging%2C%20beauty%20product%20photography%20on%20clean%20white%20background&width=300&height=300&seq=cart-2&orientation=squarish',
      variant: null
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const applyPromoCode = () => {
    if (promoCode === 'WELCOME10') {
      setAppliedPromo({ code: 'WELCOME10', discount: 10 });
    } else {
      alert('Code promo invalide');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? (subtotal * appliedPromo.discount / 100) : 0;
  const shipping = subtotal > 50 ? 0 : 4.99;
  const total = subtotal - discount + shipping;

  return (
    <div>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-black">Accueil</Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <span className="text-black">Panier</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-6">
              <i className="ri-shopping-cart-line text-4xl text-gray-400"></i>
            </div>
            <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
            <p className="text-gray-600 mb-8">Découvrez nos produits et ajoutez-les à votre panier</p>
            <Link href="/products" className="btn-primary">
              Découvrir nos produits
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold mb-6">Votre panier ({cartItems.length} articles)</h1>
              
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover object-top rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        {item.variant && (
                          <p className="text-gray-600 text-sm mb-2">{item.variant}</p>
                        )}
                        <p className="text-lg font-bold">{item.price}€</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          <i className="ri-subtract-line"></i>
                        </button>
                        <span className="text-lg font-medium px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                      
                      <button
                        onClick={() => updateQuantity(item.id, 0)}
                        className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Récapitulatif</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(2)}€</span>
                  </div>
                  
                  {appliedPromo && (
                    <div className="flex items-center justify-between text-green-600">
                      <span>Remise ({appliedPromo.code})</span>
                      <span>-{discount.toFixed(2)}€</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span>Livraison</span>
                    <span>{shipping === 0 ? 'Gratuite' : `${shipping}€`}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{total.toFixed(2)}€</span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Code promo"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 input-field"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                    >
                      Appliquer
                    </button>
                  </div>
                </div>

                <Link href="/checkout" className="w-full btn-primary text-center block">
                  Passer commande
                </Link>
                
                <div className="mt-4 text-center">
                  <Link href="/products" className="text-sm text-gray-600 hover:text-black">
                    Continuer mes achats
                  </Link>
                </div>

                {/* Free Shipping Notice */}
                {shipping > 0 && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center text-blue-700">
                      <i className="ri-truck-line mr-2"></i>
                      <span className="text-sm">
                        Ajoutez {(50 - subtotal).toFixed(2)}€ pour la livraison gratuite
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
