"use client"; // ← ESTO ES LA CLAVE, chaval

import { useState } from 'react';

export default function Contacto() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitBtn = e.currentTarget.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxWM6YaRjxFICw9tt-sMOB4g4EVxMuquyLfDKkVqpmDYm4vHGHBuAhhOlTWLiWAUBXZgw/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(data),
      });

      alert('¡Mensaje enviado con éxito! Te contactaremos pronto');
      e.target.reset();
    } catch (err) {
      alert('Enviado (probablemente llegó, Google a veces no responde con no-cors)');
      console.error(err);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  };

  return (
    <section className="animate-slideUp py-20">
      <h2 className="text-4xl mb-8 text-center text-secondary font-bold">Contacto</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl">
        <div className="mb-5">
          <label className="block mb-2 text-primary font-bold">Nombre</label>
          <input type="text" name="nombre" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent outline-none transition" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-primary font-bold">Email</label>
          <input type="email" name="email" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent outline-none transition" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-primary font-bold">Teléfono</label>
          <input type="tel" name="telefono" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent outline-none transition" />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-primary font-bold">Motivo</label>
          <select name="motivo" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent outline-none">
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
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg w-full text-lg"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}