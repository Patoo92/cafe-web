import React from 'react';
import { Leaf, Sun, Recycle, Droplets } from 'lucide-react';

export default function Ambiente() {
  const initiatives = [
    {
      icon: Sun,
      title: 'Energia solare',
      description: '100 kW di pannelli solari alimentano la nostra produzione'
    },
    {
      icon: Recycle,
      title: 'Riciclo',
      description: 'Il 95% dei nostri scarti viene riciclato o riutilizzato'
    },
    {
      icon: Droplets,
      title: 'Gestione acqua',
      description: 'Sistema di recupero e trattamento delle acque'
    },
    {
      icon: Leaf,
      title: 'Packaging eco',
      description: 'Imballaggi 100% biodegradabili e compostabili'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">L'IMPEGNO PER L'AMBIENTE</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Sostenibilità al primo posto
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Il nostro impegno per un futuro più verde e sostenibile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
 