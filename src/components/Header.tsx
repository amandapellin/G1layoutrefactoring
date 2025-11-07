import { User } from 'lucide-react';

export default function Header() {
  return (
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
  );
}
