import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeroSection = () => {
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const googlePlacesApiKey = 'SUA_CHAVE_GOOGLE_PLACES';

    const fetchRestaurantInfo = async (query) => {
        setIsLoading(true);
        setTimeout(() => {
            const restaurant = {
                name: "Restaurante Fictício",
                vicinity: "Rua Fictícia, 123, Bairro Fictício",
                geometry: {
                    location: { lat: -23.55052, lng: -46.633308 },
                },
                photos: [
                    { photo_reference: "https://via.placeholder.com/400" },
                ],
            };
            setRestaurants([restaurant]);
            setIsLoading(false);
            setSelectedRestaurant(restaurant);
            setIsModalOpen(true);
        }, 2000);
    };

    const handleSearch = () => {
        if (city) {
            console.log(`Buscando informações para: ${city}`);
            fetchRestaurantInfo(city);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <section
            className="relative bg-yellow-500 text-white py-32 text-center"
            style={{
                backgroundImage:
                    'url(https://img.freepik.com/fotos-premium/embalagens-de-alimentos-em-fundo-amarelo-casa-de-entrega-de-comida-em-quarentena-flatlay-banner-com-copyspace_168091-174.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-mountain h-32"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4">Experimente a Conveniência Reimaginada</h1>
                <p className="text-xl mb-8">
                    Tudo o que você precisa, entregue em minutos. Rápido, fácil e sem complicações.
                </p>

                <div className="flex justify-center items-center mb-8 space-x-4 relative">
                    <input
                        type="text"
                        placeholder="Pesquise sua localização"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="px-4 py-2 w-64 rounded-l-full border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-6 py-2 bg-white text-yellow-500 rounded-r-full hover:bg-yellow-100 transition duration-300"
                    >
                        Buscar
                    </button>
                </div>

                {isLoading && (
                    <div className="fixed inset-0 bg-yellow-500  flex justify-center items-center z-50">
                        <div className="text-2xl font-semibold text-white">Carregando...</div>
                    </div>
                )}

                {restaurants.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                            Restaurantes Encontrados
                        </h2>
                        <div className="space-y-4">
                            {restaurants.map((restaurant, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
                                    onClick={() => setSelectedRestaurant(restaurant)}
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={restaurant.photos ? restaurant.photos[0].photo_reference : 'https://via.placeholder.com/400'}
                                            alt={restaurant.name}
                                            className="w-16 h-16 object-cover rounded-full shadow-md"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">{restaurant.name}</h3>
                                            <p className="text-gray-600">{restaurant.vicinity}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedRestaurant(restaurant)}
                                        className="text-yellow-500 hover:text-yellow-600 font-semibold transition duration-300"
                                    >
                                        Ver detalhes
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {isModalOpen && selectedRestaurant && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={handleModalClick}
                >
                    <div className="bg-white rounded-lg p-8 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal} className="absolute top-4 right-4 text-xl text-gray-500">
                            X
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">{selectedRestaurant.name}</h2>
                        <img
                            src={selectedRestaurant.photos ? selectedRestaurant.photos[0].photo_reference : 'https://via.placeholder.com/400'}
                            alt={selectedRestaurant.name}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <p className="mb-4">{selectedRestaurant.vicinity}</p>
                        <button
                            onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedRestaurant.geometry.location.lat},${selectedRestaurant.geometry.location.lng}`, '_blank')}
                            className="px-6 py-2 bg-yellow-500 text-white rounded-full"
                        >
                            Como Chegar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export { HeroSection };
