import { useRef, useEffect } from "react";
import { type SoundSet } from "../SoundSet/types";
import { AudioCache } from "./AudioCache";

export function useAudioCache(currentSet: SoundSet): AudioCache {
    const audioCache = useRef<AudioCache>(new AudioCache(currentSet));
  
    useEffect(() => {
      audioCache.current.loadSoundSet(currentSet);
    }, [currentSet]);
  
    return audioCache.current;
  }