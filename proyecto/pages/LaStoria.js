import React from 'react';

export default function LaStoria() {
  return (
    <div className="min-h-screen bg-white">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">LA STORIA</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            La storia di Karoma inizia con una passione: quella per il caffè autentico, 
            quello che racconta storie di terre lontane e di tradizioni antiche.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">L'inizio</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Fondata a Napoli, città dove il caffè non è solo una bevanda ma un rito quotidiano, 
            Karoma nasce dal desiderio di portare l'eccellenza napoletana in tutto il mondo. 
            Ogni tazza che serviamo è il risultato di anni di esperienza, ricerca e dedizione.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">La nostra filosofia</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Crediamo che un grande caffè inizi dalla selezione delle migliori materie prime. 
            Lavoriamo direttamente con i produttori, visitando le piantagioni e costruendo 
            relazioni basate sulla fiducia e sul rispetto reciproco.
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-12">
            <p className="text-lg text-gray-900 italic">
              "Il caffè non è solo una bevanda, è un'esperienza che unisce persone, 
              culture e momenti indimenticabili."
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Oggi</h2>
          <p className="text-gray-700 leading-relaxed">
            Oggi Karoma è sinonimo di qualità e innovazione. Continuiamo a evolverci, 
            sperimentando nuove miscele e tecnologie, ma sempre con un occhio alla tradizione 
            che ci ha resi quello che siamo.
          </p>
        </div>
      </div>
    </div>
  );
}