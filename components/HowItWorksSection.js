import { HowItWorksCard } from './HowItWorksCard';

const howItWorks = [
  {
    title: 'Chamou, chegou',
    description: 'Entregas rápidas, seguras e na palma da sua mão. Nosso foco é a sua comodidade.',
    imgSrc: '/images/delivery.png',
  },
  {
    title: 'Variedade de produtos',
    description: 'Desde as suas bebidas favoritas até produtos para o dia a dia. Tudo em um só lugar.',
    imgSrc: '/images/variety.png',
  },
  {
    title: 'Chama a diversão',
    description: 'Transforme o seu momento com ofertas que tornam qualquer ocasião especial.',
    imgSrc: '/images/fun.png',
  },
];

export const HowItWorksSection = () => (
  <section className="py-16 bg-gradient-to-b from-white to-gray-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-yellow-600 mb-10">
        Como Funciona Nosso App
      </h2>
      <p className="text-gray-700 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
        Descubra como nosso app pode facilitar sua vida. Seja para entregar o que você precisa, oferecer uma grande variedade de produtos ou trazer diversão ao seu dia a dia, estamos aqui para você.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {howItWorks.map((item, index) => (
          <HowItWorksCard key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);
