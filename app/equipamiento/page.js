"use client";
import { motion } from 'framer-motion';

const gear = {
  ensayo: [
    { name: "Shell pack", detail: "Gretsch Catalina Club (Bombo 20x14”, Tom 12x8”, Floor Tom 14x14” Green Sparkle)" },
    { name: "Caja", detail: "Gretsch Energy 14x5,5” Piano Black con parche Evans" },
    { name: "Amplificación Bajo", detail: "Orange Crush Bass 50" },
    { name: "Amplificación Guitarra", detail: "Orange Crush 35RT" },
    { name: "Cuerdas", detail: "Bajo eléctrico Ibanez / Telecaster Jet Guitars / Electroacústica Nativa" },
    { name: "Teclas", detail: "Sintetizador Roland XPS-10" },
    { name: "Platillos", detail: "Set Meinl / Percusión: Bongos Tropicana" },
    { name: "Microfonía", detail: "Shure SM58 / Atriles Pro" },
  ],
  estudio: [
    { name: "Microfonía", detail: "Neumann (High-End) / Set AKG para batería" },
    { name: "Monitoreo", detail: "JBL Professional Series / Monitores de Referencia" },
    { name: "Interface & Pre", detail: "Focusrite Clarett+ 4 / Focusrite Octopre" },
    { name: "Escucha", detail: "Amplificador de audífonos dedicado / Audífonos AKG" },
    { name: "Software (DAW)", detail: "Logic Pro / Studio One" },
  ]
};

export default function Equipamiento() {
  return (
    <section className="bg-[#0f171a] py-24 px-6 min-h-screen">
      <div className="container mx-auto">
        
        {/* Encabezado */}
        <div className="mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-primary font-black mb-4">The Gear</h2>
          <h3 className="text-5xl md:text-7xl font-playfair font-bold text-[#f8f5f0] italic">
            Equipamiento Técnico<span className="text-primary not-italic">.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Bloque Sala de Ensayo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <span className="h-[1px] w-12 bg-primary"></span>
              <h4 className="text-2xl font-playfair font-bold text-[#f8f5f0]">Sala de Ensayo</h4>
            </div>
            <div className="space-y-6">
              {gear.ensayo.map((item, i) => (
                <div key={i} className="group border-b border-white/5 pb-4">
                  <span className="text-primary text-[10px] uppercase font-black tracking-widest">{item.name}</span>
                  <p className="text-[#f8f5f0]/80 font-light text-lg group-hover:text-primary transition-colors">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bloque Estudio de Grabación */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <span className="h-[1px] w-12 bg-primary"></span>
              <h4 className="text-2xl font-playfair font-bold text-[#f8f5f0]">Estudio de Grabación</h4>
            </div>
            <div className="bg-[#155665]/10 p-8 rounded-2xl border border-primary/20 space-y-6">
              {gear.estudio.map((item, i) => (
                <div key={i} className="group">
                  <span className="text-primary text-[10px] uppercase font-black tracking-widest">{item.name}</span>
                  <p className="text-[#f8f5f0]/80 font-light text-lg group-hover:text-[#f8f5f0] transition-colors">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* El "Faro" de Comodidades */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 bg-[#f8f5f0] p-10 md:p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-8 md:mb-0">
            <h4 className="text-primary font-playfair text-3xl font-black italic mb-2">Más que solo cables.</h4>
            <p className="text-primary/70 font-medium">Diseñamos el espacio para que la creatividad no se detenga.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <AmenityTag label="Aire Acondicionado" />
            <AmenityTag label="Zona Coffee Break" />
            <AmenityTag label="Patio Creativo" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function AmenityTag({ label }) {
  return (
    <span className="px-6 py-3 border border-primary/20 rounded-full text-primary text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-[#f8f5f0] transition-all cursor-default">
      {label}
    </span>
  );
}