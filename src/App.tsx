import { Search, Menu, User, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { useState } from 'react';
import logoG1 from 'figma:asset/49d59e9d13f4a7bd11c57b2b343f91f38dca7d91.png';
import PoliticaPage from './components/PoliticaPage';
import EconomiaPage from './components/EconomiaPage';
import TecnologiaPage from './components/TecnologiaPage';
import CategoryPage from './components/CategoryPage';

type PageType = 'home' | 'Política' | 'Economia' | 'Brasil' | 'Mundo' | 'Tecnologia' | 'Saúde' | 'Esportes' | 'Cultura' | 'COP 30';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const menuData = {
    editoriais: [
      'Agro', 'Carnaval 2025', 'Carros', 'Ciência', 'Economia', 'Educação', 
      'Empreendedorismo', 'Fato ou Fake', 'Inovação', 'Loterias', 
      'Meio Ambiente', 'Monitor da Violência', 'Mundo', 'Olha que Legal',
      'Política', 'Pop & Arte', 'Saúde', 'Tecnologia', 'Trabalho e Carreira',
      'Turismo e Viagem'
    ],
    regioes: {
      'Norte': ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins'],
      'Nordeste': ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'],
      'Centro-Oeste': ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'],
      'Sudeste': ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'],
      'Sul': ['Paraná', 'Rio Grande do Sul', 'Santa Catarina']
    },
    telejornais: [
      'Jornal Nacional', 'Jornal Hoje', 'Bom Dia Brasil', 'Fantástico',
      'Globo Repórter', 'Jornal da Globo', 'SP1', 'SP2', 'RJTV',
      'Bom Dia SP', 'Bom Dia Rio'
    ],
    servicos: [
      'Previsão do Tempo', 'Loterias', 'Calculadoras', 'App G1'
    ]
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
    setExpandedRegion(null); // Reset region when changing section
  };

  const toggleRegion = (region: string) => {
    setExpandedRegion(expandedRegion === region ? null : region);
  };

  const mainStory = {
    category: "Conferência em Belém",
    title: "Cúpula dos Líderes: abertura política da COP 30 começa hoje com cerca de 140 países",
    summary: "Pela 1ª vez, líderes mundiais se reúnem antes do início oficial da COP para definir o tom e as prioridades que devem dominar a conferência.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&h=450&fit=crop"
  };

  const secondaryStories = [
    {
      category: "Sustentabilidade",
      title: "Estudo sugere uso de larvas na alimentação canina como alternativa sustentável",
      summary: "Empresa aposta em petiscos diferenciados feitos com proteína de insetos para reduzir impacto ambiental.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop"
    },
    {
      category: "Nome de artista",
      title: "Nomes incomuns no Brasil: confira dados sobre Alok, Eminem, Ozzy e Britney",
      summary: "Levantamento mostra quantos brasileiros foram registrados com nomes de celebridades internacionais.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=250&fit=crop"
    },
    {
      category: "Política",
      title: "Lula recebe hoje príncipe William e Macron e participa de debates",
      summary: "Maior agenda do governo que Lula espera divulgar na COP será anunciada no dia 15.",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop"
    },
    {
      category: "Fundo Florestas Tropicais",
      title: "Brasil vai propor pagar aos países que mantêm suas florestas em pé",
      summary: "Proposta será apresentada durante a COP 30 como mecanismo de incentivo à preservação ambiental.",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=250&fit=crop"
    }
  ];

  const sidebarStories = [
    {
      title: "Operação Interdita quase 50 postos no PI; MA e TO por suspeita de louvél dinheiro para o PCC",
      category: "Assuntos em alta"
    },
    {
      title: "Homem que sumiu de SP para cobrar dívida no PR, polícia apura se vítima é suspeitos tinham ligação com crime organizado",
      category: "Assuntos em alta"
    },
    {
      title: "Homem é preso por suspeita de matar rapaz que saiu de casa de pijama no PR, confessa crime e diz que foi afogado",
      category: "Assuntos em alta"
    }
  ];

  const copVideos = [
    {
      title: "Enchente em Boca do Acre já afetou 14 mil pessoas",
      duration: "1 min",
      thumbnail: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop"
    },
    {
      title: "Como a sua casa contribui para a crise climática",
      duration: "2 min",
      thumbnail: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop"
    },
    {
      title: "Usuária mostra como usa energia solar em casa",
      duration: "1 min",
      thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop"
    },
    {
      title: "Por que o solo é essencial no combate às mudanças climáticas",
      duration: "1 min",
      thumbnail: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=300&h=200&fit=crop"
    }
  ];

  // Data for other categories
  const categoryData = {
    'Brasil': [
      {
        title: "Operação prende suspeitos de lavagem de dinheiro em três estados",
        summary: "Polícia Federal investiga esquema que movimentou milhões de reais",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        category: "Segurança Pública"
      },
      {
        title: "Chuvas intensas causam alagamentos em capitais do Sul",
        summary: "Defesa Civil emite alerta e orienta população sobre áreas de risco",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
        category: "Clima"
      }
    ],
    'Mundo': [
      {
        title: "Acordo climático global avança em negociações internacionais",
        summary: "Países desenvolvidos se comprometem com novas metas de redução de emissões",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        category: "Meio Ambiente"
      },
      {
        title: "Eleições europeias mostram crescimento de partidos ambientalistas",
        summary: "Resultado reflete preocupação crescente com questões climáticas",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
        category: "Internacional"
      }
    ],
    'Saúde': [
      {
        title: "Ministério da Saúde anuncia nova campanha de vacinação",
        summary: "Imunização contra gripe e covid-19 começa na próxima semana em todo país",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
        category: "Vacinação"
      },
      {
        title: "Estudo aponta benefícios de exercícios físicos para saúde mental",
        summary: "Pesquisa mostra redução de ansiedade e depressão com atividades regulares",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        category: "Bem-estar"
      }
    ],
    'Esportes': [
      {
        title: "Brasil vence e avança para próxima fase do campeonato",
        summary: "Seleção mostra bom desempenho e garante classificação antecipada",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop",
        category: "Futebol"
      },
      {
        title: "Tenista brasileiro conquista torneio internacional",
        summary: "Vitória marca melhor resultado da carreira do atleta",
        image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop",
        category: "Tênis"
      }
    ],
    'Cultura': [
      {
        title: "Festival de cinema brasileiro bate recorde de público",
        summary: "Evento apresenta mais de 100 produções nacionais em diversas categorias",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
        category: "Cinema"
      },
      {
        title: "Exposição reúne obras de artistas contemporâneos brasileiros",
        summary: "Mostra fica em cartaz por três meses em museu da capital",
        image: "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?w=600&h=400&fit=crop",
        category: "Artes Visuais"
      }
    ],
    'COP 30': [
      {
        title: "COP 30: Brasil apresenta plano ambicioso de preservação da Amazônia",
        summary: "Proposta inclui metas de desmatamento zero e restauração florestal",
        image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=600&h=400&fit=crop",
        category: "Meio Ambiente"
      },
      {
        title: "Países amazônicos assinam acordo conjunto para proteção da floresta",
        summary: "Documento prevê cooperação regional e financiamento internacional",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&h=400&fit=crop",
        category: "Acordo Climático"
      }
    ]
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Política':
        return <PoliticaPage />;
      case 'Economia':
        return <EconomiaPage />;
      case 'Tecnologia':
        return <TecnologiaPage />;
      case 'Brasil':
      case 'Mundo':
      case 'Saúde':
      case 'Esportes':
      case 'Cultura':
      case 'COP 30':
        return <CategoryPage categoryName={currentPage} stories={categoryData[currentPage]} />;
      default:
        return null;
    }
  };

  const categories = [
    { id: 'home' as PageType, name: 'Home' },
    { id: 'Política' as PageType, name: 'Política' },
    { id: 'Economia' as PageType, name: 'Economia' },
    { id: 'Brasil' as PageType, name: 'Brasil' },
    { id: 'Mundo' as PageType, name: 'Mundo' },
    { id: 'Tecnologia' as PageType, name: 'Tecnologia' },
    { id: 'Saúde' as PageType, name: 'Saúde' },
    { id: 'Esportes' as PageType, name: 'Esportes' },
    { id: 'Cultura' as PageType, name: 'Cultura' },
    { id: 'COP 30' as PageType, name: 'COP 30' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header simplificado sem menu global da Globo */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: '#0669DE' }}>globo.com</a>
            <a href="#" className="font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: '#C4170C' }}>g1</a>
            <a href="#" className="font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: '#06AA48' }}>ge</a>
            <a href="#" className="font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: '#FF6700' }}>gshow</a>
            <a href="#" className="font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: '#FB0334' }}>globoplay</a>
            <a href="#" className="font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: '#C4170C' }}>g1 jogos</a>
            <a href="#" className="font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: '#1E4C9A' }}>o globo</a>            
            <a href="#" className="font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: '#006767' }}>valor</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
              <User className="w-5 h-5" />
              <span className="text-sm">Conta Globo</span>
            </button>
          </div>
        </div>
      </header>

      {/* Barra vermelha com Menu, Logo e Busca */}
      <div className="sticky top-0 z-40 shadow-md" style={{ backgroundColor: '#c4170c' }}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative">
          {/* Menu à esquerda */}
          <button 
            className="flex items-center gap-2 text-white hover:text-neutral-200"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
            <span className="font-semibold">MENU</span>
          </button>
          
          {/* Logo centralizado */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <button onClick={() => setCurrentPage('home')} className="hover:opacity-90 transition-opacity">
              <img src={logoG1} alt="G1 - 100 Anos de Globo" className="h-10" />
            </button>
          </div>
          
          {/* Busca à direita */}
          <button className="flex items-center gap-2 text-white hover:text-neutral-200">
            <Search className="w-5 h-5" />
            <span className="font-semibold">Buscar</span>
          </button>
        </div>
      </div>

      {/* Menu Lateral (Drawer) */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Drawer Panel */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl overflow-y-auto">
            {/* Header do Menu */}
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-4 py-4 flex items-center justify-between">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-700 hover:text-neutral-900"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className="font-semibold text-neutral-900">menu g1</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-700 hover:text-neutral-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Conteúdo do Menu */}
            <nav className="py-4">
              {/* Editoriais */}
              <div className="border-b border-neutral-200">
                <button
                  onClick={() => toggleSection('editoriais')}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-700">editoriais</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-neutral-400 transition-transform ${
                      expandedSection === 'editoriais' ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedSection === 'editoriais' && (
                  <div className="bg-neutral-50 py-2">
                    {menuData.editoriais.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-6 py-2 text-sm text-neutral-600 hover:text-red-600 hover:bg-white transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Regiões */}
              <div className="border-b border-neutral-200">
                <button
                  onClick={() => toggleSection('regioes')}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-700">regiões</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-neutral-400 transition-transform ${
                      expandedSection === 'regioes' ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedSection === 'regioes' && (
                  <div className="bg-neutral-50 py-2">
                    {Object.keys(menuData.regioes).map((region) => (
                      <div key={region}>
                        <button
                          onClick={() => toggleRegion(region)}
                          className="w-full px-6 py-2 flex items-center justify-between text-sm text-neutral-600 hover:text-red-600 hover:bg-white transition-colors"
                        >
                          <span>{region}</span>
                          <ChevronRight 
                            className={`w-4 h-4 text-neutral-400 transition-transform ${
                              expandedRegion === region ? 'rotate-90' : ''
                            }`}
                          />
                        </button>
                        {expandedRegion === region && (
                          <div className="bg-white py-1">
                            {menuData.regioes[region as keyof typeof menuData.regioes].map((state) => (
                              <a
                                key={state}
                                href="#"
                                className="block px-10 py-2 text-xs text-neutral-600 hover:text-red-600 transition-colors"
                              >
                                {state}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Telejornais */}
              <div className="border-b border-neutral-200">
                <button
                  onClick={() => toggleSection('telejornais')}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-700">telejornais</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-neutral-400 transition-transform ${
                      expandedSection === 'telejornais' ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedSection === 'telejornais' && (
                  <div className="bg-neutral-50 py-2">
                    {menuData.telejornais.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-6 py-2 text-sm text-neutral-600 hover:text-red-600 hover:bg-white transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Serviços */}
              <div className="border-b border-neutral-200">
                <button
                  onClick={() => toggleSection('servicos')}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-700">serviços</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-neutral-400 transition-transform ${
                      expandedSection === 'servicos' ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedSection === 'servicos' && (
                  <div className="bg-neutral-50 py-2">
                    {menuData.servicos.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-6 py-2 text-sm text-neutral-600 hover:text-red-600 hover:bg-white transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Menu de Categorias */}
      <nav className="bg-white border-b border-neutral-200 sticky top-[60px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-8 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentPage(category.id)}
                className={`whitespace-nowrap transition-colors font-semibold relative ${
                  currentPage === category.id
                    ? 'text-red-600'
                    : 'text-neutral-700 hover:text-red-600'
                }`}
              >
                {category.name}
                {currentPage === category.id && (
                  <div className="absolute bottom-[-12px] left-0 right-0 h-0.5 bg-red-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Category header bar (shown when not on home) */}
      {currentPage !== 'home' && (
        <div className="bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 py-4 text-center">
            <h1 className="text-red-600 uppercase tracking-wide">{currentPage}</h1>
          </div>
        </div>
      )}

      {/* Conditional Page Rendering */}
      {currentPage !== 'home' ? (
        renderPage()
      ) : (
        // Home page content
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content area */}
            <div className="lg:col-span-2">
              {/* Manchete principal sem anúncios competindo */}
              <article className="mb-12">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
                  <img
                    src={mainStory.image}
                    alt={mainStory.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-sm text-neutral-600">{mainStory.category}</span>
                </div>
                <h1 className="text-red-600 mb-3 font-bold">
                  {mainStory.title}
                </h1>
                <p className="text-neutral-700">
                  {mainStory.summary}
                </p>
              </article>

              {/* Notícias secundárias com manchetes informativas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {secondaryStories.map((story, index) => (
                  <article key={index} className="group cursor-pointer">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-3">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mb-2">
                      <span className="text-sm text-neutral-600">{story.category}</span>
                    </div>
                    <h3 className="text-red-600 mb-2 group-hover:text-red-700 transition-colors font-semibold">
                      {story.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {story.summary}
                    </p>
                  </article>
                ))}
              </div>

              {/* Vídeos sobre a COP 30 */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-neutral-900">VÍDEOS: a COP 30 e o nosso futuro</h2>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded hover:bg-neutral-100">
                      ‹
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded hover:bg-neutral-100">
                      ›
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {copVideos.map((video, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-2">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <div className="w-0 h-0 border-l-8 border-l-red-600 border-y-6 border-y-transparent ml-1"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <p className="text-sm text-white bg-neutral-900 p-2 rounded-b-lg group-hover:bg-neutral-800 transition-colors">
                        {video.title}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Anúncio discreto e rotulado */}
              <div className="mb-8">
                <div className="text-xs text-neutral-500 mb-2 text-center">PUBLICIDADE</div>
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex gap-1">
                        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-orange-500 rounded-full -ml-3"></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-green-600 rounded-full"></div>
                          </div>
                          <span className="text-xl">Sicredi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assuntos em alta com manchetes informativas */}
              <section className="mb-8">
                <h2 className="mb-4 pb-2 border-b-2 border-red-600 text-neutral-900">
                  Assuntos em alta
                </h2>
                <div className="space-y-4">
                  {sidebarStories.map((story, index) => (
                    <article key={index} className="flex gap-3 pb-4 border-b border-neutral-200 last:border-0 cursor-pointer group">
                      <div className="flex-1">
                        <h3 className="text-sm text-red-600 group-hover:text-red-700 transition-colors mb-1 font-semibold">
                          {story.title}
                        </h3>
                      </div>
                      <div className="w-20 h-20 bg-neutral-200 rounded flex-shrink-0"></div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Widget de previsão do tempo */}
              <section className="bg-white rounded-lg p-4 shadow-sm mb-8">
                <h3 className="mb-3 text-neutral-900">Previsão do Tempo</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-600">Foz do Iguaçu</span>
                  <span className="text-2xl text-neutral-900">32°</span>
                </div>
                <p className="text-xs text-neutral-600 mb-3">Probabilidade de chuva: 0% 0mm</p>
                <div className="flex gap-4 text-center text-xs">
                  <div className="flex-1">
                    <div className="text-2xl mb-1">☀️</div>
                    <div className="text-neutral-600">Manhã</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl mb-1">☀️</div>
                    <div className="text-neutral-600">Tarde</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl mb-1">☁️</div>
                    <div className="text-neutral-600">Noite</div>
                  </div>
                </div>
              </section>

              {/* Economia widget */}
              <section className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-neutral-900">Economia</h3>
                  <a href="#" className="text-xs text-red-600 hover:text-red-700">
                    Veja mais →
                  </a>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-neutral-600 mb-1">Ibovespa</div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl text-neutral-900">+1,82%</span>
                    <span className="text-sm text-green-600">↑ 6,7%</span>
                  </div>
                  <div className="text-xs text-neutral-500">153.447 pts</div>
                </div>
                <div className="h-16 bg-gradient-to-r from-green-100 to-green-50 rounded flex items-end px-2 pb-2">
                  <div className="w-full h-12 border-l-2 border-b-2 border-neutral-200 relative">
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <polyline
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="2"
                        points="0,35 20,32 40,28 60,25 80,20 100,15"
                      />
                    </svg>
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </main>
      )}
    </div>
  );
}