import Image from 'next/image';

export default function Galeria() {
  // Función que importa TODAS las imágenes de la carpeta public/fotos
  const importAllImages = () => {
    const context = require.context('../../public/fotos', false, /\.(png|jpe?g|webp|gif|avif)$/);
    return context.keys().map(context);
  };

  // Obtenemos las imágenes (solo en build time, es estático y óptimo)
  const fotos = importAllImages();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-black/20">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-cyan-900 tracking-tight">
        Galería
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
        {fotos.map((foto, index) => {
          // Extraemos solo el nombre del archivo para el alt (opcional pero elegante)
          const fileName = foto.default.src.split('/').pop().split('.').shift().replace(/-/g, ' ').replace(/_/g, ' ');

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/20"
            >
              <Image
                src={foto.default.src}           // ruta correcta: /fotos/nombre.jpg
                alt={`Fotografía profesional ${index + 1} - ${fileName}`}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                placeholder="blur"
                blurDataURL={foto.default.blurDataURL || undefined}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay elegante al hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <p className="text-white text-lg font-medium tracking-wider">
                  {index + 1} / {fotos.length}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mensaje bonito si no hay fotos */}
      {fotos.length === 0 && (
        <p className="text-center text-purple-300 text-xl mt-20">
          La galería está vacía por el momento...
        </p>
      )}
    </section>
  );
}