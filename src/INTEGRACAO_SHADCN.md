# 🎨 Guia de Integração ShadCN no Portal G1

## 📋 Componentes Criados

Criei **5 novos componentes** que integram a biblioteca ShadCN/UI ao portal G1, demonstrando funcionalidades práticas e prontas para uso.

---

## 🆕 Componentes Novos

### 1️⃣ **ShareDialog.tsx** - Modal de Compartilhamento

**Localização:** `/components/ShareDialog.tsx`

**Componentes ShadCN Utilizados:**
- Dialog (modal)
- Button
- Toast (Sonner)

**Funcionalidades:**
✅ Compartilhamento em redes sociais (Facebook, Twitter, WhatsApp, Email)  
✅ Copiar link para área de transferência  
✅ Feedback com toast notifications  
✅ Interface intuitiva e moderna

**Como usar:**
```tsx
import ShareDialog from "./components/ShareDialog";

<ShareDialog 
  title="Título da notícia"
  url="https://g1.globo.com/noticia/123"
/>
```

**Preview:**
- Botão "Compartilhar" discreto
- Modal com 4 opções de compartilhamento
- Input de URL com botão copiar
- Toast de confirmação ao copiar

---

### 2️⃣ **NewsCard.tsx** - Card de Notícia Interativo

**Localização:** `/components/NewsCard.tsx`

**Componentes ShadCN Utilizados:**
- Card (container)
- Badge (tag de categoria)
- Button
- Tooltip
- Toast

**Funcionalidades:**
✅ Modo completo (com imagem grande)  
✅ Modo compacto (thumbnail lateral)  
✅ Botão "Salvar" com tooltip  
✅ Botão "Compartilhar" integrado  
✅ Timestamp relativo  
✅ Animações hover suaves

**Como usar:**
```tsx
import NewsCard from "./components/NewsCard";

// Modo completo
<NewsCard
  title="Título da notícia"
  summary="Resumo da matéria"
  image="url-da-imagem"
  category="Política"
  timeAgo="2h atrás"
/>

// Modo compacto
<NewsCard
  title="Título"
  summary="Resumo"
  image="url"
  category="Economia"
  compact
/>
```

**Preview:**
- Card com imagem responsiva
- Badge de categoria colorido
- Ícone de relógio + timestamp
- Botões de ação (compartilhar, salvar)

---

### 3️⃣ **NewsFilters.tsx** - Sistema de Filtros Avançados

**Localização:** `/components/NewsFilters.tsx`

**Componentes ShadCN Utilizados:**
- Tabs (filtros principais)
- Dropdown Menu (ordenação e filtros)
- Badge (contadores)
- Button

**Funcionalidades:**
✅ 4 tabs principais (Recentes, Lidas, Vídeos, Opinião)  
✅ Contadores de quantidade por categoria  
✅ Dropdown de ordenação (data, relevância, visualizações)  
✅ Filtros avançados (tipo de conteúdo, período)  
✅ Sticky no scroll (fica fixo ao rolar)

**Como usar:**
```tsx
import NewsFilters from "./components/NewsFilters";

<NewsFilters
  onFilterChange={(filter) => console.log(filter)}
  onSortChange={(sort) => console.log(sort)}
/>
```

**Preview:**
- Barra branca com tabs
- Badge com contador de itens
- Ícones de ordenação e filtro
- Menus dropdown elegantes

---

### 4️⃣ **VideoPlayer.tsx** - Player de Vídeo Modal

**Localização:** `/components/VideoPlayer.tsx`

**Componentes ShadCN Utilizados:**
- Dialog (modal fullscreen)
- Badge (duração e categoria)
- Button (controles)
- Tooltip

**Funcionalidades:**
✅ Thumbnail com overlay  
✅ Play button animado  
✅ Modal com player simulado  
✅ Controles de vídeo (play, volume, fullscreen)  
✅ Badges de categoria e duração  
✅ Hover effects elegantes

**Como usar:**
```tsx
import VideoPlayer from "./components/VideoPlayer";

<VideoPlayer
  title="Título do vídeo"
  thumbnail="url-do-thumbnail"
  duration="2:15"
  category="Tecnologia"
/>
```

**Preview:**
- Card de vídeo vertical
- Play button vermelho centralizado
- Badge de duração no canto
- Modal com controles funcionais

---

### 5️⃣ **NewsletterSignup.tsx** - Formulário de Newsletter

**Localização:** `/components/NewsletterSignup.tsx`

**Componentes ShadCN Utilizados:**
- Card
- Input (email)
- Checkbox (categorias)
- Label
- Button
- Badge
- Toast

**Funcionalidades:**
✅ Input de email com validação  
✅ Seleção múltipla de categorias (checkboxes)  
✅ Badge "Novidade"  
✅ Estado de sucesso com animação  
✅ Feedback com toasts  
✅ Design com gradiente vermelho/laranja

**Como usar:**
```tsx
import NewsletterSignup from "./components/NewsletterSignup";

<NewsletterSignup />
```

**Preview:**
- Card colorido com gradiente
- Ícone de email
- 4 checkboxes de categorias
- Tela de confirmação animada

---

## 🎯 **DemoPage.tsx** - Página de Demonstração

**Localização:** `/components/DemoPage.tsx`

**Funcionalidade:**
Página completa que demonstra **TODOS os componentes** integrados funcionando juntos.

**Como acessar:**
1. Clique na aba **"🎨 Demo UI"** no menu de categorias
2. Navegue pela página para ver todos os componentes em ação

**Conteúdo da Demo:**
- NewsFilters no topo (sticky)
- Grid de NewsCards (modo completo)
- Lista de NewsCards (modo compacto)
- Grid de VideoPlayers
- NewsletterSignup na sidebar
- Toaster para notificações

---

## 🚀 Como Usar os Componentes no Projeto

### Passo 1: Importar o componente

```tsx
import ShareDialog from "./components/ShareDialog";
import NewsCard from "./components/NewsCard";
import { toast } from "sonner@2.0.3";
```

### Passo 2: Usar no JSX

```tsx
export default function MinhaPage() {
  return (
    <div>
      <NewsCard
        title="Minha notícia"
        summary="Resumo"
        image="url"
        category="Tech"
      />
      
      <ShareDialog title="Compartilhe esta notícia" />
    </div>
  );
}
```

### Passo 3: Adicionar Toaster (obrigatório para toasts)

```tsx
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div>
      {/* Seu conteúdo */}
      <Toaster position="top-right" />
    </div>
  );
}
```

---

## 📦 Dependências Incluídas

Todos os componentes ShadCN já estão configurados e prontos:

✅ **Dialog** - Modais  
✅ **Card** - Containers  
✅ **Button** - Botões  
✅ **Badge** - Tags  
✅ **Input** - Campos de texto  
✅ **Checkbox** - Caixas de seleção  
✅ **Label** - Rótulos  
✅ **Tabs** - Abas  
✅ **Dropdown Menu** - Menus suspensos  
✅ **Tooltip** - Dicas  
✅ **Toast (Sonner)** - Notificações

---

## 🎨 Exemplos de Integração

### Exemplo 1: Adicionar ShareDialog em HomePage

```tsx
// Em /components/HomePage.tsx

import ShareDialog from "./ShareDialog";

// Dentro do map de notícias:
<article>
  <img src={story.image} alt={story.title} />
  <h3>{story.title}</h3>
  <p>{story.summary}</p>
  
  {/* Adicionar botão de compartilhar */}
  <ShareDialog title={story.title} />
</article>
```

### Exemplo 2: Adicionar NewsFilters em PoliticaPage

```tsx
// Em /components/PoliticaPage.tsx

import NewsFilters from "./NewsFilters";

export default function PoliticaPage() {
  const handleFilter = (filter: string) => {
    console.log("Filtro:", filter);
    // Lógica de filtro aqui
  };

  return (
    <div>
      <NewsFilters onFilterChange={handleFilter} />
      {/* Resto do conteúdo */}
    </div>
  );
}
```

### Exemplo 3: Substituir Grid de Vídeos por VideoPlayer

```tsx
// Em /components/HomePage.tsx

import VideoPlayer from "./VideoPlayer";

const copVideos = [
  {
    title: "Enchente em Boca do Acre",
    thumbnail: "url",
    duration: "2:15",
    category: "Brasil"
  },
  // ...
];

return (
  <div className="grid grid-cols-3 gap-4">
    {copVideos.map((video, index) => (
      <VideoPlayer key={index} {...video} />
    ))}
  </div>
);
```

---

## 💡 Dicas de Uso

### Toast Notifications

```tsx
import { toast } from "sonner@2.0.3";

// Sucesso
toast.success("Ação realizada com sucesso!");

// Erro
toast.error("Algo deu errado!");

// Loading
toast.loading("Processando...");

// Com descrição
toast.success("Salvo!", {
  description: "A notícia foi salva nos favoritos."
});

// Duração customizada
toast("Mensagem temporária", { duration: 3000 });
```

### Badges Coloridas

```tsx
import { Badge } from "./components/ui/badge";

<Badge variant="default">Padrão</Badge>
<Badge variant="secondary">Secundário</Badge>
<Badge variant="destructive">Urgente</Badge>
<Badge variant="outline">Contorno</Badge>
```

### Tooltips Informativos

```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon">
        <InfoIcon />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Informação adicional aqui</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## 🔧 Customização

### Alterar Cores dos Badges

```tsx
// Badge customizado com Tailwind
<Badge className="bg-blue-100 text-blue-700">
  Tecnologia
</Badge>
```

### Customizar Botões

```tsx
import { Button } from "./components/ui/button";

<Button variant="default">Padrão</Button>
<Button variant="destructive">Deletar</Button>
<Button variant="outline" size="sm">Pequeno</Button>
<Button variant="ghost" size="icon">
  <IconShare />
</Button>
```

### Customizar Cards

```tsx
<Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo customizado
  </CardContent>
</Card>
```

---

## 📊 Tabela de Compatibilidade

| Componente | HomePage | PoliticaPage | EconomiaPage | TecnologiaPage | CategoryPage |
|------------|----------|--------------|--------------|----------------|--------------|
| ShareDialog | ✅ | ✅ | ✅ | ✅ | ✅ |
| NewsCard | ✅ | ✅ | ✅ | ✅ | ✅ |
| NewsFilters | ✅ | ✅ | ✅ | ✅ | ✅ |
| VideoPlayer | ✅ | ✅ | ⚠️ | ⚠️ | ⚠️ |
| NewsletterSignup | ✅ (sidebar) | ✅ (sidebar) | ✅ (sidebar) | ✅ (sidebar) | ✅ (sidebar) |

**Legenda:**
- ✅ Recomendado
- ⚠️ Use com moderação

---

## 🎯 Próximos Passos Sugeridos

1. **Integrar ShareDialog nas páginas de categorias**
2. **Substituir cards simples por NewsCard**
3. **Adicionar NewsFilters em páginas com muitas notícias**
4. **Implementar NewsletterSignup nas sidebars**
5. **Criar variações dos componentes para contextos específicos**

---

## 📝 Checklist de Integração

- [ ] Toaster adicionado no App.tsx
- [ ] ShareDialog testado em uma página
- [ ] NewsCard testado com dados reais
- [ ] NewsFilters com lógica de filtro implementada
- [ ] VideoPlayer integrado na home
- [ ] NewsletterSignup na sidebar
- [ ] Toasts funcionando em todas as ações
- [ ] Tooltips adicionados em botões de ação

---

## 🐛 Troubleshooting

### Toast não aparece
**Solução:** Certifique-se de adicionar `<Toaster />` no App.tsx

### Tooltip não funciona
**Solução:** Envolva com `<TooltipProvider>`

### Badge não aplica cor customizada
**Solução:** Use `className` ao invés de tentar modificar `variant`

### Dialog não fecha
**Solução:** Certifique-se de usar `DialogTrigger` e `DialogContent` corretamente

---

## 📚 Recursos Adicionais

- **Código-fonte:** Veja `/components/` para exemplos completos
- **Demo ao vivo:** Acesse a aba "🎨 Demo UI" no menu
- **Documentação ShadCN:** https://ui.shadcn.com
- **Componentes UI:** Veja `/COMPONENTS_UI.md` para referência completa

---

**Última atualização:** 7 de novembro de 2025
