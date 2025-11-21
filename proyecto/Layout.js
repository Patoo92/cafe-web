import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { ShoppingCart, Menu, X, ChevronDown, Facebook, Instagram } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function Layout({ children, currentPageName }) {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);

    const handleCartUpdate = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      const updatedCount = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(updatedCount);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const navItems = [
    { name: 'HOME', path: 'Home' },
    {
      name: 'COMPANY PROFILE',
      dropdown: [
        { name: 'La Storia', path: 'LaStoria' },
        { name: 'La Produzione', path: 'LaProduzione' },
        { name: "L'impegno per l'ambiente", path: 'Ambiente' },
        { name: 'Investimenti', path: 'Investimenti' }
      ]
    },
    {
      name: 'SHOP',
      dropdown: [
        { name: 'Main Shop', path: 'Shop' },
        { name: 'Merchandising', path: 'Merchandising' }
      ]
    },
    { name: 'STAND', path: 'Stand' },
    { name: 'PRIVATE LABEL', path: 'PrivateLabel' },
    { name: 'CONTATTI', path: 'Contatti' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex-shrink-0">
              <div className="text-2xl font-bold text-red-600">
                CAFFÈ<br/>
                <span className="text-black text-3xl">karoma®</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <div>
                      <button className="flex items-center space-x-1 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={createPageUrl(subItem.path)}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={createPageUrl(item.path)}
                      className="text-sm font-medium text-gray-800 hover:text-red-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side: Cart & Social */}
            <div className="flex items-center space-x-4">
              <Link to="https://facebook.com" target="_blank" className="hidden lg:block text-gray-600 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="https://instagram.com" target="_blank" className="hidden lg:block text-gray-600 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to={createPageUrl('Cart')} className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-red-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-gray-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.name === 'COMPANY PROFILE') setCompanyDropdownOpen(!companyDropdownOpen);
                          if (item.name === 'SHOP') setShopDropdownOpen(!shopDropdownOpen);
                        }}
                        className="flex items-center justify-between w-full text-sm font-medium text-gray-800 py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          (item.name === 'COMPANY PROFILE' && companyDropdownOpen) ||
                          (item.name === 'SHOP' && shopDropdownOpen) ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {((item.name === 'COMPANY PROFILE' && companyDropdownOpen) ||
                        (item.name === 'SHOP' && shopDropdownOpen)) && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={createPageUrl(subItem.path)}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-gray-600 hover:text-red-600 py-1"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={createPageUrl(item.path)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-medium text-gray-800 hover:text-red-600 py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <Link to="https://facebook.com" target="_blank" className="text-gray-600 hover:text-red-600">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="https://instagram.com" target="_blank" className="text-gray-600 hover:text-red-600">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">CAFFÈ karoma®</h3>
              <p className="text-gray-400 text-sm">
                Tradizione napoletana e innovazione per un espresso inconfondibile.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to={createPageUrl('LaStoria')} className="text-gray-400 hover:text-white">La Storia</Link></li>
                <li><Link to={createPageUrl('LaProduzione')} className="text-gray-400 hover:text-white">La Produzione</Link></li>
                <li><Link to={createPageUrl('Ambiente')} className="text-gray-400 hover:text-white">Ambiente</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to={createPageUrl('Shop')} className="text-gray-400 hover:text-white">Main Shop</Link></li>
                <li><Link to={createPageUrl('Merchandising')} className="text-gray-400 hover:text-white">Merchandising</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contatti</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@karoma.it</li>
                <li>Tel: +39 000 000 0000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Caffè Karoma. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}