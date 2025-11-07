type PageType = 'home' | 'Política' | 'Economia' | 'Brasil' | 'Mundo' | 'Tecnologia' | 'Saúde' | 'Esportes' | 'Cultura' | 'COP 30' | 'demo';

interface CategoryMenuProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export default function CategoryMenu({ currentPage, onPageChange }: CategoryMenuProps) {
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
    { id: 'COP 30' as PageType, name: 'COP 30' },
    { id: 'demo' as PageType, name: '🎨 Demo UI' }
  ];

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-[60px] z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onPageChange(category.id)}
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
  );
}