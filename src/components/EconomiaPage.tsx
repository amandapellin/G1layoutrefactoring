export default function EconomiaPage() {
  const marketIndicators = [
    { name: "R$", value: "5,544", change: "-0.38%", trending: "down" },
    { name: "Euro Comercial", value: "R$ 6,156", change: "-0.05%", trending: "down" },
    { name: "Euro Turismo", value: "R$ 6,408", change: "-0.02%", trending: "down" },
    { name: "Ibovespa", value: "153.957 pts", change: "+0.63%", trending: "up" },
    { name: "Dólar Comercial", value: "R$ 5,532", change: "-0.45%", trending: "down" },
    { name: "Dólar Turismo", value: "R$ 5,544", change: "-0.39%", trending: "down" },
    { name: "Euro Comercial", value: "R$ 6,150", change: "-0.05%", trending: "down" }
  ];

  const stories = [
    {
      title: "Calculadoras mostram quanto você deixará de pagar e o que muda para a alta renda",
      summary: "Quanto eu posso juntar e quanto vai para o futuro? Veja perguntas e respostas",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      category: "Imposto de Renda",
      featured: true
    },
    {
      title: "Concurso da Caixa terá salários de até R$ 14,9 mil; veja lista de vagas",
      summary: "Vagas para mais procuradas para 2026",
      image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600&h=400&fit=crop",
      category: "Oportunidade"
    },
    {
      title: "Brasil segue em 2º no ranking de maiores juros reais do mundo; lista",
      summary: "País mantém segunda posição entre economias com taxas mais elevadas",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      category: "Selic"
    }
  ];

  const topStories = [
    "IR: calculadoras mostram quanto você deixará de pagar e o que muda para quem tem alta renda",
    "Por que a inteligência artificial não conseguiu imaginar uma mulher como eu — até agora",
    "Homens que saíram de SP para cobrar dívida no PR; polícia apura se vítimas e suspeitos têm ligação com crime organizado"
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Market indicators bar */}
      <div className="bg-white border-b border-neutral-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {marketIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm text-neutral-700">{indicator.name}</span>
                <span className="text-sm text-neutral-900">{indicator.value}</span>
                <span className={`text-xs ${indicator.trending === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {indicator.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Featured story */}
            <article className="mb-8">
              <span className="text-sm text-neutral-600 mb-2 block">{stories[0].category}</span>
              <h1 className="text-red-600 mb-3 font-bold">
                {stories[0].title}
              </h1>
              <p className="text-neutral-700 mb-4">{stories[0].summary}</p>
            </article>

            {/* Secondary stories grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {stories.slice(1).map((story, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-3">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm text-neutral-600 mb-2 block">{story.category}</span>
                  <h3 className="text-red-600 mb-2 group-hover:text-red-700 transition-colors font-semibold">
                    {story.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{story.summary}</p>
                </article>
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

            {/* Market widget */}
            <section className="bg-white rounded-lg p-4 shadow-sm mb-8">
              <h3 className="text-neutral-900 mb-3">Mercados</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-neutral-600 mb-1">Ibovespa</div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl text-neutral-900">153.957 pts</span>
                    <span className="text-sm text-green-600">↑ +0.63%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-1">Dólar</div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl text-neutral-900">R$ 5,544</span>
                    <span className="text-sm text-red-600">↓ -0.38%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Ad placeholder */}
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
          </aside>
        </div>
      </main>
    </div>
  );
}