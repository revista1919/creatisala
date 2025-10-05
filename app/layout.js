"use client";
import './globals.css';
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Font configurations
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing', weight: ['400', '700'] });

// Error Boundary Component
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
  if (hasError) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-primary">Something went wrong.</h2>
        <p>Please refresh the page or contact support.</p>
      </div>
    );
  }
  return children;
}

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} ${dancing.variable} font-sans min-h-screen flex flex-col bg-base-100`}>
        <ErrorBoundary>
          <motion.header
            className="bg-primary text-white py-4 shadow-md sticky top-0 z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
              <div className="flex justify-center w-full md:w-auto">
                <Link href="/">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Image src="/logo.png" alt="Creatisala Logo" width={160} height={40} priority />
                  </motion.div>
                </Link>
              </div>
              <nav className="hidden md:flex">
                <ul className="flex space-x-6 text-base items-center">
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    <Link href="/" className="hover:text-accent transition-colors duration-300">Inicio</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                    <Link href="/servicios" className="hover:text-accent transition-colors duration-300">Servicios</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                    <Link href="/equipo" className="hover:text-accent transition-colors duration-300">Nuestro Equipo</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                    <Link href="/galeria" className="hover:text-accent transition-colors duration-300">Galería</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                    <Link href="/equipamiento" className="hover:text-accent transition-colors duration-300">Equipamiento</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                    <Link href="/blog" className="hover:text-accent transition-colors duration-300">Blog</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                    <Link href="/contacto" className="bg-accent text-primary px-4 py-2 rounded-lg hover:bg-accent-dark transition-all duration-300">Contacto</Link>
                  </motion.li>
                </ul>
              </nav>
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden bg-primary"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <ul className="flex flex-col items-center space-y-4 py-4">
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <Link href="/" className="hover:text-accent transition-colors duration-300" onClick={toggleMenu}>Inicio</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <Link href="/servicios" className="hover:text-accent transition-colors duration-300" onClick={toggleMenu}>Servicios</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <Link href="/equipo" className="hover:text-accent transition-colors duration-300" onClick={toggleMenu}>Nuestro Equipo</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <Link href="/galeria" className="hover:text-accent transition-colors duration-300" onClick={toggleMenu}>Galería</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <Link href="/equipamiento" className="hover:text-accent transition-colors duration-300" onClick={toggleMenu}>Equipamiento</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                    <Link href="/blog" className="hover:text-accent transition-colors duration-300" onClick={toggleMenu}>Blog</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                    <Link href="/contacto" className="bg-accent text-primary px-4 py-2 rounded-lg hover:bg-accent-dark transition-all duration-300" onClick={toggleMenu}>Contacto</Link>
                  </motion.li>
                </ul>
              </motion.nav>
            )}
          </motion.header>
          <motion.main
            className="container mx-auto px-4 py-8 md:py-12 flex-grow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {children}
          </motion.main>
          <motion.footer
            className="bg-primary text-white py-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-dancing font-semibold mb-4">Creatisala</h3>
                <p className="text-accent">Un espacio inspirador para la grabación, ensayo y producción musical.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl font-dancing font-semibold mb-4">Navegación</h3>
                <ul className="space-y-2">
                  <li><Link href="/servicios" className="hover:text-accent transition-colors">Servicios</Link></li>
                  <li><Link href="/equipo" className="hover:text-accent transition-colors">Equipo</Link></li>
                  <li><Link href="/contacto" className="hover:text-accent transition-colors">Contacto</Link></li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl font-dancing font-semibold mb-4">Síguenos</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.95 3.62 9.06 8.36 9.83v-6.95h-2.51v-2.88h2.51v-2.2c0-2.47 1.5-3.82 3.7-3.82 1.05 0 1.95.08 2.21.11v2.56h-1.52c-1.19 0-1.42.57-1.42 1.4v1.84h2.84l-.37 2.88h-2.47v6.95c4.74-.77 8.36-4.88 8.36-9.83 0-5.5-4.46-9.96-9.96-9.96z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="container mx-auto text-center border-t border-accent/50 mt-8 pt-6">
              <p className="text-accent">&copy; {new Date().getFullYear()} Creatisala. Todos los derechos reservados.</p>
            </div>
          </motion.footer>
        </ErrorBoundary>
      </body>
    </html>
  );
}