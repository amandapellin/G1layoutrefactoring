# 🎨 Componentes UI - ShadCN/UI Library

## O que é `/components/ui`?

O diretório `/components/ui` contém uma biblioteca completa de **componentes de interface prontos para uso** do **ShadCN/UI**. São componentes React acessíveis, customizáveis e estilizados com Tailwind CSS, construídos sobre **Radix UI primitives**.

---

## 🔑 Características Principais

✅ **Acessibilidade (a11y):** Todos os componentes seguem WAI-ARIA guidelines  
✅ **Customizáveis:** Aceitam className e podem ser estilizados facilmente  
✅ **Type-safe:** Totalmente tipados com TypeScript  
✅ **Composable:** Podem ser combinados para criar interfaces complexas  
✅ **Dark Mode Ready:** Suportam temas claro/escuro  
✅ **Não-opinionados:** Você possui o código, não é uma dependência npm

---

## 📦 Componentes Disponíveis (48 total)

### 🧩 Estrutura e Layout

| Componente | Descrição | Uso Comum |
|------------|-----------|-----------|
| **card.tsx** | Container com header, content e footer | Exibir informações agrupadas |
| **separator.tsx** | Linha divisória horizontal/vertical | Separar seções de conteúdo |
| **aspect-ratio.tsx** | Container com proporção fixa | Manter aspect ratio de imagens/vídeos |
| **scroll-area.tsx** | Área com scroll customizado | Listas longas com scroll estilizado |
| **resizable.tsx** | Painéis redimensionáveis | Layouts com drag-resize |
| **sidebar.tsx** | Sidebar composável e customizável | Menus laterais de navegação |

---

### 🔘 Botões e Ações

| Componente | Descrição | Variantes |
|------------|-----------|-----------|
| **button.tsx** | Botão com múltiplas variantes | `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` |
| **toggle.tsx** | Botão de alternância on/off | Ações que alternam estado |
| **toggle-group.tsx** | Grupo de toggles | Seleção múltipla tipo checkbox |

**Exemplo de uso:**
```tsx
import { Button } from "./components/ui/button";

<Button variant="default">Clique Aqui</Button>
<Button variant="destructive">Deletar</Button>
<Button variant="outline" size="sm">Pequeno</Button>
<Button variant="ghost" size="icon"><IconSearch /></Button>
```

---

### 📝 Formulários e Inputs

| Componente | Descrição | Uso Comum |
|------------|-----------|-----------|
| **input.tsx** | Campo de texto | Entradas de texto simples |
| **textarea.tsx** | Campo de texto multilinha | Comentários, descrições |
| **checkbox.tsx** | Caixa de seleção | Múltipla escolha |
| **radio-group.tsx** | Grupo de radio buttons | Escolha única |
| **switch.tsx** | Interruptor on/off | Configurações booleanas |
| **select.tsx** | Dropdown de seleção | Escolher opção de lista |
| **input-otp.tsx** | Input de código OTP | Verificação 2FA |
| **label.tsx** | Rótulo acessível | Labels para inputs |
| **form.tsx** | Sistema de formulários | Integração com React Hook Form + Zod |
| **slider.tsx** | Controle deslizante | Volume, range de valores |

**Exemplo de uso:**
```tsx
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Checkbox } from "./components/ui/checkbox";

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="seu@email.com" />
  
  <div className="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label htmlFor="terms">Aceito os termos</Label>
  </div>
</div>
```

---

### 💬 Modais e Overlays

| Componente | Descrição | Uso Comum |
|------------|-----------|-----------|
| **dialog.tsx** | Modal dialog | Confirmações, formulários |
| **alert-dialog.tsx** | Dialog de alerta/confirmação | Ações destrutivas |
| **drawer.tsx** | Panel deslizante | Menus mobile, filtros |
| **sheet.tsx** | Sidebar deslizante | Settings, configurações |
| **popover.tsx** | Popup posicionado | Menus contextuais |
| **tooltip.tsx** | Dica ao passar mouse | Informações adicionais |
| **hover-card.tsx** | Card ao passar mouse | Preview de conteúdo |

**Exemplo Dialog:**
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirmar ação</DialogTitle>
      <DialogDescription>
        Tem certeza que deseja continuar?
      </DialogDescription>
    </DialogHeader>
    {/* Conteúdo do modal */}
  </DialogContent>
</Dialog>
```

---

### 🗂️ Navegação

| Componente | Descrição | Uso Comum |
|------------|-----------|-----------|
| **navigation-menu.tsx** | Menu de navegação | Headers, menus principais |
| **menubar.tsx** | Barra de menu estilo desktop | Aplicações complexas |
| **breadcrumb.tsx** | Caminho de navegação | Mostrar hierarquia de páginas |
| **tabs.tsx** | Abas de conteúdo | Organizar informações em painéis |
| **pagination.tsx** | Controle de paginação | Listas com múltiplas páginas |
| **dropdown-menu.tsx** | Menu suspenso | Ações contextuais |
| **context-menu.tsx** | Menu com botão direito | Ações avançadas |
| **command.tsx** | Paleta de comandos | Busca e ações rápidas (Cmd+K) |

**Exemplo Tabs:**
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Visão Geral</TabsTrigger>
    <TabsTrigger value="analytics">Análises</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Conteúdo da visão geral
  </TabsContent>
  <TabsContent value="analytics">
    Conteúdo de análises
  </TabsContent>
</Tabs>
```

---

### 🎯 Feedback e Status

| Componente | Descrição | Uso Comum |
|------------|-----------|-----------|
| **alert.tsx** | Alerta de notificação | Mensagens importantes |
| **sonner.tsx** | Toast notifications | Feedback de ações |
| **badge.tsx** | Etiqueta de status | Tags, contadores |
| **progress.tsx** | Barra de progresso | Carregamento, uploads |
| **skeleton.tsx** | Placeholder animado | Loading states |
| **avatar.tsx** | Avatar de usuário | Fotos de perfil |

**Exemplo Alert:**
```tsx
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { AlertCircle } from "lucide-react";

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Erro</AlertTitle>
  <AlertDescription>
    Não foi possível processar sua solicitação.
  </AlertDescription>
</Alert>
```

**Exemplo Toast (Sonner):**
```tsx
import { toast } from "sonner@2.0.3";

// Em algum evento:
toast.success("Salvo com sucesso!");
toast.error("Ocorreu um erro");
toast.loading("Processando...");
```

---

### 📊 Dados e Visualização

| Componente | Descrição | Uso Comum |
|------------|-----------|-----------|
| **table.tsx** | Tabela responsiva | Exibir dados tabulares |
| **chart.tsx** | Gráficos com Recharts | Visualizações de dados |
| **calendar.tsx** | Calendário/Date picker | Seleção de datas |
| **accordion.tsx** | Seções expansíveis | FAQs, menus aninhados |
| **collapsible.tsx** | Conteúdo recolhível | Mostrar/ocultar seções |
| **carousel.tsx** | Carrossel de slides | Galerias de imagens |

**Exemplo Accordion:**
```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Como funciona?</AccordionTrigger>
    <AccordionContent>
      Explicação detalhada aqui...
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Quanto custa?</AccordionTrigger>
    <AccordionContent>
      Informações de preço...
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### 🛠️ Utilitários

| Arquivo | Descrição | Função |
|---------|-----------|--------|
| **utils.ts** | Função `cn()` para merge de classes | Combina classes Tailwind com conflito |
| **use-mobile.ts** | Hook para detectar mobile | `const isMobile = useMobile()` |

**utils.ts:**
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Uso do `cn()`:**
```tsx
import { cn } from "./components/ui/utils";

<div className={cn(
  "base-class",
  isActive && "active-class",
  className // prop externa
)} />
```

---

## 🎨 Sistema de Variantes (CVA)

Muitos componentes usam **Class Variance Authority (CVA)** para criar variantes tipadas:

```typescript
// Exemplo do button.tsx
const buttonVariants = cva(
  "base-classes", // Classes base sempre aplicadas
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-white",
        outline: "border bg-background",
        ghost: "hover:bg-accent",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

---

## 🔗 Dependências Principais

Os componentes ShadCN são construídos sobre:

1. **Radix UI** - Primitivas acessíveis headless
   - `@radix-ui/react-dialog`
   - `@radix-ui/react-dropdown-menu`
   - `@radix-ui/react-accordion`
   - etc.

2. **Tailwind CSS** - Estilização utility-first

3. **Class Variance Authority (CVA)** - Sistema de variantes

4. **clsx + tailwind-merge** - Merge inteligente de classes

---

## 🚀 Como Usar no Projeto G1

### ✅ Já Disponível

Todos os 48 componentes já estão instalados e prontos para usar!

### 📝 Importação

```tsx
// Componente único
import { Button } from "./components/ui/button";

// Múltiplos componentes
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";

// De dialog
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
```

### 🎯 Exemplo Real no G1

**Card de Notícia:**
```tsx
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

<Card>
  <CardHeader>
    <Badge>Política</Badge>
    <CardTitle>Senado aprova nova medida econômica</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Medida entra em vigor na próxima semana...</p>
  </CardContent>
</Card>
```

**Modal de Compartilhamento:**
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { Share2 } from "lucide-react";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="ghost" size="icon">
      <Share2 className="w-4 h-4" />
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Compartilhar Notícia</DialogTitle>
    </DialogHeader>
    {/* Opções de compartilhamento */}
  </DialogContent>
</Dialog>
```

**Toast de Sucesso:**
```tsx
import { toast } from "sonner@2.0.3";

const handleSave = () => {
  // ... lógica de salvamento
  toast.success("Notícia salva nos favoritos!");
};
```

---

## 🎨 Customização

### Estilizar com className

Todos os componentes aceitam `className` para estilização adicional:

```tsx
<Button className="bg-red-600 hover:bg-red-700">
  Botão Customizado
</Button>
```

### Modificar Tokens Globais

Edite `/styles/globals.css` para alterar cores, espaçamentos e tipografia:

```css
@theme {
  --color-primary: #c4170c; /* Vermelho G1 */
  --color-accent: #f0f0f0;
  --radius: 0.5rem;
}
```

---

## ⚠️ Regras Importantes

1. **NÃO MODIFICAR** arquivos em `/components/ui` diretamente
   - São componentes de biblioteca
   - Crie wrappers se precisar de customizações

2. **NÃO CRIAR** novos arquivos dentro de `/components/ui`
   - Este diretório é exclusivo para ShadCN

3. **USE `cn()`** para combinar classes:
   ```tsx
   // ❌ Errado
   <div className={`base ${isActive ? 'active' : ''} ${className}`} />
   
   // ✅ Correto
   <div className={cn("base", isActive && "active", className)} />
   ```

4. **COMPONENTES CONTROLADOS:**
   - Muitos componentes precisam de estado (Dialog, Select, etc.)
   - Sempre forneça `open` e `onOpenChange` para controle completo

---

## 📚 Componentes Mais Úteis para o G1

### 🔥 Top 10 Recomendados

1. **Button** - Ações em geral
2. **Card** - Cards de notícias
3. **Dialog** - Modais de confirmação
4. **Dropdown Menu** - Menus contextuais
5. **Tabs** - Organizar conteúdo por categorias
6. **Toast (Sonner)** - Feedback de ações
7. **Badge** - Tags de categorias
8. **Avatar** - Fotos de autores/colunistas
9. **Tooltip** - Dicas em ícones
10. **Skeleton** - Loading states

---

## 🔗 Recursos Adicionais

- **Documentação Oficial ShadCN:** https://ui.shadcn.com
- **Radix UI Primitives:** https://www.radix-ui.com
- **CVA Docs:** https://cva.style/docs

---

## 💡 Exemplos de Integração no Portal

### Modal de Login
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Login</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Entre na sua conta</DialogTitle>
    </DialogHeader>
    <div className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" />
      </div>
      <div>
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" />
      </div>
      <Button className="w-full">Entrar</Button>
    </div>
  </DialogContent>
</Dialog>
```

### Filtros de Notícias
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

<Tabs defaultValue="recentes">
  <TabsList>
    <TabsTrigger value="recentes">Mais Recentes</TabsTrigger>
    <TabsTrigger value="lidas">Mais Lidas</TabsTrigger>
    <TabsTrigger value="videos">Vídeos</TabsTrigger>
  </TabsList>
  
  <TabsContent value="recentes">
    {/* Notícias recentes */}
  </TabsContent>
  
  <TabsContent value="lidas">
    {/* Notícias mais lidas */}
  </TabsContent>
</Tabs>
```

---

**Última atualização:** 7 de novembro de 2025
