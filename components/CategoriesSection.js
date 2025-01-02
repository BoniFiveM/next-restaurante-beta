import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CategoryCard } from './CategoryCard';

const categories = [
  {
    name: 'Ofertas',
    imgSrc: 'https://images.unsplash.com/photo-1580485942782-74e1d9b8e6ea',
    description: 'Descontos incríveis em produtos selecionados.',
    link: '/ofertas',
  },
  {
    name: 'Bebidas',
    imgSrc: 'https://images.unsplash.com/photo-1612879757256-fc61cd3d38f7',
    description: 'Variedade de bebidas para todos os gostos.',
    link: '/bebidas',
  },
  {
    name: 'Pet Shop',
    imgSrc: 'https://images.unsplash.com/photo-1574158622689-c603f6cc12b5',
    description: 'Tudo o que seu pet precisa, com entrega rápida.',
    link: '/pet-shop',
  },
  {
    name: 'Mercado',
    imgSrc: 'https://images.unsplash.com/photo-1574158622756-713309f3f6e2',
    description: 'Produtos de mercado com entregas rápidas e frescas.',
    link: '/mercado',
  },
];

export const CategoriesSection = () => (
  <section className="py-8 bg-white" id="categories">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold text-yellow-500 mb-8">Categorias Populares</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryCard {...category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);
