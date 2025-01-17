import { useState, useRef, useEffect, useCallback } from 'react'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.tsx'
import './App.css'

interface Sound {
  label: string;
  url: string;
}

interface SoundSet {
  title: string;
  sounds: Sound[];
}

class AudioCache {
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
}

function SoundboardButton({ 
  sound, 
  isActive,
  onPlay,
  index
}: { 
  sound: Sound;
  isActive: boolean;
  onPlay: (index: number) => void;
  index: number;
}) {
  return (
    <button 
      onClick={() => onPlay(index)}
      className={isActive ? 'playing' : ''}
    >
      <span>{sound.label}</span>
    </button>
  );
}

function SoundboardSection({ soundSet, audioCache }: { soundSet: SoundSet; audioCache: AudioCache }) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = useCallback((index: number) => {
    const audio = audioCache.getAudio(index);
    if (!audio) return;

    if (playingIndex === index) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingIndex(null);
      return;
    }

    if (playingIndex !== null) {
      const playingAudio = audioCache.getAudio(playingIndex);
      if (playingAudio) {
        playingAudio.pause();
        playingAudio.currentTime = 0;
      }
    }

    audio.play().then(() => {
      setPlayingIndex(index);
    }).catch((error) => {
      console.error(`Error playing sound ${soundSet.sounds[index].label}:`, error);
      setPlayingIndex(null);
    });
  }, [soundSet, audioCache, playingIndex]);

  return (
    <div className="soundboard-section">
      {soundSet.sounds.map((sound, i) => (
        <SoundboardButton
          key={i}
          sound={sound}
          isActive={playingIndex === i}
          onPlay={handlePlay}
          index={i}
        />
      ))}
    </div>
  );
}

function HamburgerMenu({ 
  soundSets,
  onSelectSet 
}: { 
  soundSets: readonly SoundSet[];
  onSelectSet: (set: SoundSet) => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="hamburger-menu">
      <button 
        className="hamburger-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        ☰
      </button>
      {isOpen && (
        <div className="soundset-list">
          {soundSets.map((set, i) => (
            <button
              key={i}
              onClick={() => {
                onSelectSet(set);
                setIsOpen(false);
              }}
            >
              {set.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Make the sound sets array readonly
const allSoundSets: readonly SoundSet[] = [
  {
    title: 'Vicky Sounds',
    sounds: Array(16).fill(0).map((_, i) => ({
      label: `Sound ${i + 1}`,
      url: `/soundsets/vicky/sound${i + 1}.mp3`
    }))
  },
  {
    title: 'Animal Sounds',
    sounds: [
      { label: 'Cat', url: '/soundsets/animals/cat.mp3' },
      { label: 'Chick', url: '/soundsets/animals/chick_bird.mp3' },
      { label: 'Tiger', url: '/soundsets/animals/tiger.mp3' },
      { label: 'Dog', url: '/soundsets/animals/dog.mp3' },
      { label: 'Bear', url: '/soundsets/animals/bear.mp3' },
      { label: 'Elephant', url: '/soundsets/animals/elephant.mp3' },
      { label: 'Horse', url: '/soundsets/animals/horse.mp3' },
      { label: 'Donkey', url: '/soundsets/animals/donkey.mp3' },
      { label: 'Monkey', url: '/soundsets/animals/monkey.mp3' },
      { label: 'Pig', url: '/soundsets/animals/pig.mp3' },
      { label: 'Whale', url: '/soundsets/animals/whale.mp3' },
      { label: 'Sheep', url: '/soundsets/animals/sheep.mp3' },
      { label: 'Owl', url: '/soundsets/animals/owl.mp3' },
      { label: 'Frog', url: '/soundsets/animals/frog.mp3' },
      { label: 'Bee', url: '/soundsets/animals/bee.mp3' },
      { label: 'Crickets', url: '/soundsets/animals/crickets.mp3' }
    ]
  }
] as const;

function useAudioCache(currentSet: SoundSet): AudioCache {
  const audioCache = useRef<AudioCache>(new AudioCache(currentSet));

  useEffect(() => {
    audioCache.current.loadSoundSet(currentSet);
  }, [currentSet]);

  return audioCache.current;
}

function App() {
  const [currentSet, setCurrentSet] = useState<SoundSet>(allSoundSets[0]);
  const audioCache = useAudioCache(currentSet);

  return (
    <>
      <div className="header">
        <HamburgerMenu 
          soundSets={allSoundSets} 
          onSelectSet={setCurrentSet} 
        />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={appLogo} className="logo" alt="soundboard-pwa logo" />
          </a>
        </div>
        <h1>{currentSet.title}</h1>
      </div>
      <div className="card">
        <SoundboardSection 
          soundSet={currentSet}
          audioCache={audioCache}
        />
      </div>
      <PWABadge />
    </>
  );
}

export default App;
