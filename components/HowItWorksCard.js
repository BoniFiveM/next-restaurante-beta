// components/HowItWorksCard.js
const HowItWorksCard = ({ title, description, imgSrc }) => (
    <div className="text-center transition-all duration-300 hover:scale-105">
      <img src={imgSrc} alt={title} className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg" />
      <h3 className="text-xl font-bold text-yellow-500 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  export { HowItWorksCard };
  