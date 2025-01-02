import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MenuItem } from '../components/MenuItem';

export default function Menu() {
  const pratos = [
    { id: 1, nome: 'Pizza Margherita', preco: 'R$25,00' },
    { id: 2, nome: 'Lasanha', preco: 'R$30,00' },
    { id: 3, nome: 'Hambúrguer Gourmet', preco: 'R$20,00' },
  ];

  const handleAddToOrder = (prato) => {
    console.log(`Adicionado ao pedido: ${prato.nome}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">Menu</h2>
        
        {/* Lista de Pratos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {pratos.map((prato) => (
            <MenuItem key={prato.id} prato={prato} onAdd={handleAddToOrder} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
