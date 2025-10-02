export default function Blog() {
  return (
    <section className="animate-slideUp">
      <h2 className="text-4xl mb-8 text-center text-secondary">Blog/Noticias</h2>
      <p className="text-center mb-6 text-gray-700">Actualizaciones semanales sobre eventos y tips musicales.</p>
      <div className="space-y-6">
        {[
          { title: 'Noticia 1: Nueva Clase de Canto', desc: 'Detalles aquí...' },
          { title: 'Noticia 2: Evento en la Sala', desc: 'Detalles aquí...' },
        ].map((post, index) => (
          <article key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-2 text-primary">{post.title}</h3>
            <p>{post.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}