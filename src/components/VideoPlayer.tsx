import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Play, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface VideoPlayerProps {
  title: string;
  thumbnail: string;
  duration: string;
  category?: string;
}

export default function VideoPlayer({ title, thumbnail, duration, category }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-2">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
            
            {/* Duration badge */}
            <div className="absolute bottom-3 right-3">
              <Badge variant="secondary" className="bg-black/80 text-white border-0">
                {duration}
              </Badge>
            </div>

            {/* Category badge */}
            {category && (
              <div className="absolute top-3 left-3">
                <Badge variant="destructive">{category}</Badge>
              </div>
            )}
          </div>
          
          <p className="text-sm text-white bg-neutral-900 p-3 rounded-b-lg group-hover:bg-neutral-800 transition-colors font-semibold">
            {title}
          </p>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl p-0">
        {/* Video Player Modal */}
        <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              <TooltipProvider>
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-9 h-9 inline-flex items-center justify-center rounded-md text-white hover:bg-white/20 transition-colors"
                      >
                        <Play className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isPlaying ? 'Pausar' : 'Reproduzir'}</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-9 h-9 inline-flex items-center justify-center rounded-md text-white hover:bg-white/20 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isMuted ? 'Ativar som' : 'Silenciar'}</p>
                    </TooltipContent>
                  </Tooltip>

                  <span className="text-white text-sm ml-2">{duration}</span>
                </div>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="w-9 h-9 inline-flex items-center justify-center rounded-md text-white hover:bg-white/20 transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tela cheia</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        
        {/* Video Info */}
        <div className="p-4 bg-white">
          <h3 className="text-neutral-900 mb-2">{title}</h3>
          {category && <Badge variant="secondary">{category}</Badge>}
        </div>
      </DialogContent>
    </Dialog>
  );
}