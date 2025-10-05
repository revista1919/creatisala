"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dancing_Script } from 'next/font/google';

// Importa la font optimizada
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing-script',
});

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
    <div className={`${dancingScript.variable} space-y-24`}>
      {/* Hero Section */}
      <motion.section
        className="text-center"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-[family-name:var(--font-dancing-script)] drop-shadow-md tracking-normal">
          Tu Espacio para Crear Música
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-base-content opacity-90 mb-8">
          En Creatisala, te ofrecemos un entorno profesional y acogedor con la mejor tecnología para que tu música alcance su máximo potencial.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/servicios" className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-md">
            Descubre Nuestros Servicios
          </Link>
          <Link href="/contacto" className="bg-accent text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-accent-dark transition-all duration-300 shadow-md">
            Reserva tu Sala
          </Link>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-4xl font-display font-bold text-center mb-12">Lo que Ofrecemos</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Service Card 1 */}
          <motion.div
            className="bg-base-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-2xl font-bold font-display mb-3 text-primary">Salas de Ensayo</h3>
            <p className="text-base-content opacity-80">
              Espacios acústicamente tratados y equipados para que tu banda suene mejor que nunca.
            </p>
          </motion.div>
          {/* Service Card 2 */}
          <motion.div
            className="bg-base-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-2xl font-bold font-display mb-3 text-primary">Estudio de Grabación</h3>
            <p className="text-base-content opacity-80">
              Grabación, mezcla y masterización con equipo de alta gama y la asistencia de nuestros ingenieros.
            </p>
          </motion.div>
          {/* Service Card 3 */}
          <motion.div
            className="bg-base-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            variants={fadeInRight}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-2xl font-bold font-display mb-3 text-primary">Producción Musical</h3>
            <p className="text-base-content opacity-80">
              Te ayudamos a dar forma a tus ideas, desde la composición inicial hasta el producto final.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-gradient-to-r from-primary to-secondary text-white text-center py-20 rounded-lg"
        variants={subtleReveal}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-4xl font-display font-bold mb-4">¿Listo para darle vida a tu música?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Ponte en contacto con nosotros hoy mismo para reservar una sala o para hablar sobre tu próximo proyecto.
        </p>
        <Link href="/contacto" className="bg-accent text-primary px-10 py-4 rounded-lg text-xl font-semibold hover:bg-accent-dark transition-all duration-300 shadow-lg">
          Contáctanos
        </Link>
      </motion.section>
    </div>
  );
}