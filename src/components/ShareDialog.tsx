import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Share2, Copy, Facebook, Twitter, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ShareDialogProps {
  title: string;
  url?: string;
}

export default function ShareDialog({ title, url = window.location.href }: ShareDialogProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copiado para a área de transferência!");
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    toast.success("Abrindo Facebook...");
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    toast.success("Abrindo Twitter...");
  };

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
    toast.success("Abrindo WhatsApp...");
  };

  const handleShareEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-neutral-700 hover:text-red-600 transition-colors rounded-md hover:bg-neutral-100">
          <Share2 className="w-4 h-4" />
          <span>Compartilhar</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Compartilhar notícia</DialogTitle>
          <DialogDescription>
            Compartilhe esta matéria nas suas redes sociais
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3">
          {/* Copiar Link */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={url}
              readOnly
              className="flex-1 px-3 py-2 text-sm border rounded-md bg-neutral-50"
            />
            <Button onClick={handleCopyLink} size="sm" variant="outline">
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          {/* Botões de Compartilhamento */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Button
              onClick={handleShareFacebook}
              variant="outline"
              className="gap-2 justify-start"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              Facebook
            </Button>
            
            <Button
              onClick={handleShareTwitter}
              variant="outline"
              className="gap-2 justify-start"
            >
              <Twitter className="w-4 h-4 text-sky-500" />
              Twitter
            </Button>
            
            <Button
              onClick={handleShareWhatsApp}
              variant="outline"
              className="gap-2 justify-start"
            >
              <MessageCircle className="w-4 h-4 text-green-600" />
              WhatsApp
            </Button>
            
            <Button
              onClick={handleShareEmail}
              variant="outline"
              className="gap-2 justify-start"
            >
              <Mail className="w-4 h-4 text-neutral-600" />
              Email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}