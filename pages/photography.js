import { useState } from 'react';

const photos = [
  {
    src: "/images/photo1.jpeg",  // Changed from .jpg to .jpeg
    alt: "Mountain Sunset",
    description: "A breathtaking sunset over the mountains, captured during a summer hike."
  },
  {
    src: "/images/photo2.jpeg",
    alt: "City Night Lights",
    description: "A long-exposure shot of city lights reflecting on a rainy street."
  },
  {
    src: "/images/photo3.jpeg",
    alt: "Forest Path",
    description: "A peaceful pathway through an autumn forest, covered in golden leaves."
  }
];

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Photography Portfolio</h1>
      <p className="mb-4">
        A glimpse into my passion for photography. Click on an image to view it in fullscreen mode.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="cursor-pointer" onClick={() => setSelectedPhoto(photo)}>
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-64 object-cover rounded bg-gray-200"
              onError={(e) => { e.target.src = "/images/placeholder.jpeg"; }}  // Fallback image
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <button 
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-700 hover:bg-gray-900 px-3 py-1 rounded"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt} 
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-2">{selectedPhoto.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
