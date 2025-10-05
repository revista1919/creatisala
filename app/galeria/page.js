import Image from 'next/image';

export default function Galeria() {
  const fotos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg']; // Agrega más nombres de archivos

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-300">Galería</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fotos.map((foto, index) => (
          <Image key={index} src={`/fotos/${foto}`} alt={`Foto ${index + 1}`} width={400} height={300} className="rounded-lg shadow-lg" />
        ))}
      </div>
    </section>
  );
}