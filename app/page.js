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
        {/* Usamos font-mono para ese look "cuadradito" y técnico */}
        <span className="text-primary/60 font-mono text-xs tracking-[0.2em] font-bold">
          {number.padStart(2, '0')}
        </span>
        {/* Quitamos italic y usamos font-black para máxima solidez */}
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-slate-400 leading-relaxed font-normal pl-8 border-l-2 border-primary/10 group-hover:border-primary transition-all">
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
            className="w-full h-full object-cover scale-105" 
            alt="La Creatisala Studio"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1215] via-[#0a1215]/90 to-transparent"></div>
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
            className="max-w-4xl"
          >
            {/* Títulos en font-black y tracking-tighter para ese look sólido/cuadrado */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              Donde el sonido
              <br />
              <span className="text-primary">
                crea su lugar.
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-300 text-lg md:text-xl max-w-xl mt-8 font-medium border-l-4 border-primary pl-6"
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
                className="text-primary uppercase tracking-[0.4em] text-xs font-black block mb-4"
              >
                // Lo que ofrecemos
              </motion.span>
              
              <motion.h2 
                variants={fadeIn}
                className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
              >
                Espacios <br />
                <span className="text-primary">profesionales</span>
              </motion.h2>

              <div className="space-y-12 mt-16">
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

            <div className="lg:mt-32 space-y-12">
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
            className="bg-white p-10 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">
              ¿Listo para darle vida a tu música?
            </h2>
            
            <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg font-bold">
              Hablemos de tu próximo proyecto. Sin presiones, sin vueltas, solo música.
            </p>
            
            <Link
              href="/contacto"
              className="inline-block bg-black hover:bg-primary text-white px-12 py-4 transition-all duration-300 font-black uppercase tracking-widest text-sm"
            >
              Comienza tu proyecto
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}