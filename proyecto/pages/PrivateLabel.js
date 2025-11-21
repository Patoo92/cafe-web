import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function PrivateLabel() {
  const benefits = [
    'Personalizzazione completa del packaging',
    'Ricette esclusive sviluppate per te',
    'Quantitativi minimi flessibili',
    'Supporto marketing e comunicazione',
    'Consegne rapide in tutta Italia',
    'Certificazioni di qualità incluse'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">PRIVATE LABEL</h1>
            <p className="text-2xl text-white max-w-2xl">
              Crea il tuo brand di caffè con la nostra esperienza
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Il tuo caffè, la nostra qualità
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Offriamo servizi completi di private label per bar, ristoranti, hotel 
              e aziende che vogliono avere il proprio brand di caffè.
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            <Link to={createPageUrl('Contatti')}>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8">
                Richiedi informazioni
              </Button>
            </Link>
          </div>

          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
 