'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Íconos SVG Minimalistas
const ZoomIn = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// --- IMPORTACIÓN DE IMÁGENES (Mantengo tu lógica) ---
const importAllImages = () => {
  try {
    const context = require.context('../../public/fotos', false, /\.(png|jpe?g|webp|gif|avif)$/);
    return context.keys().map((key) => {
      const module = context(key);
      const src = module.default.src;
      const fileName = src.split('/').pop().split('.').shift().replace(/[-_]/g, ' ');
      return { src, fileName, blurDataURL: module.default.blurDataURL };
    });
  } catch (e) { return []; }
};

const allPhotos = importAllImages();

export default function Galeria() {
  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sentinelRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => { setDisplayedPhotos(allPhotos.slice(0, 12)); }, []);

  useEffect(() => {
    if (displayedPhotos.length >= allPhotos.length) return;
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setDisplayedPhotos((prev) => [...prev, ...allPhotos.slice(prev.length, prev.length + 12)]);
      }
    }, { rootMargin: '300px' });
    if (sentinelRef.current) observerRef.current.observe(sentinelRef.current);
    return () => observerRef.current?.disconnect();
  }, [displayedPhotos]);

  const navigate = (dir) => {
    if (selectedIndex === null) return;
    setSelectedIndex((i) => dir === 'next' ? (i + 1) % allPhotos.length : (i - 1 + allPhotos.length) % allPhotos.length);
  };

  // Lightbox Handlers
  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > 50) navigate('next');
    if (dist < -50) navigate('prev');
    setTouchStart(null); setTouchEnd(null);
  };

  return (
    <section className="bg-[#0f171a] min-h-screen py-20 px-6">
      <div className="container mx-auto">
        
        {/* Cabecera Estilo Galería de Arte */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-black">Visual Archive</span>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-[#f8f5f0] mt-4 italic">
            Sesiones & Espacios<span className="text-primary not-italic">.</span>
          </h2>
        </div>

        {/* GRID DE FOTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedPhotos.map((foto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
            >
              <button
                onClick={() => setSelectedIndex(index)}
                className="group relative w-full aspect-[4/5] overflow-hidden bg-[#1a2428] rounded-sm"
              >
                <Image
                  src={foto.src}
                  alt={foto.fileName}
                  fill
                  className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={foto.blurDataURL}
                />
                {/* Overlay Minimalista */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-[#f8f5f0]" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Sentinel para Infinite Scroll */}
        <div ref={sentinelRef} className="h-20 flex items-center justify-center mt-10">
          {displayedPhotos.length < allPhotos.length && (
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
      </div>

      {/* LIGHTBOX (Faro de Luz) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f5f0]/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button className="absolute top-8 right-8 text-primary hover:rotate-90 transition-transform duration-300">
              <X className="w-10 h-10" />
            </button>

            <div className="flex items-center justify-between w-full px-4 md:px-10" onClick={e => e.stopPropagation()}>
              {/* Botones Navegación Navegación */}
              <button onClick={() => navigate('prev')} className="hidden md:block text-primary/30 hover:text-primary transition-colors text-4xl font-light font-playfair p-4">PREV</button>

              <motion.div 
                className="relative max-w-4xl w-full h-[70vh] md:h-[80vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <Image
                  src={allPhotos[selectedIndex].src}
                  alt="Full size"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute -bottom-12 left-0 w-full text-center">
                   <p className="text-primary font-mono text-xs uppercase tracking-[0.3em]">
                     {selectedIndex + 1} / {allPhotos.length} — {allPhotos[selectedIndex].fileName}
                   </p>
                </div>
              </motion.div>

              <button onClick={() => navigate('next')} className="hidden md:block text-primary/30 hover:text-primary transition-colors text-4xl font-light font-playfair p-4">NEXT</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}