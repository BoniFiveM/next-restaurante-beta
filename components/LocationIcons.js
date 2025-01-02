// components/LocationIcons.js
const LocationIcons = () => (
    <div className="flex flex-wrap justify-center gap-12 sm:gap-20 animate__animated animate__fadeIn">
      <div className="flex flex-col items-center space-y-3 transform transition-all hover:scale-110 hover:text-yellow-600 duration-300">
        <img
          src="https://img.icons8.com/color/48/000000/brazil.png"
          alt="Brasil"
          className="mb-2"
        />
        <span className="text-gray-700 font-semibold text-lg">Brasil</span>
      </div>
      <div className="flex flex-col items-center space-y-3 transform transition-all hover:scale-110 hover:text-yellow-600 duration-300">
        <img
          src="https://img.icons8.com/ios/50/000000/city-buildings.png"
          alt="Cidade"
          className="mb-2"
        />
        <span className="text-gray-700 font-semibold text-lg">Cidades</span>
      </div>
    </div>
  );
  
  export { LocationIcons };