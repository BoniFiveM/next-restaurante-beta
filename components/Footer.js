export function Footer() {
  return (
    <footer className="bg-yellow-500 text-white py-8 mt-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Sabor Supremo */}
        <div>
          <h3 className="font-bold text-lg mb-4">Sabor Supremo</h3>
          <ul>
            <li><a href="#" className="hover:text-yellow-300 transition duration-300">Site Institucional</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition duration-300">Fale Conosco</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition duration-300">Conta e Segurança</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition duration-300">Carreiras</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition duration-300">Entregadores</a></li>
          </ul>
        </div>

        {/* Descubra */}
        <div>
          <h3 className="font-bold text-lg mb-4">Descubra</h3>
          <ul>
            <li><a href="#" className="hover:text-yellow-300 transition duration-300">Cadastre seu Restaurante ou Mercado</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition duration-300">Sabor Supremo Shop</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition duration-300">Sabor Supremo Empresas</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition duration-300">Blog Sabor Supremo</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold text-lg mb-4">Social</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-sm">
        <p>&copy; 2025 Sabor Supremo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
