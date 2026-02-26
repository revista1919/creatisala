// app/layout.js
"use client";

import { Montserrat, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '700']
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  weight: ['400', '700']
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-[#f8f5f0] text-primary/90`}>
        
        {/* Navigation: El Faro Superior - Con TODOS los links */}
        <motion.header 
          className="sticky top-0 w-full z-50 bg-[#f8f5f0] border-b border-primary/10 shadow-sm"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto flex justify-between items-center px-6 py-5">
            <Link href="/" className="group">
              <span className="font-playfair text-2xl font-black text-primary tracking-tighter transition-all group-hover:italic">
                LA CREATISALA<span className="text-[#FACC15]">.</span>
              </span>
            </Link>

            {/* Navegación Desktop - CON TODOS LOS LINKS */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 lg:space-x-8 items-center text-[12px] uppercase tracking-[0.15em] font-bold text-primary/80">
                <li>
                  <Link href="/" className="hover:text-primary hover:tracking-[0.25em] transition-all">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="hover:text-primary hover:tracking-[0.25em] transition-all">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/equipo" className="hover:text-primary hover:tracking-[0.25em] transition-all">
                    Nuestro Equipo
                  </Link>
                </li>
                <li>
                  <Link href="/galeria" className="hover:text-primary transition-all">
                    Galería
                  </Link>
                </li>
                <li>
                  <Link href="/equipamiento" className="hover:text-primary transition-all">
                    Equipamiento
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-all">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contacto" 
                    className="bg-primary text-[#f8f5f0] px-6 py-2 rounded-full hover:bg-primary/90 transition-all shadow-md"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Botón menú mobile */}
            <button onClick={toggleMenu} className="md:hidden text-primary z-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Menú Mobile - CON TODOS LOS LINKS */}
          {isMenuOpen && (
            <motion.nav
              className="md:hidden bg-[#f8f5f0] border-t border-primary/10"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ul className="flex flex-col items-center space-y-4 py-6 text-primary/90">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors uppercase" onClick={closeMenu}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="hover:text-primary transition-colors uppercase" onClick={closeMenu}>
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/equipo" className="hover:text-primary transition-colors uppercase" onClick={closeMenu}>
                    Nuestro Equipo
                  </Link>
                </li>
                <li>
                  <Link href="/galeria" className="hover:text-primary transition-colors uppercase" onClick={closeMenu}>
                    Galería
                  </Link>
                </li>
                <li>
                  <Link href="/equipamiento" className="hover:text-primary transition-colors uppercase" onClick={closeMenu}>
                    Equipamiento
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors uppercase" onClick={closeMenu}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contacto" 
                    className="bg-primary text-[#f8f5f0] px-6 py-2 rounded-full hover:bg-primary/90 transition-all shadow-md uppercase" 
                    onClick={closeMenu}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </motion.header>

        {/* Main content */}
        <motion.main
          className="flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.main>

        {/* Footer: El Faro Inferior - Mezcla de ambos mundos */}
        <footer className="bg-[#f8f5f0] text-primary pt-20 pb-10 border-t border-primary/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
              
              {/* Marca y Propósito */}
              <div className="md:col-span-5">
                <h3 className="font-playfair text-4xl font-bold mb-6 italic leading-none text-primary">
                  Tu música merece <br/> un lugar real.
                </h3>
                <p className="text-primary/70 max-w-sm leading-relaxed">
                  En Creatisala no hacemos "promoción vacía". Creamos el entorno técnico y humano para que tu arte respire.
                </p>
              </div>

              {/* Links con Estética de Menú de Vinilo - más completo */}
              <div className="md:col-span-3">
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-black mb-6 opacity-50 text-primary">Explora</h4>
                <ul className="space-y-4 font-bold text-sm">
                  <li>
                    <Link href="/servicios" className="hover:translate-x-2 inline-block transition-transform text-primary/80 hover:text-primary">
                      SALAS DE ENSAYO
                    </Link>
                  </li>
                  <li>
                    <Link href="/estudio" className="hover:translate-x-2 inline-block transition-transform text-primary/80 hover:text-primary">
                      ESTUDIO DE GRABACIÓN
                    </Link>
                  </li>
                  <li>
                    <Link href="/produccion" className="hover:translate-x-2 inline-block transition-transform text-primary/80 hover:text-primary">
                      PRODUCCIÓN MUSICAL
                    </Link>
                  </li>
                  <li>
                    <Link href="/clases" className="hover:translate-x-2 inline-block transition-transform text-primary/80 hover:text-primary">
                      CLASES DE MÚSICA
                    </Link>
                  </li>
                  <li>
                    <Link href="/equipo" className="hover:translate-x-2 inline-block transition-transform text-primary/80 hover:text-primary">
                      NUESTRO EQUIPO
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Redes y Contacto */}
              <div className="md:col-span-4 flex flex-col items-start md:items-end">
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-black mb-6 opacity-50 text-primary">Conecta</h4>
                <div className="flex space-x-6 mb-8">
                  <SocialLink href="https://instagram.com/lacreatisala" label="INSTAGRAM" />
                  <SocialLink href="https://wa.me/tu-numero" label="WHATSAPP" />
                </div>
                <div className="text-left md:text-right">
                  <p className="font-playfair italic text-lg text-primary">hola@lacreatisala.com</p>
                  <p className="text-xs tracking-widest opacity-60 text-primary">SANTIAGO, CHILE</p>
                </div>
              </div>

            </div>

            {/* Créditos Finales */}
            <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] opacity-60 text-primary">
              <p className="uppercase">© {new Date().getFullYear()} LA CREATISALA — HECHO POR MÚSICOS, PARA MÚSICOS</p>
              <div className="flex space-x-8 mt-4 md:mt-0 uppercase font-black">
                <a href="#" className="hover:opacity-100 transition-opacity">PRIVACIDAD</a>
                <a href="#" className="hover:opacity-100 transition-opacity">TÉRMINOS</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Componente SocialLink con la estética clara
function SocialLink({ href, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[10px] font-black border-b-2 border-primary/20 hover:border-primary transition-all pb-1 tracking-widest uppercase text-primary"
    >
      {label}
    </a>
  );
}