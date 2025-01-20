import { Sound } from "../SoundSet/types";

export type AudioCacheKey = 'soundboard' | 'bouncingLogo';

export type PlayingAudio = {
  url: string;
  key: AudioCacheKey;
}

export class AudioCache {
    private cache: Map<AudioCacheKey, Map<string, HTMLAudioElement>> = new Map();
  
    getAudio({key, url}: PlayingAudio): HTMLAudioElement | undefined {
      const setCache = this.cache.get(key);
      if (!setCache) {
        throw new Error(`Sound set ${key} not found`);
      }
      const sound = setCache.get(url);
      if (!sound) {
        throw new Error(`Sound with URL ${url} not found in current set`);
      }
      return sound;
    }

    clear(): void {
      this.cache.forEach(setCache => {
        setCache.forEach(audio => {
          audio.pause();
          audio.currentTime = 0;
        });
      });
      this.cache.clear();
    }
  
    loadSoundSet(key: AudioCacheKey, sounds: Sound[]): void {
      if (this.cache.has(key)) {
        this.unloadSoundSet(key);
      }
  
      const setCache = new Map<string, HTMLAudioElement>();
      sounds.forEach(sound => {
        const audio = new Audio(sound.url);
        setCache.set(sound.url, audio);
      });

      this.cache.set(key, setCache);
    }
  
    private unloadSoundSet(key: AudioCacheKey): void {
      const setCache = this.cache.get(key);
      if (!setCache) return;
  
      setCache.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });

      this.cache.delete(key);
    }
  }
