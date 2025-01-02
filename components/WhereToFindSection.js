// components/WhereToFindSection.js
const WhereToFindSection = () => (
    <section className="py-12 bg-yellow-500 ">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Texto e lista de cidades */}
        <div className="text-center lg:text-left lg:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Onde você pode me encontrar?
          </h2>
          <div className="text-gray-600 space-y-2">
            <p>
              <span className="font-semibold">Belém</span> • Porto Velho • Maceió
              • Salvador • São Luís • João Pessoa • Porto Alegre • Palmas
            </p>
            <p>
              Florianópolis • Boa Vista • Aracaju • Natal • Vitória • São Paulo •
              Curitiba • Rio Branco
            </p>
            <p>
              Rio de Janeiro • Belo Horizonte • Manaus • Brasília • Fortaleza •
              Recife • Goiânia
            </p>
            <p>
              Campo Grande • Macapá • Cuiabá •{' '}
              <a
                href="#"
                className="text-yellow-600 font-semibold hover:underline"
              >
                Ver mais cidades
              </a>
            </p>
          </div>
        </div>
  
        {/* Imagem */}
        <div className="lg:w-1/3 mt-10 lg:mt-0 flex justify-center">
          <img
            src="/path/to/illustration.png" // Substitua pelo caminho da sua imagem
            alt="Ilustração de uma pessoa com binóculos"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
  
  export { WhereToFindSection };
  