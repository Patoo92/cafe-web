import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CategoryCard({ category }) {
  return (
    <Link 
      to={createPageUrl(`Shop?category=${category.id}`)}
      className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        {category.image_url ? (
          <img
            src={category.image_url}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            {category.name}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-bold uppercase group-hover:text-red-400 transition-colors">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}