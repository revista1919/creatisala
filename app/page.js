"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeInDown = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const subtleReveal = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, ease: 'easeInOut' },
};

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section with background image and fused transparent logo */}
      <motion.section
        className="relative h-[80vh] bg-[url('/Home.jpeg')] bg-cover bg-center flex items-center justify-center overflow-hidden"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          {/* Fused transparent logo in main screen */}
          <img 
            src="/logoCT.png" 
            alt="La Creati Sala Logo" 
            className="mx-auto mb-6 w-48 md:w-64 opacity-90"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#e6e1d8] drop-shadow-md tracking-normal">
            Tu Espacio para Crear Música
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#e6e1d8] opacity-90 mb-8">
            En Creatisala, te ofrecemos un entorno profesional y acogedor con la mejor tecnología para que tu música alcance su máximo potencial.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/servicios" className="bg-accent text-primary px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-accent-dark transition-all duration-300 shadow-md">
              Descubre Nuestros Servicios
            </Link>
            <Link href="/contacto" className="bg-[#e6e1d8] text-primary px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md">
              Reserva tu Sala
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Lo que Ofrecemos</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {/* Service Card 1 */}
          <motion.div
            className="bg-base-100 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">Salas de Ensayo</h3>
            <p className="text-base-content opacity-80">
              Espacios acústicamente tratados y equipados para que tu banda suene mejor que nunca.
            </p>
          </motion.div>
          {/* Service Card 2 */}
          <motion.div
            className="bg-base-100 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">Estudio de Grabación</h3>
            <p className="text-base-content opacity-80">
              Grabación, mezcla y masterización con equipo de alta gama y la asistencia de nuestros ingenieros.
            </p>
          </motion.div>
          {/* Service Card 3 */}
          <motion.div
            className="bg-base-100 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            variants={fadeInRight}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">Producción Musical</h3>
            <p className="text-base-content opacity-80">
              Te ayudamos a dar forma a tus ideas, desde la composición inicial hasta el producto final.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-gradient-to-r from-primary to-secondary text-[#e6e1d8] text-center py-16 md:py-20 rounded-lg"
        variants={subtleReveal}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para darle vida a tu música?</h2>
        <p className="text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto mb-8 opacity-90">
          Ponte en contacto con nosotros hoy mismo para reservar una sala o para hablar sobre tu próximo proyecto.
        </p>
        <Link href="/contacto" className="bg-accent text-primary px-8 md:px-10 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-accent-dark transition-all duration-300 shadow-lg">
          Contáctanos
        </Link>
      </motion.section>
    </div>
  );
}