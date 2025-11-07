import NewsCard from "./NewsCard";
import NewsFilters from "./NewsFilters";
import VideoPlayer from "./VideoPlayer";
import NewsletterSignup from "./NewsletterSignup";
import { Toaster } from "./ui/sonner";

export default function DemoPage() {
  const sampleNews = [
    {
      title: "Meta lucrou US$ 16 bilhões com anúncios de golpes e produtos ilegais em 2024",
      summary: "Documentos internos apontam que plataformas da empresa exibiram milhões de anúncios fraudulentos.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      category: "Tecnologia",
      timeAgo: "1h atrás"
    },
    {
      title: "Brasil apresenta plano ambicioso de preservação da Amazônia na COP 30",
      summary: "Proposta inclui metas de desmatamento zero e restauração florestal até 2030.",
      image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=600&h=400&fit=crop",
      category: "Meio Ambiente",
      timeAgo: "2h atrás"
    },
    {
      title: "Estudo aponta benefícios de exercícios físicos para saúde mental",
      summary: "Pesquisa mostra redução significativa de ansiedade e depressão com atividades regulares.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "Saúde",
      timeAgo: "3h atrás"
    },
  ];

  const compactNews = [
    {
      title: "Senado aprova nova medida econômica em votação histórica",
      summary: "Medida entra em vigor na próxima semana e deve impactar milhões de brasileiros.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=150&fit=crop",
      category: "Política",
      timeAgo: "30 min atrás"
    },
    {
      title: "Descoberta arqueológica revoluciona história da América do Sul",
      summary: "Achado pode reescrever cronologia da ocupação humana no continente.",
      image: "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?w=200&h=150&fit=crop",
      category: "Ciência",
      timeAgo: "45 min atrás"
    },
  ];

  const videos = [
    {
      title: "Enchente em Boca do Acre já afetou 14 mil pessoas",
      thumbnail: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      duration: "2:15",
      category: "Brasil"
    },
    {
      title: "Como a inteligência artificial está mudando o mercado de trabalho",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      duration: "5:42",
      category: "Tecnologia"
    },
    {
      title: "Bastidores da COP 30: o que esperar da conferência climática",
      thumbnail: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=300&fit=crop",
      duration: "3:28",
      category: "Meio Ambiente"
    },
  ];

  const handleFilterChange = (filter: string) => {
    console.log("Filtro selecionado:", filter);
  };

  const handleSortChange = (sort: string) => {
    console.log("Ordenação selecionada:", sort);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Toast Container */}
      <Toaster position="top-right" />

      {/* Filtros */}
      <NewsFilters onFilterChange={handleFilterChange} onSortChange={handleSortChange} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Seção: Notícias em Destaque */}
            <section>
              <h2 className="text-neutral-900 mb-6 pb-2 border-b-2 border-red-600">
                Notícias em Destaque
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sampleNews.map((news, index) => (
                  <NewsCard key={index} {...news} />
                ))}
              </div>
            </section>

            {/* Seção: Últimas Notícias */}
            <section>
              <h2 className="text-neutral-900 mb-6 pb-2 border-b-2 border-red-600">
                Últimas Notícias
              </h2>
              <div className="space-y-4">
                {compactNews.map((news, index) => (
                  <NewsCard key={index} {...news} compact />
                ))}
              </div>
            </section>

            {/* Seção: Vídeos */}
            <section>
              <h2 className="text-neutral-900 mb-6 pb-2 border-b-2 border-red-600">
                Vídeos em Destaque
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {videos.map((video, index) => (
                  <VideoPlayer key={index} {...video} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Newsletter Signup */}
            <NewsletterSignup />

            {/* Ad Placeholder */}
            <div className="sticky top-40">
              <div className="text-xs text-neutral-500 mb-2 text-center">PUBLICIDADE</div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-8 flex items-center justify-center h-64">
                <div className="text-white text-center">
                  <div className="flex items-center gap-3 mb-2 justify-center">
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
          </aside>
        </div>
      </main>
    </div>
  );
}
