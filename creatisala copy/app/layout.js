import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Creatisala',
  description: 'Un refugio creativo para la música',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-primary to-secondary text-white py-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link href="/">
              <Image src="/logo.png" alt="Creatisala Logo" width={150} height={50} className="hover:scale-105 transition-transform" />
            </Link>
            <nav>
              <ul className="flex space-x-8 text-lg">
                <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
                <li><Link href="/servicios" className="hover:text-accent transition-colors">Servicios</Link></li>
                <li><Link href="/equipo" className="hover:text-accent transition-colors">Equipo</Link></li>
                <li><Link href="/galeria" className="hover:text-accent transition-colors">Galería</Link></li>
                <li><Link href="/equipamiento" className="hover:text-accent transition-colors">Equipamiento</Link></li>
                <li><Link href="/blog" className="hover:text-accent transition-colors">Blog/Noticias</Link></li>
                <li><Link href="/contacto" className="hover:text-accent transition-colors">Contacto</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4">{children}</main>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Creatisala. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">Un espacio para la creatividad musical</p>
          </div>
        </footer>
      </body>
    </html>
  );
}