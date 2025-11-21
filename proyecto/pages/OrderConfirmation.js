import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function OrderConfirmation() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderNumber = urlParams.get('order');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ordine confermato!</h1>
          
          <p className="text-gray-600 mb-6">
            Grazie per il tuo ordine. Riceverai una email di conferma a breve.
          </p>

          {orderNumber && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-1">Numero ordine</p>
              <p className="text-xl font-bold text-gray-900">{orderNumber}</p>
            </div>
          )}

          <div className="space-y-3">
            <Link to={createPageUrl('Shop')} className="block">
              <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
                Continua lo shopping
              </Button>
            </Link>
            <Link to={createPageUrl('Home')} className="block">
              <Button size="lg" variant="outline" className="w-full">
                Torna alla home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}