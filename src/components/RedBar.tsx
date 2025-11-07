import { Search, Menu } from 'lucide-react';
import logoG1 from './../assets/logo-g1.png';

interface RedBarProps {
  onMenuClick: () => void;
  onLogoClick: () => void;
}

export default function RedBar({ onMenuClick, onLogoClick }: RedBarProps) {
  return (
    <div className="sticky top-0 z-40 shadow-md" style={{ backgroundColor: '#c4170c' }}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative">
        {/* Menu à esquerda */}
        <button 
          className="flex items-center gap-2 text-white hover:text-neutral-200"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5" />
          <span className="font-semibold">MENU</span>
        </button>
        
        {/* Logo centralizado */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <button onClick={onLogoClick} className="hover:opacity-90 transition-opacity">
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
  );
}
