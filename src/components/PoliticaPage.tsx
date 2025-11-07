import NewsCard from "./NewsCard";
import NewsletterSignup from "./NewsletterSignup";
import ShareDialog from "./ShareDialog";

export default function PoliticaPage() {
  const stories = [
    {
      title: "Senadores aliados de Lula criticam decisão do presidente de prestar solidariedade a Venezuela",
      summary: "Parlamentares avaliam que gesto pode trazer desgaste político para o governo",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
      category: "Política",
      timeAgo: "30 min atrás"
    },
    {
      title: "Lula recebe mais de 40 autoridades estrangeiras para a Cúpula de Líderes da COP30; veja lista",
      summary: "Representantes de mais de 150 países estão em Belém nesta quarta (6) para o encontro preparatório da Cúpula.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      category: "Em Política",
      timeAgo: "1h atrás"
    },
    {
      title: "Câmara aprova projeto que estabelece regras para transição entre governos",
      summary: "Texto prevê prazos e procedimentos para garantir continuidade administrativa",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop",
      category: "Política",
      timeAgo: "2h atrás"
    },
    {
      title: "STF deve retomar julgamento sobre marco temporal das terras indígenas",
      summary: "Ministros analisam recursos contra decisão que invalidou a tese",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
      category: "Política",
      timeAgo: "3h atrás"
    }
  ];

  const bloggers = [
    { name: "Ana Flor", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
    { name: "Andréia Sadi", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" },
    { name: "Gerson Camarotti", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" }
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
            {/* Blogs */}
            <section className="mb-8 bg-white rounded-lg p-4 shadow-sm">
              <h2 className="mb-4 pb-2 border-b-2 border-red-600 text-neutral-900">Blogs</h2>
              <div className="space-y-4">
                {bloggers.map((blogger, index) => (
                  <div key={index} className="flex items-center gap-3 cursor-pointer hover:bg-neutral-50 p-2 rounded transition-colors">
                    <img
                      src={blogger.image}
                      alt={blogger.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <span className="text-red-600 hover:text-red-700">{blogger.name}</span>
                  </div>
                ))}
              </div>
              <button className="text-red-600 hover:text-red-700 text-sm mt-4">
                Mais Blogs →
              </button>
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
