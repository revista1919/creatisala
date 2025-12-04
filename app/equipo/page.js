import Image from 'next/image';

export default function Equipo() {
  return (
    <section className="animate-slideUp">
      <h2 className="text-4xl mb-8 text-center text-secondary">Equipo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: 'Ari Montiel',
            role: 'Fundador y CEO de La Creatisala',
            desc: 'Vocal coach, Productor Musical y Multi instrumentista.',
            img: '/ari.jpg',
          },
          {
            name: 'Yan Lazcano',
            role: 'Co Fundador',
            desc: 'Pianista y Productor Musical.',
            img: '/yan.jpg',
          },
          {
            name: 'Brian Ovalle',
            role: 'Co Fundador',
            desc: 'Baterista.',
            img: '/brian.jpg',
          },
        ].map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-2 text-primary">{member.name}</h3>
            <p className="text-lg mb-2">{member.role}</p>
            <p>{member.desc}</p>
            {/* Descomenta si tienes imágenes */}
            {member.img && <Image src={member.img} alt={member.name} width={200} height={200} className="mx-auto rounded-full mt-4" />} */
          </div>
        ))}
      </div>
    </section>
  );
}