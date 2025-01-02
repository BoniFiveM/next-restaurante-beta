export function MenuItem({ prato, onAdd }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <div className="relative">
        {/* Imagem do prato */}
        <img
          src={prato.imagem || 'https://via.placeholder.com/300'}
          alt={prato.nome}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        {/* Ícone de preço */}
        <div className="absolute top-4 right-4 bg-yellow-500 text-white p-2 rounded-full text-xl font-semibold">
          {prato.preco}
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-800">{prato.nome}</h2>
      <p className="text-gray-600 mt-2">{prato.descricao}</p>

      <button
        onClick={() => onAdd(prato)}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105"
      >
        <span className="mr-2">🍴</span> Adicionar ao Pedido
      </button>
    </div>
  );
}
