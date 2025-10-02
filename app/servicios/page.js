export default function Servicios() {
  return (
    <section className="animate-slideUp">
      <h2 className="text-4xl mb-8 text-center text-secondary">Servicios</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Clases de Piano, Canto y Batería', desc: 'Aprende con expertos en un ambiente inspirador.' },
          { title: 'Producciones Musicales', desc: 'Produce tu música con equipo profesional.' },
          { title: 'Composición Musical', desc: 'Desarrolla tus ideas compositivas.' },
          { title: 'Sala de Ensayo', desc: 'Espacio equipado para practicar.' },
          { title: 'Estudio de Grabación', desc: 'Graba tu música con calidad profesional.' },
        ].map((service, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-2 text-primary">{service.title}</h3>
            <p>{service.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}