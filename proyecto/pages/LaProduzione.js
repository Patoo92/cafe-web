import React from 'react';
import { Coffee, Leaf, Award, Settings } from 'lucide-react';

export default function LaProduzione() {
  const steps = [
    {
      icon: Leaf,
      title: 'Selezione',
      description: 'Selezioniamo i migliori chicchi di caffè dalle piantagioni di tutto il mondo'
    },
    {
      icon: Settings,
      title: 'Tostatura',
      description: 'Tostiamo con cura ogni lotto per esaltare gli aromi naturali del caffè'
    },
    {
      icon: Coffee,
      title: 'Miscelazione',
      description: 'Creiamo blend unici combinando diverse origini e tostature'
    },
    {
      icon: Award,
      title: 'Qualità',
      description: 'Ogni prodotto è testato e certificato secondo i più alti standard'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">LA PRODUZIONE</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Il nostro processo produttivo
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dalla piantagione alla tazza: un viaggio di qualità e passione
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
 