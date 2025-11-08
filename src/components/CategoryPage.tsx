import NewsCard from "./NewsCard";
import NewsletterSignup from "./NewsletterSignup";
import ShareDialog from "./ShareDialog";

interface Story {
  title: string;
  summary: string;
  image: string;
  category: string;
  timeAgo?: string;
}

interface CategoryPageProps {
  categoryName: string;
  stories: Story[];
}

export default function CategoryPage({ categoryName, stories }: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Featured story */}
            <article className="mb-8">
              <div className="relative aspect-[16/7] overflow-hidden rounded-lg mb-4">
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
                <span className="text-sm text-neutral-500">{stories[0].timeAgo || '1h atrás'}</span>
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
                  timeAgo={story.timeAgo || `${index + 2}h atrás`}
                  compact
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Related stories */}
            <section className="mb-8 bg-white rounded-lg p-4 shadow-sm">
              <h2 className="mb-4 pb-2 border-b-2 border-red-600 text-neutral-900">
                Mais em {categoryName}
              </h2>
              <div className="space-y-4">
                {stories.slice(0, 3).map((story, index) => (
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