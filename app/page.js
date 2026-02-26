// app/page.js
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

// Variants de animación
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Componente de servicio
function ServiceItem({ number, title, description }) {
  return (
    <motion.div 
      variants={fadeIn} 
      className="group cursor-default"
    >
      <div className="flex items-baseline gap-4 mb-2">
        <span className="text-primary/40 font-mono text-sm tracking-wider">
          {number.padStart(2, '0')}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors italic">
          {title}
        </h3>
      </div>
      <p className="text-slate-400 leading-relaxed font-light pl-8 border-l border-primary/10 group-hover:border-primary/40 transition-all">
        {description}
      </p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1215]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Home.jpeg" 
            className="w-full h-full object-cover scale-105 animate-subtle-zoom" 
            alt="La Creatisala Studio"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1215] via-[#0a1215]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1215] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="/logoCT.png"
            alt="La Creatisala"
            className="w-48 md:w-80 mb-6 md:mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1]">
              Donde el sonido
              <br />
              <span className="text-primary italic font-normal">
                encuentra su lugar.
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-300 text-lg md:text-xl max-w-xl mt-8 font-light"
            >
              Espacios para ensayar, grabar y crear música con alma. 
              Sin vueltas, solo lo que importa.
            </motion.p>
          </motion.div>
        </div>

      </section>

      {/* Servicios */}
      <section className="py-24 md:py-32 bg-[#0a1215]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          >
            <div>
              <motion.span 
                variants={fadeIn}
                className="text-accent uppercase tracking-[0.3em] text-sm font-bold block mb-4"
              >
                · Lo que ofrecemos
              </motion.span>
              
              <motion.h2 
                variants={fadeIn}
                className="text-white"
              >
                Espacios y servicios <br />
                <span className="text-primary italic">para tu música</span>
              </motion.h2>

              <div className="space-y-12 mt-12">
                <ServiceItem
                  number="1"
                  title="Salas de Ensayo"
                  description="Un espacio pensado para que ensayes cómodo, disfrutes tu música y avances en tu proyecto musical."
                />
                <ServiceItem
                  number="2"
                  title="Estudio de Grabación"
                  description="Grabación, mezcla y masterización con equipamiento profesional y acompañamiento cercano durante todo el proceso."
                />
              </div>
            </div>

            <div className="lg:mt-24 space-y-12">
              <ServiceItem
                number="3"
                title="Producción Musical"
                description="Le damos forma a tus ideas y te guiamos en el proceso, desde los primeros pasos hasta el resultado final."
              />
              <ServiceItem
                number="4"
                title="Clases de Música"
                description="Clases de guitarra, bajo, batería, piano, canto y más, con profesores dedicados y planes adaptados a tus objetivos."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 italic">
              ¿Listo para darle vida a tu música?
            </h2>
            
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg font-light leading-relaxed">
              Hablemos de tu próximo proyecto. Sin presiones, sin vueltas, solo música.
            </p>
            
            <Link
              href="/contacto"
              className="inline-block bg-primary hover:bg-primary/80 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold tracking-wide shadow-lg hover:shadow-primary/20 hover:scale-105"
            >
              Comienza tu proyecto
            </Link>
          </motion.div>
        </div>
      </section>

      
    </main>
  );
}