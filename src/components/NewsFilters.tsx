import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Filter, ArrowUpDown } from "lucide-react";

interface NewsFiltersProps {
  onFilterChange?: (filter: string) => void;
  onSortChange?: (sort: string) => void;
}

export default function NewsFilters({ onFilterChange, onSortChange }: NewsFiltersProps) {
  return (
    <div className="bg-white border-b border-neutral-200 sticky top-[140px] z-20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Tabs de Filtro */}
          <Tabs defaultValue="recentes" className="flex-1" onValueChange={onFilterChange}>
            <TabsList>
              <TabsTrigger value="recentes" className="gap-2">
                Mais Recentes
                <Badge variant="secondary" className="ml-1">147</Badge>
              </TabsTrigger>
              <TabsTrigger value="lidas" className="gap-2">
                Mais Lidas
                <Badge variant="secondary" className="ml-1">50</Badge>
              </TabsTrigger>
              <TabsTrigger value="videos" className="gap-2">
                Vídeos
                <Badge variant="secondary" className="ml-1">23</Badge>
              </TabsTrigger>
              <TabsTrigger value="opiniao">
                Opinião
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Dropdown de Ordenação */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3">
                <ArrowUpDown className="w-4 h-4" />
                Ordenar
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onSortChange?.('data-desc')}>
                Data (mais recente)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSortChange?.('data-asc')}>
                Data (mais antigo)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSortChange?.('relevancia')}>
                Relevância
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSortChange?.('visualizacoes')}>
                Mais visualizadas
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dropdown de Filtros Avançados */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3">
                <Filter className="w-4 h-4" />
                Filtros
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filtrar por tipo</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                📰 Reportagens
              </DropdownMenuItem>
              <DropdownMenuItem>
                🎥 Vídeos
              </DropdownMenuItem>
              <DropdownMenuItem>
                📊 Infográficos
              </DropdownMenuItem>
              <DropdownMenuItem>
                💬 Entrevistas
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Período</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Última hora</DropdownMenuItem>
              <DropdownMenuItem>Hoje</DropdownMenuItem>
              <DropdownMenuItem>Esta semana</DropdownMenuItem>
              <DropdownMenuItem>Este mês</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}