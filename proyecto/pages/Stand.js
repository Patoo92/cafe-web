import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Stand() {
  return (
    <div className="min-h-screen bg-white">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">I NOSTRI STAND</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Vieni a trovarci
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Scopri dove puoi gustare il nostro caffè
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img
                  src={`https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80`}
                  alt="Stand"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Stand Karoma #{item}</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 mt-1" />
                    <p>Via Roma 123, Napoli, Italia</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-red-600" />
                    <p>+39 081 123 4567</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-red-600" />
                    <p>stand{item}@karoma.it</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}