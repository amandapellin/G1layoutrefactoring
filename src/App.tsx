import { useState } from 'react';
import Header from './components/Header';
import RedBar from './components/RedBar';
import DrawerMenu from './components/DrawerMenu';
import CategoryMenu from './components/CategoryMenu';
import HomePage from './components/HomePage';
import PoliticaPage from './components/PoliticaPage';
import EconomiaPage from './components/EconomiaPage';
import TecnologiaPage from './components/TecnologiaPage';
import CategoryPage from './components/CategoryPage';
import DemoPage from './components/DemoPage';
import { Toaster } from './components/ui/sonner';

type PageType = 'home' | 'Política' | 'Economia' | 'Brasil' | 'Mundo' | 'Tecnologia' | 'Saúde' | 'Esportes' | 'Cultura' | 'COP 30';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Data for categories that use the generic CategoryPage component
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
      case 'home':
        return <HomePage />;
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
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header Global da Globo */}
      <Header />

      {/* Barra Vermelha com Menu, Logo e Busca */}
      <RedBar 
        onMenuClick={() => setIsMenuOpen(true)}
        onLogoClick={() => setCurrentPage('home')}
      />

      {/* Menu Lateral (Drawer) */}
      <DrawerMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Menu de Categorias */}
      <CategoryMenu 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* Título da Página (quando não for home) */}
      {currentPage !== 'home' && (
        <div className="bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 py-4 text-center">
            <h1 className="text-red-600 uppercase tracking-wide">{currentPage}</h1>
          </div>
        </div>
      )}

      {/* Renderização da Página Atual */}
      {renderPage()}
      <Toaster />
    </div>
  );
}