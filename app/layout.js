"use client";
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// Font configuration
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});
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
      <body className={`${openSans.variable} font-sans min-h-screen flex flex-col bg-base-100`}>
        <ErrorBoundary>
          <motion.header
            className="bg-primary text-[#e6e1d8] py-4 shadow-md sticky top-0 z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
              {/* Removed logo from navbar to match the screenshot */}
              <nav className="hidden md:flex">
                <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base items-center">
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    <Link href="/" className="hover:text-accent transition-colors duration-300 uppercase">Inicio</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                    <Link href="/servicios" className="hover:text-accent transition-colors duration-300 uppercase">Servicios</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                    <Link href="/equipo" className="hover:text-accent transition-colors duration-300 uppercase">Nuestro Equipo</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                    <Link href="/galeria" className="hover:text-accent transition-colors duration-300 uppercase">Galería</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                    <Link href="/equipamiento" className="hover:text-accent transition-colors duration-300 uppercase">Equipamiento</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                    <Link href="/blog" className="hover:text-accent transition-colors duration-300 uppercase">Blog</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                    <Link href="/contacto" className="bg-[#e6e1d8] text-primary px-3 md:px-4 py-1 md:py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 uppercase">Contacto</Link>
                  </motion.li>
                </ul>
              </nav>
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-[#e6e1d8] focus:outline-none">
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
                <ul className="flex flex-col items-center space-y-4 py-4 text-[#e6e1d8]">
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <Link href="/" className="hover:text-accent transition-colors duration-300 uppercase" onClick={toggleMenu}>Inicio</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <Link href="/servicios" className="hover:text-accent transition-colors duration-300 uppercase" onClick={toggleMenu}>Servicios</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <Link href="/equipo" className="hover:text-accent transition-colors duration-300 uppercase" onClick={toggleMenu}>Nuestro Equipo</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <Link href="/galeria" className="hover:text-accent transition-colors duration-300 uppercase" onClick={toggleMenu}>Galería</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <Link href="/equipamiento" className="hover:text-accent transition-colors duration-300 uppercase" onClick={toggleMenu}>Equipamiento</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                    <Link href="/blog" className="hover:text-accent transition-colors duration-300 uppercase" onClick={toggleMenu}>Blog</Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                    <Link href="/contacto" className="bg-[#e6e1d8] text-primary px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 uppercase" onClick={toggleMenu}>Contacto</Link>
                  </motion.li>
                </ul>
              </motion.nav>
            )}
          </motion.header>
          <motion.main
            className="flex-grow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {children}
          </motion.main>
          <motion.footer
            className="bg-primary text-[#e6e1d8] py-8 mt-auto"
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
                <h3 className="text-xl font-semibold mb-4">La Creatisala</h3>
                <p className="text-accent">Un espacio inspirador para la grabación, ensayo y producción musical.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Navegación</h3>
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
                <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://www.instagram.com/lacreatisala/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.525.069-2.877.367-3.914 1.404-1.037 1.037-1.335 2.389-1.404 3.914-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.069 1.525.367 2.877 1.404 3.914 1.037 1.037 2.389 1.335 3.914 1.404 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.525-.069 2.877-.367 3.914-1.404 1.037-1.037 1.335-2.389 1.404-3.914.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.069-1.525-.367-2.877-1.404-3.914-1.037-1.037-2.389-1.335-3.914-1.404-1.277-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.441-1.439-1.441z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="container mx-auto text-center border-t border-accent/50 mt-8 pt-6">
              <p className="text-accent">&copy; {new Date().getFullYear()} La Creatisala. Todos los derechos reservados.</p>
            </div>
          </motion.footer>
        </ErrorBoundary>
      </body>
    </html>
  );
}