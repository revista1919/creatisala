"use client";
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <section className="bg-[#0f171a] min-h-screen py-24 px-6 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl text-center">
        
        {/* Elemento Decorativo: El Vinilo/CD Girando */}
        <motion.div 
          className="mb-12 relative inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-40 h-40 md:w-56 md:h-56 border-2 border-primary/20 rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Círculos concéntricos que simulan un surco de disco */}
            <div className="absolute inset-2 border border-primary/10 rounded-full"></div>
            <div className="absolute inset-6 border border-primary/10 rounded-full"></div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-full h-full flex items-center justify-center"
            >
              <span className="text-primary text-4xl font-playfair italic font-black">C</span>
            </motion.div>
          </div>
          
          {/* Badge de "Próximamente" */}
          <motion.span 
            className="absolute -top-4 -right-4 bg-primary text-[#f8f5f0] text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Coming Soon
          </motion.span>
        </motion.div>

        {/* Texto Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-primary uppercase tracking-[0.5em] text-xs font-black mb-6">Bitácora Creativa</h2>
          <h1 className="text-5xl md:text-8xl font-playfair font-bold text-[#f8f5f0] italic leading-tight">
            Nuevas voces <br/>se están afinando<span className="text-primary not-italic">.</span>
          </h1>
          
          <p className="text-slate-400 mt-8 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Estamos preparando nuestra sección de noticias, tips de producción y eventos de la comunidad. Pronto, este espacio será el pulso de <span className="text-[#f8f5f0] italic">La Creatisala</span>.
          </p>
        </motion.div>

        {/* El "Faro" de Acción Sutil */}
        <motion.div 
          className="mt-16 inline-flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="h-20 w-[1px] bg-gradient-to-b from-primary to-transparent mb-6"></div>
          <p className="text-primary font-mono text-[10px] uppercase tracking-[0.3em]">
            ¿Quieres ser el primero en saberlo?
          </p>
          <a 
            href="/contacto" 
            className="mt-4 text-[#f8f5f0] border-b-2 border-primary/30 hover:border-primary transition-all pb-1 font-bold text-sm tracking-widest uppercase"
          >
            Escríbenos para unirte a la red
          </a>
        </motion.div>

      </div>
    </section>
  );
}