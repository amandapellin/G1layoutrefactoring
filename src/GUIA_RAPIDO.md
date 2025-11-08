# ⚡ Guia Rápido - Portal G1 Redesenhado

## 🗂️ Estrutura Completa do Projeto

```
/
├── App.tsx                          # 🎯 Componente raiz (orquestrador)
│
├── styles/
│   └── globals.css                  # 🎨 Estilos globais + tokens
│
├── components/
│   │
│   ├── 📱 LAYOUT & NAVEGAÇÃO
│   ├── Header.tsx                   # Barra branca superior (portais Globo)
│   ├── RedBar.tsx                   # Barra vermelha sticky (menu/logo/busca)
│   ├── DrawerMenu.tsx               # Menu lateral deslizante
│   ├── CategoryMenu.tsx             # Menu horizontal de categorias
│   │
│   ├── 📄 PÁGINAS
│   ├── HomePage.tsx                 # Página inicial
│   ├── PoliticaPage.tsx             # Página Política (com blogs)
│   ├── EconomiaPage.tsx             # Página Economia (com indicadores)
│   ├── TecnologiaPage.tsx           # Página Tecnologia (com mais lidas)
│   ├── CategoryPage.tsx             # 🔄 Página genérica (6 categorias)
│   ├── DemoPage.tsx                 # 🎨 Demo de componentes ShadCN
│   │
│   ├── 🎨 COMPONENTES INTERATIVOS (NOVOS!)
│   ├── ShareDialog.tsx              # Modal de compartilhamento
│   ├── NewsCard.tsx                 # Card de notícia interativo
│   ├── NewsFilters.tsx              # Sistema de filtros/tabs
│   ├── VideoPlayer.tsx              # Player de vídeo modal
│   ├── NewsletterSignup.tsx         # Formulário de newsletter
│   │
│   ├── 📁 SUBDIRETÓRIOS
│   ├── ui/                          # 🔒 48 componentes ShadCN (não modificar)
│   └── figma/                       # 🔒 Componentes protegidos do sistema
│
└── 📚 DOCUMENTAÇÃO
    ├── ESTRUTURA.md                 # Arquitetura completa do projeto
    ├── COMPONENTS_UI.md             # Guia dos 48 componentes ShadCN
    ├── INTEGRACAO_SHADCN.md         # Como usar os componentes novos
    └── GUIA_RAPIDO.md               # Este arquivo
```

---

## 🚀 Começando

### 1. Executar o Projeto
O projeto já está rodando! Navegue pelas categorias no menu horizontal.

### 2. Ver Demonstração
Clique na aba **"🎨 Demo UI"** no menu de categorias para ver todos os componentes ShadCN em ação.

---

## 📍 Navegação Rápida

### Componentes de Layout

| Componente | Onde Está | O Que Faz |
|------------|-----------|-----------|
| `Header.tsx` | Linha 1 | Links globo.com, g1, ge, etc. |
| `RedBar.tsx` | Linha 2 | Menu, logo G1, busca |
| `DrawerMenu.tsx` | Lateral esquerda | 4 seções (editoriais, regiões, etc.) |
| `CategoryMenu.tsx` | Linha 3 | 11 categorias clicáveis |

### Páginas Principais

| Página | Arquivo | Características |
|--------|---------|-----------------|
| Home | `HomePage.tsx` | Manchete + 4 secundárias + vídeos |
| Política | `PoliticaPage.tsx` | 4 notícias + blogs com fotos |
| Economia | `EconomiaPage.tsx` | Indicadores mercado + mais lidas |
| Tecnologia | `TecnologiaPage.tsx` | 5 notícias + top 5 lidas |
| Brasil/Mundo/etc | `CategoryPage.tsx` | Template genérico |

### Componentes Interativos (NOVOS!)

| Componente | Arquivo | Casos de Uso |
|------------|---------|--------------|
| ShareDialog | `ShareDialog.tsx` | Compartilhar notícias |
| NewsCard | `NewsCard.tsx` | Exibir notícias (2 modos) |
| NewsFilters | `NewsFilters.tsx` | Filtrar/ordenar conteúdo |
| VideoPlayer | `VideoPlayer.tsx` | Reproduzir vídeos |
| NewsletterSignup | `NewsletterSignup.tsx` | Captura de emails |

---

## 🎯 Casos de Uso Comuns

### 1️⃣ Adicionar Botão de Compartilhar em uma Notícia

```tsx
// Em qualquer página
import ShareDialog from "./components/ShareDialog";

<article>
  <h1>{story.title}</h1>
  <ShareDialog title={story.title} />
</article>
```

### 2️⃣ Criar Card de Notícia Interativo

```tsx
import NewsCard from "./components/NewsCard";

<NewsCard
  title="Título da notícia"
  summary="Resumo"
  image="https://..."
  category="Política"
  timeAgo="2h atrás"
/>
```

### 3️⃣ Adicionar Filtros em uma Página

```tsx
import NewsFilters from "./components/NewsFilters";

<NewsFilters
  onFilterChange={(filter) => console.log(filter)}
  onSortChange={(sort) => console.log(sort)}
/>
```

### 4️⃣ Mostrar Notificação Toast

```tsx
import { toast } from "sonner@2.0.3";

// Em qualquer função:
toast.success("Notícia salva!");
toast.error("Erro ao carregar");
toast.loading("Carregando...");
```

### 5️⃣ Adicionar Formulário de Newsletter na Sidebar

```tsx
import NewsletterSignup from "./components/NewsletterSignup";

<aside>
  <NewsletterSignup />
  {/* Outros componentes da sidebar */}
</aside>
```

---

## 🔧 Modificações Comuns

### Adicionar Nova Categoria

**1. Adicionar tipo em `App.tsx` e `CategoryMenu.tsx`:**
```tsx
type PageType = '...' | 'NovaCategoria';
```

**2. Adicionar dados em `App.tsx`:**
```tsx
const categoryData = {
  'NovaCategoria': [
    { title: "...", summary: "...", image: "...", category: "..." }
  ]
};
```

**3. Adicionar no menu em `CategoryMenu.tsx`:**
```tsx
{ id: 'NovaCategoria' as PageType, name: 'Nova Categoria' }
```

### Criar Página Especializada

**1. Criar arquivo `/components/NovaPaginaPage.tsx`**

**2. Importar em `App.tsx`:**
```tsx
import NovaPaginaPage from './components/NovaPaginaPage';
```

**3. Adicionar no switch:**
```tsx
case 'NovaPagina':
  return <NovaPaginaPage />;
```

### Customizar Cores/Estilos Globais

Edite `/styles/globals.css`:
```css
@theme {
  --color-primary: #c4170c; /* Vermelho G1 */
  --color-accent: #f0f0f0;
  /* ... */
}
```

---

## 📦 Componentes ShadCN Mais Usados

### Top 10 para o Portal G1

| Componente | Importação | Uso |
|------------|-----------|-----|
| Button | `import { Button } from "./components/ui/button"` | Ações gerais |
| Card | `import { Card, CardHeader, CardContent } from "./components/ui/card"` | Containers |
| Dialog | `import { Dialog, DialogContent } from "./components/ui/dialog"` | Modais |
| Badge | `import { Badge } from "./components/ui/badge"` | Tags |
| Toast | `import { toast } from "sonner@2.0.3"` | Notificações |
| Tabs | `import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs"` | Abas |
| Input | `import { Input } from "./components/ui/input"` | Campos texto |
| Checkbox | `import { Checkbox } from "./components/ui/checkbox"` | Seleção múltipla |
| Tooltip | `import { Tooltip } from "./components/ui/tooltip"` | Dicas |
| Dropdown Menu | `import { DropdownMenu } from "./components/ui/dropdown-menu"` | Menus |

---

## 🎨 Padrões de Design

### Hierarquia Visual

```tsx
// Manchete principal
<h1 className="text-red-600 font-bold">Título Principal</h1>

// Manchete secundária
<h3 className="text-red-600 font-semibold">Título Secundário</h3>

// Categoria/Tag
<span className="text-sm text-neutral-600">Categoria</span>

// Resumo
<p className="text-neutral-700">Texto do resumo...</p>
```

### Cores do G1

```tsx
// Vermelho principal
style={{ color: '#c4170c' }}
style={{ backgroundColor: '#c4170c' }}

// Classes Tailwind
className="text-red-600"      // Títulos
className="bg-red-600"        // Backgrounds
className="hover:text-red-700" // Hover states
```

---

## 🐛 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Toast não aparece | Adicione `<Toaster />` no App.tsx |
| Componente não renderiza | Verifique se importou corretamente |
| Estilo não aplica | Use `className` do Tailwind |
| Página não muda | Verifique `setCurrentPage()` |
| Menu não abre | Verifique `setIsMenuOpen()` |

---

## 📊 Estatísticas do Projeto

- **Componentes totais:** 67
  - 14 componentes de página/layout
  - 5 componentes interativos novos
  - 48 componentes ShadCN UI
  
- **Linhas de código:** ~3.500
  - App.tsx: 180 linhas (reduzido de 650!)
  - Componentes médios: 100-150 linhas

- **Categorias:** 10 navegáveis + 1 demo

---

## 🔗 Links Úteis

### Documentação do Projeto
- `/ESTRUTURA.md` - Arquitetura completa
- `/COMPONENTS_UI.md` - Todos os 48 componentes ShadCN
- `/INTEGRACAO_SHADCN.md` - Como usar componentes novos

### Recursos Externos
- [ShadCN UI Docs](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)

---

## ✅ Checklist de Desenvolvimento

### Para Adicionar Nova Funcionalidade

- [ ] Decidir: criar componente novo ou usar existente?
- [ ] Se novo: criar em `/components/NomeComponente.tsx`
- [ ] Importar componentes ShadCN necessários
- [ ] Adicionar tipos TypeScript
- [ ] Testar em modo desenvolvimento
- [ ] Adicionar ao componente pai
- [ ] Documentar se for reutilizável

### Para Modificar Página Existente

- [ ] Identificar arquivo da página
- [ ] Fazer backup mental do código original
- [ ] Modificar apenas o necessário
- [ ] Testar navegação
- [ ] Verificar responsividade
- [ ] Confirmar que outras páginas não quebraram

---

## 🎯 Princípios "Não me Faça Pensar"

✅ **Menu específico do G1** (não genérico da Globo)  
✅ **Anúncios rotulados** ("PUBLICIDADE")  
✅ **Manchetes informativas** (dizem do que se trata)  
✅ **Hierarquia visual clara** (bold → semibold → regular)  
✅ **Navegação centralizada** (fácil de encontrar)  
✅ **Feedback imediato** (toasts, hovers, animações)  
✅ **Layout limpo** (espaço em branco adequado)

---

## 🚀 Próximos Passos Recomendados

1. **Explorar Demo:** Clique em "🎨 Demo UI" para ver componentes
2. **Integrar ShareDialog:** Adicionar em páginas de notícias
3. **Testar NewsCard:** Substituir cards simples
4. **Implementar Filtros:** Adicionar em páginas com muitas notícias
5. **Customizar:** Ajustar cores/estilos conforme necessário

---

## 💡 Dica Final

**O projeto está modular e escalável!** Cada componente é independente e pode ser reutilizado. Use os componentes ShadCN como building blocks para criar novas funcionalidades rapidamente.

---

**Precisa de ajuda?** Consulte os arquivos de documentação ou explore o código-fonte dos componentes em `/components/`.

**Última atualização:** 7 de novembro de 2025
