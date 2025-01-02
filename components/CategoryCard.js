// components/CategoryCard.js
import Link from 'next/link';

const CategoryCard = ({ name, imgSrc, description, link }) => (
  <div className="flex flex-col items-center text-center">
    <Link href={link}>
      <img
        src={imgSrc}
        alt={name}
        className="w-24 h-24 mb-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      />
    </Link>
    <p className="text-xl font-semibold text-gray-800">{name}</p>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export { CategoryCard };
