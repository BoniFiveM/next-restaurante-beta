import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function PetShop() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold text-yellow-500 mb-8">Produtos para Pets</h2>
            <p className="text-gray-600 mb-8 text-lg font-medium">
              Tudo o que seu pet precisa, com entrega rápida.
            </p>
            {/* Aqui você pode adicionar os produtos ou itens relacionados a pet shop */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
