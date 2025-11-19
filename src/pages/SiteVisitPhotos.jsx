import React from 'react';
import { X } from 'lucide-react';

const SiteVisitPhotos = ({ visit, onBack = () => {} }) => {
  if (!visit) return null;

  // Mock photo urls (in a real app these would be real image URLs)
  const photos = Array.from({ length: visit.photoCount }).map((_, i) => `https://picsum.photos/seed/${visit.id}-${i}/800/600`);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Photos • {visit.location}</h3>
          <p className="text-sm text-gray-500">{visit.address} • {visit.date}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="px-3 py-2 bg-gray-100 rounded-md text-sm">Back</button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {photos.map((src, idx) => (
          <div key={idx} className="bg-gray-100 rounded-md overflow-hidden">
            <img src={src} alt={`photo-${idx}`} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteVisitPhotos;
