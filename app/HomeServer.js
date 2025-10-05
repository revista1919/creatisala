import HomeClient from './page';

export const metadata = {
  title: 'Creatisala - Un refugio para la creatividad musical',
  description: 'Estudio de grabación profesional, salas de ensayo y producción musical en el corazón de la ciudad.',
};

export default function HomeServer() {
  return <HomeClient />;
}