import NewsCard from "./NewsCard";
import NewsletterSignup from "./NewsletterSignup";
import ShareDialog from "./ShareDialog";

export default function TecnologiaPage() {
  const stories = [
    {
      title: "Meta lucrou US$ 16 bilhões com anúncios de golpes e produtos ilegais em 2024, diz agência",
      summary: "Documentos internos apontam que plataformas da empresa, como Facebook e Instagram, exibiram vídeos que até 15 bilhões de anúncios de fraude. Redes do conglomerado bloqueiam contas quando eles apontam 99% de certeza de fraude.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      category: "Em Tecnologia",
      timeAgo: "20 min atrás",
      featured: true
    },
    {
      title: "'RH da pirataria' é centrais na Argentina: os detalhes da operação contra apps de streaming ilegal no Brasil",
      summary: "Serviços como My Family Cinema e TV Express faziam parte do esquema com 4 milhões de usuários no Brasil. Lançamento anual pode ter chegado ao equivalente a R$ 1 bilhão.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop",
      category: "Em Tecnologia",
      timeAgo: "1h atrás"
    },
    {
      title: "Por que a inteligência artificial não conseguia imaginar uma mulher como eu — até agora",
      summary: "Especialista analisa evolução dos sistemas de IA generativa e seus vieses históricos",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "Inteligência Artificial",
      timeAgo: "2h atrás"
    },
    {
      title: "Apple anuncia novos recursos de privacidade para iOS 18",
      summary: "Atualização traz mais controle sobre dados pessoais e localização",
      image: "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=600&h=400&fit=crop",
      category: "Tecnologia",
      timeAgo: "3h atrás"
    },
    {
      title: "Google lança nova ferramenta de busca com IA integrada",
      summary: "Recurso promete resultados mais precisos e contextualmente relevantes",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
      category: "Inteligência Artificial",
      timeAgo: "4h atrás"
    }
  ];

  const topStories = [
    "'RH da pirataria' é centrais na Argentina: os detalhes da operação contra apps de streaming ilegal no Brasil",
    "Por que a inteligência artificial não conseguia imaginar uma mulher como eu — até agora",
    "IR: calculadoras mostram quanto você deixará de pagar e o que muda para quem tem alta renda",
    "Médica presa por mandar matar farmacêutica queria assumir papel de mãe da filha da vítima, diz delegado",
    "Homens que saíram de SP para cobrar dívida no PR; polícia apura se vítimas e suspeitos têm ligação com crime organizado"
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Featured story */}
            <article className="mb-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
                <img
                  src={stories[0].image}
                  alt={stories[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-neutral-600 mb-2 block">{stories[0].category}</span>
              <h1 className="text-red-600 mb-3 font-bold">
                {stories[0].title}
              </h1>
              <p className="text-neutral-700 mb-3">{stories[0].summary}</p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-500">{stories[0].timeAgo}</span>
                <ShareDialog title={stories[0].title} />
              </div>
            </article>

            {/* Secondary stories */}
            <div className="space-y-6">
              {stories.slice(1).map((story, index) => (
                <NewsCard
                  key={index}
                  title={story.title}
                  summary={story.summary}
                  image={story.image}
                  category={story.category}
                  timeAgo={story.timeAgo}
                  compact
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Mais Lidas */}
            <section className="mb-8 bg-white rounded-lg p-4 shadow-sm">
              <h2 className="mb-4 pb-2 border-b-2 border-red-600 text-neutral-900">Mais Lidas</h2>
              <div className="space-y-4">
                {topStories.map((story, index) => (
                  <div key={index} className="flex gap-3 pb-4 border-b border-neutral-200 last:border-0">
                    <span className="text-2xl text-red-600 font-semibold">{index + 1}</span>
                    <p className="text-sm text-red-600 hover:text-red-700 cursor-pointer flex-1">
                      {story}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <NewsletterSignup />

            {/* Ad placeholder */}
            <div className="mt-8">
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
          </aside>
        </div>
      </main>
    </div>
  );
}
