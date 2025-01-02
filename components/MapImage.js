// components/MapImage.js
const MapImage = () => (
    <div className="relative">
      <img
        src="/images/map.png"
        alt="Mapa de cidades"
        className="mx-auto w-full max-w-5xl h-auto transition-transform transform hover:scale-105"
      />
      <div className="absolute inset-0 flex justify-center items-center text-white font-bold text-lg md:text-xl">
        <span className="bg-gray-800 bg-opacity-50 p-3 rounded-lg shadow-lg">
          Explore todas as cidades onde estamos presentes!
        </span>
      </div>
    </div>
  );
  
  export { MapImage };
  