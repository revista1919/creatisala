"use client";
import { motion } from 'framer-motion';

const services = [
  { 
    title: 'Clases de Piano, Canto, Guitarra y Batería', 
    desc: 'Aprende tu instrumento favorito junto a nuestro equipo.',
    category: 'Formación'
  },
  { 
    title: 'Producciones Musicales', 
    desc: 'Lleva tu música a lo que has soñado.',
    category: 'Creación' 
  },
  { 
    title: 'Composición Musical', 
    desc: 'Da forma a tus ideas musicales.',
    category: 'Creación'
  },
  { 
    title: 'Sala de Ensayo', 
    desc: 'Ensaya con comodidad y foco.',
    category: 'Espacios'
  },
  { 
    title: 'Estudio de Grabación', 
    desc: 'Graba con calidad profesional.',
    category: 'Espacios'
  },
];

const containerVariants = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Servicios() {
  return (
    <section className="min-h-screen bg-[#0f171a] py-20 px-6">
      <div className="container mx-auto">
        {/* Cabecera Estilo Editorial */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary uppercase tracking-[0.4em] text-xs font-black"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-playfair font-bold text-[#f8f5f0] mt-4 italic leading-tight"
          >
            Servicios<span className="text-primary not-italic">.</span>
          </motion.h2>
        </div>

        {/* Lista de Servicios */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-px bg-primary/10" // Líneas divisorias sutiles
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-[#0f171a] py-12 md:py-16 border-b border-primary/20 flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 hover:bg-[#155665]/5"
            >
              <div className="max-w-2xl">
                <span className="text-primary/40 font-mono text-xs mb-4 block tracking-widest uppercase">
                  {service.category} — 0{index + 1}
                </span>
                <h3 className="text-3xl md:text-5xl font-playfair font-bold text-[#f8f5f0] group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 mt-4 text-lg font-light max-w-md leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Elemento Decorativo: Flecha o Número */}
              <div className="hidden md:block">
                <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <svg 
                    className="w-6 h-6 text-primary group-hover:text-[#f8f5f0] transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pie de página de la sección */}
        <div className="mt-20 text-center md:text-left">
          <p className="text-primary/60 font-medium tracking-widest text-sm uppercase">
            ¿Buscas algo específico? <br className="md:hidden"/>
            <span className="text-[#f8f5f0] border-b border-primary cursor-pointer hover:text-primary transition-colors">Escríbenos directamente</span>
          </p>
        </div>
      </div>
    </section>
  );
}