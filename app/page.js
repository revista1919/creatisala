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
      {/* Hero Section */}
      <motion.section
        className="relative h-screen bg-[url('/creatisala/Home.jpeg')] bg-cover bg-center overflow-hidden"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <img 
          src="/creatisala/logoCT.png" 
          alt="La Creatisala Logo" 
          className="absolute left-4 md:left-10 top-1/4 w-40 md:w-64 opacity-90"
        />
      </motion.section>

      {/* Services Overview */}
      <div className="container mx-auto px-4">
  <motion.section
    variants={fadeInUp}
    initial="initial"
    animate="animate"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
      Lo que Ofrecemos
    </h2>

    <div className="grid md:grid-cols-4 gap-8 md:gap-10">
      {/* Card 1 */}
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

      {/* Card 2 */}
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

      {/* Card 3 */}
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

      {/* Card 4 – NUEVA */}
      <motion.div
        className="bg-base-100 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">Clases de Música</h3>
        <p className="text-base-content opacity-80">
          Aprende guitarra, bajo, batería, piano, canto y más, con profesores expertos y planes personalizados.
        </p>
      </motion.div>
    </div>
  </motion.section>
</div>

      {/* Call to Action */}
      <div className="container mx-auto px-4">
        <motion.section
          className="bg-primary text-center py-16 md:py-20 rounded-lg"
          variants={subtleReveal}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Listo para darle vida a tu música?
          </h2>

          <p className="text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto mb-8 opacity-90 text-white">
            Ponte en contacto con nosotros hoy mismo para reservar una sala o para hablar sobre tu próximo proyecto.
          </p>

          <Link
            href="/contacto"
            className="bg-accent text-primary px-8 md:px-10 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-accent-dark transition-all duration-300 shadow-lg"
          >
            Contáctanos
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
