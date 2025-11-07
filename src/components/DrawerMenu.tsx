import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { useState } from 'react';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const menuData = {
    editoriais: [
      'Agro', 'Carnaval 2025', 'Carros', 'Ciência', 'Economia', 'Educação', 
      'Empreendedorismo', 'Fato ou Fake', 'Inovação', 'Loterias', 
      'Meio Ambiente', 'Monitor da Violência', 'Mundo', 'Olha que Legal',
      'Política', 'Pop & Arte', 'Saúde', 'Tecnologia', 'Trabalho e Carreira',
      'Turismo e Viagem'
    ],
    regioes: {
      'Norte': ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins'],
      'Nordeste': ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'],
      'Centro-Oeste': ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'],
      'Sudeste': ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'],
      'Sul': ['Paraná', 'Rio Grande do Sul', 'Santa Catarina']
    },
    telejornais: [
      'Jornal Nacional', 'Jornal Hoje', 'Bom Dia Brasil', 'Fantástico',
      'Globo Repórter', 'Jornal da Globo', 'SP1', 'SP2', 'RJTV',
      'Bom Dia SP', 'Bom Dia Rio'
    ],
    servicos: [
      'Previsão do Tempo', 'Loterias', 'Calculadoras', 'App G1'
    ]
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
    setExpandedRegion(null); // Reset region when changing section
  };

  const toggleRegion = (region: string) => {
    setExpandedRegion(expandedRegion === region ? null : region);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Drawer Panel */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl overflow-y-auto">
        {/* Header do Menu */}
        <div className="sticky top-0 bg-white border-b border-neutral-200 px-4 py-4 flex items-center justify-between">
          <button 
            onClick={onClose}
            className="text-neutral-700 hover:text-neutral-900"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="font-semibold text-neutral-900">menu g1</h2>
          <button 
            onClick={onClose}
            className="text-neutral-700 hover:text-neutral-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo do Menu */}
        <nav className="py-4">
          {/* Editoriais */}
          <div className="border-b border-neutral-200">
            <button
              onClick={() => toggleSection('editoriais')}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="font-semibold text-neutral-700">editoriais</span>
              <ChevronRight 
                className={`w-5 h-5 text-neutral-400 transition-transform ${
                  expandedSection === 'editoriais' ? 'rotate-90' : ''
                }`}
              />
            </button>
            {expandedSection === 'editoriais' && (
              <div className="bg-neutral-50 py-2">
                {menuData.editoriais.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-6 py-2 text-sm text-neutral-600 hover:text-red-600 hover:bg-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Regiões */}
          <div className="border-b border-neutral-200">
            <button
              onClick={() => toggleSection('regioes')}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="font-semibold text-neutral-700">regiões</span>
              <ChevronRight 
                className={`w-5 h-5 text-neutral-400 transition-transform ${
                  expandedSection === 'regioes' ? 'rotate-90' : ''
                }`}
              />
            </button>
            {expandedSection === 'regioes' && (
              <div className="bg-neutral-50 py-2">
                {Object.keys(menuData.regioes).map((region) => (
                  <div key={region}>
                    <button
                      onClick={() => toggleRegion(region)}
                      className="w-full px-6 py-2 flex items-center justify-between text-sm text-neutral-600 hover:text-red-600 hover:bg-white transition-colors"
                    >
                      <span>{region}</span>
                      <ChevronRight 
                        className={`w-4 h-4 text-neutral-400 transition-transform ${
                          expandedRegion === region ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {expandedRegion === region && (
                      <div className="bg-white py-1">
                        {menuData.regioes[region as keyof typeof menuData.regioes].map((state) => (
                          <a
                            key={state}
                            href="#"
                            className="block px-10 py-2 text-xs text-neutral-600 hover:text-red-600 transition-colors"
                          >
                            {state}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Telejornais */}
          <div className="border-b border-neutral-200">
            <button
              onClick={() => toggleSection('telejornais')}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="font-semibold text-neutral-700">telejornais</span>
              <ChevronRight 
                className={`w-5 h-5 text-neutral-400 transition-transform ${
                  expandedSection === 'telejornais' ? 'rotate-90' : ''
                }`}
              />
            </button>
            {expandedSection === 'telejornais' && (
              <div className="bg-neutral-50 py-2">
                {menuData.telejornais.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-6 py-2 text-sm text-neutral-600 hover:text-red-600 hover:bg-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Serviços */}
          <div className="border-b border-neutral-200">
            <button
              onClick={() => toggleSection('servicos')}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <span className="font-semibold text-neutral-700">serviços</span>
              <ChevronRight 
                className={`w-5 h-5 text-neutral-400 transition-transform ${
                  expandedSection === 'servicos' ? 'rotate-90' : ''
                }`}
              />
            </button>
            {expandedSection === 'servicos' && (
              <div className="bg-neutral-50 py-2">
                {menuData.servicos.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-6 py-2 text-sm text-neutral-600 hover:text-red-600 hover:bg-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
