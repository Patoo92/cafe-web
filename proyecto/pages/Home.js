import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProductsCarousel from '@/components/home/FeaturedProductsCarousel';
import CategoryCard from '@/components/shop/CategoryCard';
import ProductCard from '@/components/shop/ProductCard';
import { Leaf } from 'lucide-react';

export default function Home() {
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: () => base44.entities.Category.list('order', 100),
  });

  const { data: featuredProducts = [] } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: () => base44.entities.Product.filter({ featured: true }, '-created_date', 10),
  });

  const { data: recentProducts = [] } = useQuery({
    queryKey: ['recentProducts'],
    queryFn: () => base44.entities.Product.list('-created_date', 8),
  });

  const mainCategories = categories.filter(cat => !cat.parent_category).slice(0, 4);

  return (
    <div>
      <HeroSection />

      {/* Environmental Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  100 kW di sole alimentano ogni tazza di Karoma.
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Abbiamo installato un impianto fotovoltaico da 100 kW sul tetto della nostra torrefazione: 
                l'energia solare alimenta l'intero ciclo produttivo, riduce le emissioni di CO₂ e rende 
                ogni tazza di Karoma ancora più sostenibile.
              </p>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Solar panels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      {featuredProducts.length > 0 && (
        <FeaturedProductsCarousel products={featuredProducts} />
      )}

      {/* Shop Categories Grid */}
      {mainCategories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">SHOP</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {mainCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Products */}
      {recentProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">ULTIMI PRODOTTI</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}