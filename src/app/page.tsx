import FundList from '@/components/FundList'

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <header className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Calculadora de FIIs
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Encontre os melhores Fundos de Investimento Imobiliário para sua estratégia 
          de Bola de Neve e calcule seu número mágico para a independência financeira.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="btn-primary">
            Como Calcular
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Saiba Mais
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="bg-white rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
          <div className="text-gray-600">FIIs Disponíveis</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">8 min</div>
          <div className="text-gray-600">Atualização Automática</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">Real-time</div>
          <div className="text-gray-600">Dados do Mercado</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Fundos Imobiliários
          </h2>
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Buscar FII..."
              className="input max-w-xs"
            />
            <select className="input max-w-xs">
              <option value="">Ordenar por</option>
              <option value="price">Preço</option>
              <option value="dividend">Dividendo</option>
            </select>
          </div>
        </div>
        <FundList page={1} />
      </div>
    </div>
  )
}
