import { useState, useRef, useEffect } from "react";
import { Search, Menu } from "lucide-react";
import logoG1 from "@/assets/logo-g1.png";

interface RedBarProps {
  onMenuClick: () => void;
  onLogoClick: () => void;
}

export default function RedBar({ onMenuClick, onLogoClick }: RedBarProps) {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchExpanded]);

  return (
    <div
      className="sticky top-0 z-40 shadow-md"
      style={{ backgroundColor: "#c4170c" }}
    >
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
          <button
            onClick={onLogoClick}
            className="hover:opacity-90 transition-opacity focus:outline-none"
          >
            <img src={logoG1} alt="G1 - 100 Anos de Globo" className="h-10 block" />
          </button>
        </div>

        {/* Busca à direita */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 transition-all duration-300 px-3 py-1 rounded border border-white/30 ${
              searchExpanded ? "w-64" : "w-32"
            }`}
            style={{
              backgroundColor: "#a81309",
            }}
          >
            <Search className="w-4 h-4 text-white flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchValue) {
                  console.log("Buscar por:", searchValue);
                }
                if (e.key === "Escape") {
                  setSearchExpanded(false);
                  setSearchValue("");
                }
              }}
              onFocus={() => setSearchExpanded(true)}
              onBlur={() => {
                if (!searchValue) {
                  setSearchExpanded(false);
                }
              }}
              placeholder="Buscar..."
              className="bg-transparent text-white placeholder-white/60 outline-none flex-1 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
