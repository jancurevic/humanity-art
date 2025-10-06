import { useState, useEffect } from "react";
import { images } from "./images";

export default function Voting() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleKeyDown = (e) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeImage();
    }
  };


  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground text-center">
          Gallery
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Click on any image to view it in full size.
        </p>
        
        {/* Grid layout - 4 images per row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className="aspect-square overflow-hidden cursor-pointer bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => openImage(index)}
            >
              <img 
                src={img.url} 
                alt={`Photo ${img.id}`} 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-size image modal with navigation */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-2 md:p-4"
          onClick={closeImage}
        >
          {/* Close button */}
          <button
            onClick={closeImage}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-2xl bg-black bg-opacity-70 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-opacity-90 transition-all z-10 touch-manipulation"
          >
            ×
          </button>

          {/* Previous arrow - fixed to screen edge */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-opacity-90 transition-all z-10 touch-manipulation"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow - fixed to screen edge */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-opacity-90 transition-all z-10 touch-manipulation"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-w-full max-h-full flex items-center justify-center">
            {/* Main image */}
            <img
              src={images[selectedImageIndex].url}
              alt={`Photo ${images[selectedImageIndex].id} - Full Size`}
              className="max-w-full max-h-full object-contain select-none"
              draggable={false}
            />

            {/* Image counter */}
            <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg">
              <p className="text-xs md:text-sm">
                {selectedImageIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
