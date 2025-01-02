import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [registeredUser, setRegisteredUser] = useState(null);
  const [alert, setAlert] = useState(null);
  const router = useRouter();

  const modalRef = useRef(null);
  const userModalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
    if (userModalRef.current && !userModalRef.current.contains(e.target)) {
      closeUserModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Verificar se o usuário já está logado
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  const openModal = (register = false) => {
    setIsRegister(register);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ email: '', password: '', name: '' });
    setAlert(null);
  };

  const openUserModal = () => {
    setIsUserModalOpen(true);
  };

  const closeUserModal = () => {
    setIsUserModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (isRegister) {
      setRegisteredUser({ email: formData.email, password: formData.password, name: formData.name });
      setIsRegister(false);
      setFormData({ email: formData.email, password: '', name: '' });
      setAlert({ type: 'success', message: 'Registro concluído com sucesso!' });
    } else {
      if (formData.email === registeredUser?.email && formData.password === registeredUser?.password) {
        const userData = { name: registeredUser.name, email: registeredUser.email };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // criei para salvar o usuário no localStorage
        closeModal();
        setAlert({ type: 'success', message: 'Login realizado com sucesso!' });
      } else {
        setAlert({ type: 'error', message: 'E-mail ou senha incorretos' });
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); // isso ira remover o usuário do localStorage
    setAlert({ type: 'info', message: 'Você saiu da conta.' });
  };

  const isLoggedIn = user !== null;

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <header className="bg-yellow-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <h1 className="ml-2 text-2xl font-bold text-white">SupremaFood</h1>
        </div>

        <nav className="flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <Link href="/" className="text-white hover:text-yellow-300">Início</Link>
              <Link href="/menu" className="text-white hover:text-yellow-300">Menu</Link>
              <Link href="/pedidos" className="text-white hover:text-yellow-300">Pedidos</Link>
              <button
                onClick={openUserModal}
                className="text-white hover:text-yellow-300"
              >
                Conta
              </button>
            </>
          ) : (
            <div className="flex space-x-4">
              <button
                onClick={() => openModal(false)}
                className="px-4 py-2 bg-white text-yellow-500 rounded-full hover:bg-yellow-600 hover:text-white transition duration-300"
              >
                Entrar
              </button>
              <button
                onClick={() => openModal(true)}
                className="px-4 py-2 bg-yellow-300 text-white rounded-full hover:bg-yellow-600 transition duration-300"
              >
                Registrar
              </button>
            </div>
          )}

          {router.pathname !== '/' && (
            <button
              onClick={handleGoBack}
              className="px-4 py-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-600 transition duration-300"
            >
              Voltar
            </button>
          )}

          {isLoggedIn && (
            <div className="flex items-center space-x-4">
              <span className="text-white">Olá, {user.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white text-yellow-500 rounded-full hover:bg-yellow-600 hover:text-white transition duration-300"
              >
                Sair
              </button>
              <button
                onClick={openUserModal}
                className="px-4 py-2 bg-yellow-300 text-white rounded-full hover:bg-yellow-600 transition duration-300"
              >
                Minha Conta
              </button>
            </div>
          )}
        </nav>
      </div>

      {alert && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg w-96 shadow-lg transition-all duration-500 ${alert.type === 'success' ? 'bg-green-500' : alert.type === 'error' ? 'bg-red-500' : 'bg-blue-500'} text-white opacity-100`}
        >
          <span>{alert.message}</span>
          <button
            onClick={() => setAlert(null)}
            className="ml-4 text-xl font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
              {isRegister ? 'Registrar' : 'Login'}
            </h2>
            <form onSubmit={handleLogin}>
              {isRegister && (
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Nome</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  {isRegister ? 'Registrar' : 'Entrar'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Fechar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isUserModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div ref={userModalRef} className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Área do Usuário</h2>
            {user && (
              <div className='text-black'>
                <p><strong>Nome:</strong> {user.name}</p>
                <p><strong>E-mail:</strong> {user.email}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={closeUserModal}
                    className="px-6 py-2 bg-yellow-500 text-black  rounded-full hover:bg-yellow-600 transition duration-300"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
