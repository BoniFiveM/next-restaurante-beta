import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OrderList } from '../components/OrderList';

export default function Pedidos() {
  const pedidos = [
    { id: 1, nome: 'Pizza Margherita', quantidade: 2 },
    { id: 2, nome: 'Lasanha', quantidade: 1 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow p-8">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Pedidos</h2>
        
        {/* Lista de pedidos */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Seus Pedidos</h3>
          <ul className="space-y-4">
            {pedidos.map((pedido) => (
              <li
                key={pedido.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    {pedido.quantidade}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{pedido.nome}</h4>
                  </div>
                </div>
                <div className="text-lg text-gray-600">x{pedido.quantidade}</div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
