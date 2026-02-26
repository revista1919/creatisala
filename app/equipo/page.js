"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const equipo = [
  {
    name: 'Ari Montiel',
    role: 'Fundador & Director',
    bio: 'Fundador de Creatisala. Vocal coach, productor y multiinstrumentista, con formación profesional en piano y canto, especializado en el modelo Estill Voice. Desarrolla además una carrera artística como cantautor, con un EP publicado en 2025 que lo ha llevado a presentarse en diversos escenarios de la escena nacional.',
    img: '/ari.jpg',
    main: true // Para darle un diseño destacado
  },
  {
    name: 'Yan Lazcano',
    role: 'Co-Fundador',
    bio: 'Pianista y Productor Musical con visión técnica y artística.',
    img: '/yan.jpg',
  },
  {
    name: 'Brian Ovalle',
    role: 'Co-Fundador',
    bio: 'Baterista. El pulso y la energía detrás de los procesos rítmicos.',
    img: '/brian.jpg',
  },
  {
    name: 'Anggelo Álvarez',
    role: 'Staff Creatisala',
    bio: 'Nueva incorporación al equipo técnico y creativo.',
    img: '/anggelo.jpg',
  },
];

export default function Equipo() {
  return (
    <section className="bg-[#0f171a] py-24 px-6 min-h-screen">
      <div className="container mx-auto">
        {/* Título con Alma */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-primary font-black mb-4">Mentes Creativas</h2>
          <h3 className="text-5xl md:text-7xl font-playfair font-bold text-[#f8f5f0] italic leading-tight">
            El alma detrás de <br/> cada sesión<span className="text-primary not-italic">.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Ari Montiel - Destacado */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-8 grid md:grid-cols-2 bg-[#f8f5f0] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-[400px] md:h-full min-h-[400px]">
              <Image 
                src={equipo[0].img} 
                alt={equipo[0].name} 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-primary/50 font-mono text-xs uppercase tracking-widest mb-2">{equipo[0].role}</span>
              <h4 className="text-4xl font-playfair font-black text-primary mb-6">{equipo[0].name}</h4>
              <p className="text-primary/80 leading-relaxed font-light italic">
                "{equipo[0].bio}"
              </p>
            </div>
          </motion.div>

          {/* Resto del equipo */}
          <div className="md:col-span-12 lg:col-span-4 grid grid-cols-1 gap-8">
            {equipo.slice(1).map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center space-x-6 border-b border-white/10 pb-8 hover:border-primary transition-colors"
              >
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary">
                  <Image src={member.img} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-bold text-[#f8f5f0]">{member.name}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{member.role}</p>
                  <p className="text-slate-500 text-sm font-light leading-snug">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}