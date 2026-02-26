"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

// Variantes de animación refinadas
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-primary/30">
      
      {/* --- HERO SECTION --- */}
      <motion.section 
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Fondo con Overlay Gradiente para mejorar legibilidad */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-neutral-950 z-10" />
          <img 
            src="/Home.jpeg" 
            alt="Studio Background" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        {/* Logo Posicionado con Estilo */}
        <motion.img
          src="/logoCT.png"
          alt="La Creatisala Logo"
          className="absolute top-10 left-6 md:left-12 w-32 md:w-48 z-20 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        <div className="relative z-20 text-center px-4">
          <motion.h1 
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Donde la <span className="text-primary tracking-normal not-italic">música</span> <br />
            cobra vida.
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light tracking-wide"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Tu sonido merece un espacio a la altura de tu creatividad.
          </motion.p>
        </div>
        
        {/* Indicador de scroll minimalista */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-primary to-transparent opacity-50" />
      </motion.section>

      {/* --- SERVICES OVERVIEW --- */}
      <section className="py-32 container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <h2 className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-4">Servicios</h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-none uppercase">LO QUE OFRECEMOS</h3>
          </div>
          <p className="text-neutral-500 max-w-xs text-sm">
            Equipamiento de alto nivel para artistas que no se conforman con lo ordinario.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Tarjeta de Servicio */}
          {[
            {
              title: "Salas de Ensayo",
              desc: "Un espacio pensado para que ensayes cómodo, disfrutes tu música y avances en tu proyecto musical.",
              num: "01"
            },
            {
              title: "Estudio de Grabación",
              desc: "Grabación, mezcla y masterización con equipamiento profesional y acompañamiento cercano.",
              num: "02"
            },
            {
              title: "Producción Musical",
              desc: "Le damos forma a tus ideas y te guiamos en el proceso, desde los primeros pasos hasta el resultado final.",
              num: "03"
            },
            {
              title: "Clases de Música",
              desc: "Guitarra, bajo, batería, piano, canto y más, con profesores dedicados y planes adaptados a ti.",
              num: "04"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-8 h-[350px] flex flex-col justify-between hover:bg-primary/10 hover:border-primary/50 transition-all duration-500"
            >
              <span className="text-primary/30 font-mono text-sm group-hover:text-primary transition-colors">{service.num}</span>
              <div>
                <h4 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300 italic uppercase">
                  {service.title}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="pb-32 px-6">
        <motion.div 
          className="relative overflow-hidden bg-primary px-8 py-20 rounded-[2rem] text-center text-neutral-950"
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          {/* Elemento decorativo */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
            ¿Listo para darle vida a tu música?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Ponte en contacto con nosotros hoy mismo para reservar una sala o hablar sobre tu próximo proyecto.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-neutral-950 text-white px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-2xl uppercase tracking-widest"
          >
            Contáctanos
          </Link>
        </motion.div>
      </section>
    </div>
  );
}