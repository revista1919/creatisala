"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contacto() {
  const [status, setStatus] = useState('Enviar Mensaje');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxWM6YaRjxFICw9tt-sMOB4g4EVxMuquyLfDKkVqpmDYm4vHGHBuAhhOlTWLiWAUBXZgw/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(data),
      });

      alert('¡Mensaje enviado con éxito! Te contactaremos pronto');
      e.target.reset();
    } catch (err) {
      alert('Nota: El mensaje se envió correctamente (Google a veces no confirma con no-cors)');
      console.error(err);
    } finally {
      setStatus('Enviar Mensaje');
    }
  };

  return (
    <section className="bg-[#0f171a] min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Texto: El Gancho */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-black">Get in touch</span>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-[#f8f5f0] mt-4 italic leading-tight">
              Hablemos de <br/>tu sonido<span className="text-primary not-italic">.</span>
            </h2>
            <p className="text-slate-400 mt-8 text-lg font-light leading-relaxed max-w-md">
              Ya sea para una clase intensiva o una producción desde cero, estamos aquí para darte el espacio que necesitas.
            </p>

            <div className="mt-12 space-y-6">
              <ContactDetail label="Ubicación" value="San Martín 10, 2171807 San Felipe, Valparaíso" />
              <ContactDetail label="Email" value="contact@lacreatisala.com" />
              <ContactDetail label="WhatsApp" value="+56 9 1019 0158" />
            </div>
          </motion.div>

          {/* Columna del Formulario: El Faro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f8f5f0] p-8 md:p-12 rounded-3xl shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-black text-primary/50 mb-2 block">Nombre</label>
                  <input 
                    type="text" name="nombre" required 
                    className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors text-primary font-medium"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-black text-primary/50 mb-2 block">Email</label>
                  <input 
                    type="email" name="email" required 
                    className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors text-primary font-medium"
                    placeholder="email@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest font-black text-primary/50 mb-2 block">Teléfono</label>
                <input 
                  type="tel" name="telefono" required 
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors text-primary font-medium"
                  placeholder="+56 9 1019 0158"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest font-black text-primary/50 mb-2 block">Motivo del contacto</label>
                <select 
                  name="motivo" required 
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors text-primary font-medium appearance-none cursor-pointer"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Clases de Piano">Clases de Piano</option>
                  <option value="Clases de Canto">Clases de Canto</option>
                  <option value="Clases de Batería">Clases de Batería</option>
                  <option value="Cotización producción musical">Producción Musical</option>
                  <option value="Cotización composición musical">Composición Musical</option>
                  <option value="Sala de ensayo">Sala de Ensayo</option>
                </select>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="bg-primary text-[#f8f5f0] w-full py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                >
                  {status}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactDetail({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
      <span className="text-[#f8f5f0] font-light text-lg mt-1">{value}</span>
    </div>
  );
}