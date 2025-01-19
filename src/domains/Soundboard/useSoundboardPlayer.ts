import { useState, useCallback } from "react";
import { AudioCache } from "../AudioCache/AudioCache";

export function useSoundboardPlayer(audioCache: AudioCache) {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  
    const onPlay = useCallback((index: number) => {
      const audio = audioCache.getAudio(index);
      if (!audio) return;
  
      if (playingIndex !== null) {
        const playingAudio = audioCache.getAudio(playingIndex);
        if (playingAudio) {
          playingAudio.pause();
          playingAudio.currentTime = 0;
        }
      }
  
      audio.onended = () => setPlayingIndex(null);
  
      audio.play().then(() => {
        setPlayingIndex(index);
      }).catch((error) => {
        console.error(`Error playing sound at index ${index}:`, error);
        setPlayingIndex(null);
      });
    }, [audioCache, playingIndex]);
  
    return { playingIndex, onPlay };
  }