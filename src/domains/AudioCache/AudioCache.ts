import { type SoundSet } from "../SoundSet/types";

export class AudioCache {
    private cache: Map<string, Map<string, HTMLAudioElement>> = new Map();
    private loadedSets: Set<string> = new Set();
    private readonly maxSets = 3;
    private currentSet: SoundSet;
  
    constructor(initialSet: SoundSet) {
      this.currentSet = initialSet;
      this.loadSoundSet(initialSet);
    }
  
    getAudio(index: number): HTMLAudioElement | undefined {
      if (!this.currentSet) {
        throw new Error('No sound set loaded');
      }
      const sound = this.currentSet.sounds[index];
      return this.cache.get(this.currentSet.title)?.get(sound.url);
    }
  
    hasAudio(index: number): boolean {
      if (!this.currentSet) {
        throw new Error('No sound set loaded');
      }
      const sound = this.currentSet.sounds[index];
      return this.cache.get(this.currentSet.title)?.has(sound.url) ?? false;
    }
  
    clear(): void {
      this.cache.forEach(setCache => {
        setCache.forEach(audio => {
          audio.pause();
          audio.currentTime = 0;
        });
      });
      this.cache.clear();
      this.loadedSets.clear();
    }
  
    loadSoundSet(soundSet: SoundSet): void {
      if (this.loadedSets.has(soundSet.title)) {
        this.currentSet = soundSet;
        return;
      }
  
      if (this.loadedSets.size >= this.maxSets) {
        const [oldestSet] = this.loadedSets;
        this.unloadSoundSet(oldestSet);
      }
  
      const setCache = new Map<string, HTMLAudioElement>();
      soundSet.sounds.forEach(sound => {
        const audio = new Audio(sound.url);
        setCache.set(sound.url, audio);
      });
      
      this.cache.set(soundSet.title, setCache);
      this.loadedSets.add(soundSet.title);
      this.currentSet = soundSet;
    }
  
    private unloadSoundSet(setTitle: string): void {
      const setCache = this.cache.get(setTitle);
      if (!setCache) return;
  
      setCache.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      
      this.cache.delete(setTitle);
      this.loadedSets.delete(setTitle);
    }
  }