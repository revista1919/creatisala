'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ZoomIn, X } from 'lucide-react';

// Importamos todas las imágenes en build time
const importAllImages = () => {
  const context = require.context('../../public/fotos', false, /\.(png|jpe?g|webp|gif|avif)$/);
  return context.keys().map((key) => {
    const module = context(key);
    const src = module.default.src;

    // Sin non-null assertions
    const fileName = src
      .split('/')
      .pop()
      .split('.')[0]
      .replace(/-/g, ' ')
      .replace(/_/g, ' ');

    return {
      src,
      blurDataURL: module.default.blurDataURL,
      fileName,
    };
  });
};

const allPhotos = importAllImages();

export default function Galeria() {
  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const observerRef = useRef(null);
  const sentinelRef = useRef(null);

  // Cargar las primeras 12
  useEffect(() => {
    setDisplayedPhotos(allPhotos.slice(0, 12));
  }, []);

  // Intersection Observer
  useEffect(() => {
    if (displayedPhotos.length >= allPhotos.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplayedPhotos((prev) => {
            const nextBatch = allPhotos.slice(prev.length, prev.length + 12);
            return [...prev, ...nextBatch];
          });
        }
      },
      { rootMargin: '300px' }
    );

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current);
    }

    return () => observerRef.current && observerRef.current.disconnect();
  }, [displayedPhotos]);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const navigate = (direction) => {
    if (selectedIndex === null) return;
    const newIndex =
      direction === 'next'
        ? (selectedIndex + 1) % allPhotos.length
        : (selectedIndex - 1 + allPhotos.length) % allPhotos.length;

    setSelectedIndex(newIndex);
  };

  // Navegación por teclado
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e) => {
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-black/20 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-cyan-900 tracking-tight">
        Galería
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
        {displayedPhotos.map((foto, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/50"
          >
            <Image
              src={foto.src}
              alt={`Fotografía profesional ${index + 1} - ${foto.fileName}`}
              width={800}
              height={600}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              placeholder="blur"
              blurDataURL={foto.blurDataURL || undefined}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={index < 12 ? 'eager' : 'lazy'}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 pointer-events-none">
              <div className="flex items-center gap-3">
                <ZoomIn className="w-6 h-6 text-white" />
                <p className="text-white text-lg font-medium tracking-wider">
                  {index + 1} / {allPhotos.length}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Sentinel */}
      {displayedPhotos.length < allPhotos.length && (
        <div ref={sentinelRef} className="col-span-full py-12 text-center">
          <div className="inline-flex items-center gap-3 text-purple-400">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            <span className="ml-3 text-lg">Cargando más magia...</span>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-purple-400 transition z-10"
          >
            <X className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate('prev');
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition text-6xl"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate('next');
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition text-6xl"
          >
            ›
          </button>

          <div className="relative max-w-5xl max-h-full p-8">
            <Image
              src={allPhotos[selectedIndex].src}
              alt={allPhotos[selectedIndex].fileName}
              width={1200}
              height={900}
              className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
              priority
            />

            <p className="text-center text-white/80 mt-4 text-lg">
              {selectedIndex + 1} / {allPhotos.length} — {allPhotos[selectedIndex].fileName}
            </p>
          </div>
        </div>
      )}

      {/* Mensaje si no hay fotos */}
      {allPhotos.length === 0 && (
        <p className="text-center text-purple-300 text-xl mt-20">
          La galería está vacía por el momento...
        </p>
      )}
    </section>
  );
}
