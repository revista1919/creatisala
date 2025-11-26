export default function Contacto() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      motivo: formData.get('motivo'),
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxWM6YaRjxFICw9tt-sMOB4g4EVxMuquyLfDKkVqpmDYm4vHGHBuAhhOlTWLiWAUBXZgw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data),
      });
      alert('Formulario enviado exitosamente!');
      form.reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario.');
    }
  };

  return (
    <section className="animate-slideUp">
      <h2 className="text-4xl mb-8 text-center text-secondary">Contacto</h2>
      <form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2 text-primary font-bold">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            required 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-primary font-bold">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block mb-2 text-primary font-bold">Número de Teléfono</label>
          <input 
            type="tel" 
            id="telefono" 
            name="telefono" 
            required 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="motivo" className="block mb-2 text-primary font-bold">Motivo</label>
          <select 
            id="motivo" 
            name="motivo" 
            required 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
          >
            <option value="">Selecciona una opción</option>
            <option value="Clases de Piano">Clases de Piano</option>
            <option value="Clases de Canto">Clases de Canto</option>
            <option value="Clases de Batería">Clases de Batería</option>
            <option value="Cotización producción musical">Cotización producción musical</option>
            <option value="Cotización composición musical">Cotización composición musical</option>
            <option value="Sala de ensayo">Sala de ensayo</option>
          </select>
        </div>
        <button 
          type="submit" 
          className="bg-accent text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors w-full"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}