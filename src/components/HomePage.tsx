import VideoPlayer from "./VideoPlayer";
import NewsletterSignup from "./NewsletterSignup";
import ShareDialog from "./ShareDialog";

export default function HomePage() {
  const mainStory = {
    category: "Conferência em Belém",
    title: "Cúpula dos Líderes: abertura política da COP 30 começa hoje com cerca de 140 países",
    summary: "Pela 1ª vez, líderes mundiais se reúnem antes do início oficial da COP para definir o tom e as prioridades que devem dominar a conferência.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&h=450&fit=crop",
    timeAgo: "15 min atrás"
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

  return (
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
            <p className="text-neutral-700 mb-3">
              {mainStory.summary}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-500">{mainStory.timeAgo}</span>
              <ShareDialog title={mainStory.title} />
            </div>
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
                <VideoPlayer
                  key={index}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  duration={video.duration}
                  category="COP 30"
                />
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

          {/* Assuntos em alta */}
          <section className="mb-8 bg-white rounded-lg p-4 shadow-sm">
            <h2 className="mb-4 pb-2 border-b-2 border-red-600 text-neutral-900">
              Assuntos em alta
            </h2>
            <div className="space-y-4">
              {sidebarStories.map((story, index) => (
                <div key={index} className="pb-4 border-b border-neutral-200 last:border-0">
                  <p className="text-sm text-red-600 hover:text-red-700 cursor-pointer">
                    {story.title}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <NewsletterSignup />
        </aside>
      </div>
    </main>
  );
}