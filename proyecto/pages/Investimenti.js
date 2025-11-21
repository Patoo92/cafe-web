import React from 'react';
import { TrendingUp, Building2, Users, Zap } from 'lucide-react';

export default function Investimenti() {
  return (
    <div className="min-h-screen bg-white">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">INVESTIMENTI</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Investire nel futuro
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Innovazione, crescita e sviluppo sostenibile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
            <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Crescita continua</h3>
            <p className="text-gray-700 leading-relaxed">
              Negli ultimi 5 anni abbiamo investito oltre 2 milioni di euro in nuove 
              tecnologie, espansione degli impianti e formazione del personale.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <Building2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuovi impianti</h3>
            <p className="text-gray-700 leading-relaxed">
              Abbiamo ampliato la nostra capacità produttiva del 40%, con nuovi macchinari 
              all'avanguardia per la tostatura e il confezionamento.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <Zap className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Energia sostenibile</h3>
            <p className="text-gray-700 leading-relaxed">
              Investimento di 500.000€ in impianto fotovoltaico da 100 kW, 
              che copre il 100% del nostro fabbisogno energetico.
            </p>
          </div>
