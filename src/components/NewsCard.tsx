import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Bookmark, Share2, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import ShareDialog from "./ShareDialog";
import { toast } from "sonner";

interface NewsCardProps {
  title: string;
  summary: string;
  image: string;
  category: string;
  timeAgo?: string;
  compact?: boolean;
}

export default function NewsCard({
  title,
  summary,
  image,
  category,
  timeAgo = "2h atrás",
  compact = false
}: NewsCardProps) {
  const handleBookmark = () => {
    toast.success("Notícia salva nos favoritos!");
  };

  if (compact) {
    return (
      <article className="flex gap-4 pb-4 border-b border-neutral-300 hover:bg-neutral-50 p-3 rounded-lg transition-colors group">
        <div className="flex-1">
          <Badge variant="secondary" className="mb-2 text-xs">
            {category}
          </Badge>
          <h3 className="text-red-600 mb-2 group-hover:text-red-700 cursor-pointer font-semibold">
            {title}
          </h3>
          <p className="text-neutral-600 text-sm mb-2">{summary}</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {timeAgo}
            </span>
            <ShareDialog title={title} />
          </div>
        </div>
        <div className="w-32 h-24 shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </article>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="relative aspect-16/10 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleBookmark}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity w-9 h-9 flex items-center justify-center rounded-md bg-white/90 hover:bg-white shadow-sm"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Salvar nos favoritos</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {timeAgo}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <h3 className="text-red-600 group-hover:text-red-700 transition-colors font-semibold">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm">
          {summary}
        </p>
        <div className="flex items-center gap-2 pt-2">
          <ShareDialog title={title} />
          <Button onClick={handleBookmark} variant="ghost" size="sm" className="gap-2">
            <Bookmark className="w-4 h-4" />
            Salvar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}