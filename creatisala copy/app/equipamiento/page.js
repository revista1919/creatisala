export default function Equipamiento() {
  return (
    <section className="animate-slideUp">
      <h2 className="text-4xl mb-8 text-center text-secondary">Equipamiento</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold mb-2 text-primary">Sala de Ensayo</h3>
          <ul className="list-disc pl-6">
            <li>Amplificadores</li>
            <li>Instrumentos básicos</li>
            <li>Sistema de sonido</li>
            {/* Agrega detalles reales */}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold mb-2 text-primary">Estudio de Grabación</h3>
          <ul className="list-disc pl-6">
            <li>Micrófonos profesionales</li>
            <li>Software de grabación</li>
            <li>Mezcladores</li>
            {/* Agrega detalles reales */}
          </ul>
        </div>
      </div>
    </section>
  );
}