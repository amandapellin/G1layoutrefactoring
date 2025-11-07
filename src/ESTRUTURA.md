# 📂 Estrutura do Portal G1 Redesenhado

## Visão Geral

O projeto foi refatorado para seguir uma arquitetura modular e componentizada, separando responsabilidades e facilitando manutenção e escalabilidade.

---

## 📁 Estrutura de Arquivos

```
/
├── App.tsx                          # Componente raiz - Gerencia estado e navegação
├── styles/
│   └── globals.css                  # Estilos globais e tokens Tailwind
├── components/
│   ├── Header.tsx                   # ⭐ Header global da Globo
│   ├── RedBar.tsx                   # ⭐ Barra vermelha sticky (Menu + Logo + Busca)
│   ├── DrawerMenu.tsx               # ⭐ Menu lateral deslizante
│   ├── CategoryMenu.tsx             # ⭐ Menu horizontal de categorias
│   ├── HomePage.tsx                 # ⭐ Página inicial (home)
│   ├── CategoryPage.tsx             # 🔄 Componente genérico para categorias
│   ├── PoliticaPage.tsx             # 📄 Página especializada - Política
│   ├── EconomiaPage.tsx             # 📄 Página especializada - Economia
│   ├── TecnologiaPage.tsx           # 📄 Página especializada - Tecnologia
│   ├── figma/                       # Componentes protegidos do sistema
│   └── ui/                          # Componentes ShadCN
```

**Legenda:**
- ⭐ = Componentes de layout/navegação
- 🔄 = Componente reutilizável
- 📄 = Páginas com conteúdo único

---

## 🧩 Componentes Principais

### 1️⃣ **App.tsx** (Componente Raiz)

**Responsabilidades:**
- Gerenciamento de estado global (navegação, menu aberto/fechado)
- Roteamento entre páginas
- Orquestração de componentes principais
- Armazenamento de dados mockados para categorias genéricas

**Estado:**
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [currentPage, setCurrentPage] = useState<PageType>('home');
```

**Lógica de Navegação:**
```typescript
const renderPage = () => {
  switch (currentPage) {
    case 'home': return <HomePage />;
    case 'Política': return <PoliticaPage />;
    case 'Economia': return <EconomiaPage />;
    case 'Tecnologia': return <TecnologiaPage />;
    case 'Brasil' | 'Mundo' | ...: 
      return <CategoryPage categoryName={...} stories={...} />;
  }
};
```

---

### 2️⃣ **Header.tsx**

**Localização:** `/components/Header.tsx`

**Função:**
- Exibe barra branca superior com links para portais da Globo
- Botão "Conta Globo" no canto direito

**Conteúdo:**
- Links: globo.com, g1, ge, gshow, globoplay, g1 jogos, o globo, valor
- Ícone de usuário com texto

**Props:** Nenhuma (componente estático)

---

### 3️⃣ **RedBar.tsx**

**Localização:** `/components/RedBar.tsx`

**Função:**
- Barra vermelha sticky no topo (fica fixa ao rolar)
- Contém botão Menu, Logo G1 centralizado, e Busca

**Props:**
```typescript
interface RedBarProps {
  onMenuClick: () => void;     // Abre o drawer menu
  onLogoClick: () => void;      // Volta para home
}
```

**Estilo:** Background `#c4170c` (vermelho institucional)

---

### 4️⃣ **DrawerMenu.tsx**

**Localização:** `/components/DrawerMenu.tsx`

**Função:**
- Menu lateral deslizante (drawer) com overlay
- 4 seções hierárquicas acordeão:
  1. **Editoriais** (20 items)
  2. **Regiões** (5 regiões → 27 estados)
  3. **Telejornais** (11 programas)
  4. **Serviços** (4 links)

**Props:**
```typescript
interface DrawerMenuProps {
  isOpen: boolean;              // Controla visibilidade
  onClose: () => void;          // Fecha o drawer
}
```

**Estado Interno:**
- `expandedSection`: Qual seção está aberta
- `expandedRegion`: Qual região está expandida (sub-acordeão)

---

### 5️⃣ **CategoryMenu.tsx**

**Localização:** `/components/CategoryMenu.tsx`

**Função:**
- Menu horizontal de categorias (sticky abaixo da RedBar)
- Indicador visual da página ativa (underline vermelho)

**Props:**
```typescript
interface CategoryMenuProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}
```

**Categorias:** Home, Política, Economia, Brasil, Mundo, Tecnologia, Saúde, Esportes, Cultura, COP 30

---

### 6️⃣ **HomePage.tsx**

**Localização:** `/components/HomePage.tsx`

**Função:**
- Renderiza página inicial do G1
- Layout em 2 colunas (conteúdo principal + sidebar)

**Estrutura:**
- **Main Content:**
  - Manchete principal (destaque grande)
  - 4 notícias secundárias em grid 2x2
  - Seção de vídeos COP 30 (carrossel)
  
- **Sidebar:**
  - Anúncio Sicredi (rotulado "PUBLICIDADE")
  - Seção "Assuntos em alta" (3 links)

**Props:** Nenhuma (dados internos)

---

### 7️⃣ **CategoryPage.tsx** (Genérico)

**Localização:** `/components/CategoryPage.tsx`

**Função:**
- Componente reutilizável para categorias simples
- Usado por: Brasil, Mundo, Saúde, Esportes, Cultura, COP 30

**Props:**
```typescript
interface CategoryPageProps {
  categoryName: string;         // Nome da categoria
  stories: Story[];             // Array de notícias
}
```

**Layout:**
- Primeira notícia em destaque
- Lista de notícias secundárias (thumbnail à direita)
- Sidebar com anúncio + "Mais em [categoria]"

---

### 8️⃣ **PoliticaPage.tsx** (Especializado)

**Localização:** `/components/PoliticaPage.tsx`

**Diferencial:**
- Seção "Blogs" na sidebar com fotos de colunistas
- Lista de bloggers: Ana Flor, Andréia Sadi, Gerson Camarotti
- Botão "Mais Blogs →"

**Dados:** 4 notícias hardcoded + 3 bloggers

---

### 9️⃣ **EconomiaPage.tsx** (Especializado)

**Localização:** `/components/EconomiaPage.tsx`

**Diferencial:**
- **Barra de indicadores** no topo (antes do conteúdo):
  - Dólar, Euro, Ibovespa com variações coloridas
  - Scroll horizontal
  
- **Sidebar exclusiva:**
  - Seção "Mais Lidas" (top 3 numeradas)
  - Widget "Mercados" (Ibovespa + Dólar destacados)
  - Anúncio

**Dados:** 3 notícias + 7 indicadores de mercado

---

### 🔟 **TecnologiaPage.tsx** (Especializado)

**Localização:** `/components/TecnologiaPage.tsx`

**Diferencial:**
- Sidebar com "Mais Lidas" (5 itens numerados)
- Foco em notícias de tech/IA

**Layout:**
- Notícia principal em destaque
- Notícias secundárias em lista vertical (imagem full-width)

**Dados:** 5 notícias hardcoded + 5 items "Mais Lidas"

---

## 🔄 Fluxo de Navegação

```
Usuário clica em categoria
        ↓
CategoryMenu recebe clique
        ↓
CategoryMenu.onPageChange(newPage)
        ↓
App.setCurrentPage(newPage)
        ↓
App.renderPage() executa switch
        ↓
┌─────────────────────────────────┐
│ 'home'       → HomePage          │
│ 'Política'   → PoliticaPage      │
│ 'Economia'   → EconomiaPage      │
│ 'Tecnologia' → TecnologiaPage    │
│ 'Brasil'     → CategoryPage      │
│ 'Mundo'      → CategoryPage      │
│ 'Saúde'      → CategoryPage      │
│ 'Esportes'   → CategoryPage      │
│ 'Cultura'    → CategoryPage      │
│ 'COP 30'     → CategoryPage      │
└─────────────────────────────────┘
```

---

## 📊 Dados Mockados

### Localização

| Componente | Onde estão os dados? |
|------------|----------------------|
| HomePage | Dentro de `HomePage.tsx` |
| PoliticaPage | Dentro de `PoliticaPage.tsx` |
| EconomiaPage | Dentro de `EconomiaPage.tsx` |
| TecnologiaPage | Dentro de `TecnologiaPage.tsx` |
| CategoryPage | Recebe via props de `App.tsx` → `categoryData` |

### Estrutura de Dados (Story)

```typescript
interface Story {
  title: string;      // Manchete
  summary: string;    // Resumo/linha fina
  image: string;      // URL da imagem (Unsplash)
  category: string;   // Tag da notícia
}
```

---

## 🎨 Padrões de Design

### Hierarquia Visual

1. **Manchete Principal (h1):**
   - `font-bold` (peso bold)
   - `text-red-600`
   - Sem classes de tamanho (usa globals.css)

2. **Manchetes Secundárias (h3):**
   - `font-semibold` (peso semibold)
   - `text-red-600`
   - Hover: `text-red-700`

3. **Categorias/Tags:**
   - `text-sm text-neutral-600`

4. **Resumos:**
   - `text-neutral-700` ou `text-neutral-600`

### Componentes Visuais

- **Anúncios:** Label "PUBLICIDADE" + gradiente verde Sicredi
- **Vídeos:** Overlay com play button + duração no canto
- **Links:** Transição suave de cor no hover

---

## ✅ Vantagens da Arquitetura Atual

1. **Modularidade:** Cada componente tem responsabilidade única
2. **Reutilização:** CategoryPage usado 6x
3. **Manutenibilidade:** Código do App.tsx reduzido de ~650 para ~180 linhas
4. **Escalabilidade:** Fácil adicionar novas categorias ou componentes
5. **Separação de Dados:** Dados isolados por página/componente
6. **Testabilidade:** Componentes isolados são mais fáceis de testar

---

## 🔧 Próximas Melhorias Sugeridas

1. **Externalizar Dados:**
   - Criar `/data/stories.json`
   - Criar `/data/menu.json`

2. **Context API:**
   - Criar `NavigationContext` para evitar prop drilling
   - `ThemeContext` para temas (se necessário)

3. **Hooks Customizados:**
   - `useNavigation()` para lógica de navegação
   - `useDrawer()` para estado do menu lateral

4. **TypeScript Strict:**
   - Criar arquivo `types.ts` centralizado
   - Interfaces compartilhadas

5. **Lazy Loading:**
   - `React.lazy()` para páginas
   - Melhorar performance inicial

---

## 📝 Convenções de Nomenclatura

- **Componentes:** PascalCase (`HomePage.tsx`)
- **Props:** Interface com sufixo `Props` (`HeaderProps`)
- **Funções:** camelCase (`renderPage()`)
- **Tipos:** PascalCase (`PageType`)
- **Classes CSS:** kebab-case do Tailwind

---

## 🚀 Como Adicionar Nova Categoria

### Opção 1: Usar CategoryPage (Genérico)

1. Adicionar dados em `App.tsx → categoryData`:
```typescript
'NovaCategoria': [
  { title: "...", summary: "...", image: "...", category: "..." }
]
```

2. Adicionar no tipo `PageType`:
```typescript
type PageType = '...' | 'NovaCategoria';
```

3. Adicionar em `CategoryMenu.tsx → categories`:
```typescript
{ id: 'NovaCategoria' as PageType, name: 'Nova Categoria' }
```

### Opção 2: Criar Página Especializada

1. Criar `/components/NovaCategoriaPage.tsx`
2. Importar em `App.tsx`
3. Adicionar case no `renderPage()`:
```typescript
case 'NovaCategoria':
  return <NovaCategoriaPage />;
```

---

## 📚 Dependências de Componentes

```
App.tsx
├─ Header.tsx
├─ RedBar.tsx
│  └─ logoG1 (figma:asset)
├─ DrawerMenu.tsx
│  └─ lucide-react (ChevronRight, ChevronLeft, X)
├─ CategoryMenu.tsx
├─ HomePage.tsx
├─ PoliticaPage.tsx
├─ EconomiaPage.tsx
├─ TecnologiaPage.tsx
└─ CategoryPage.tsx
```

---

## 🎯 Princípios "Não me Faça Pensar" Aplicados

1. **✅ Menu específico do G1** (não genérico da Globo)
2. **✅ Anúncios rotulados e discretos** (sem competir com manchetes)
3. **✅ Manchetes informativas** (dizem do que se trata)
4. **✅ Hierarquia visual clara** (bold → semibold → regular)
5. **✅ Navegação centralizada** (fácil de encontrar)
6. **✅ Layout limpo** (espaço em branco adequado)

---

**Última atualização:** 7 de novembro de 2025
