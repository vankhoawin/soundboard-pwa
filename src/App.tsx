import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.tsx'
import './App.css'
import { useState, useRef, useEffect } from 'react'

interface Sound {
  label: string;
  url: string;
}

interface SoundSet {
  title: string;
  sounds: Sound[];
}

function SoundboardButton({ 
  sound, 
  isActive,
  onClick
}: { 
  sound: Sound;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className={isActive ? 'playing' : ''}
    >
      {sound.label}
    </button>
  );
}

function SoundboardSection({ 
  soundSet,
  audioCache
}: { 
  soundSet: SoundSet;
  audioCache: Map<string, HTMLAudioElement>;
}) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const playSound = async (sound: Sound, index: number) => {
    const audio = audioCache.get(sound.url);
    if (!audio) return;

    // If clicking the currently playing button, stop it
    if (playingIndex === index) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingIndex(null);
      return;
    }

    // Stop any currently playing sound
    if (playingIndex !== null) {
      const playingAudio = audioCache.get(soundSet.sounds[playingIndex].url);
      if (playingAudio) {
        playingAudio.pause();
        playingAudio.currentTime = 0;
      }
    }

    try {
      await audio.play();
      setPlayingIndex(index);
    } catch (error) {
      console.error(`Error playing sound ${sound.label}:`, error);
      setPlayingIndex(null);
    }
  };

  return (
    <div className="soundboard-section">
      {soundSet.sounds.map((sound, i) => (
        <SoundboardButton
          key={i}
          sound={sound}
          isActive={playingIndex === i}
          onClick={() => playSound(sound, i)}
        />
      ))}
    </div>
  );
}

function HamburgerMenu({ 
  soundSets,
  onSelectSet 
}: { 
  soundSets: SoundSet[];
  onSelectSet: (set: SoundSet) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

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

// Example sound sets
const allSoundSets: SoundSet[] = [
  {
    title: 'Vicky Sounds',
    sounds: Array(16).fill(0).map((_, i) => ({
      label: `Sound ${i + 1}`,
      url: `/soundsets/vicky/sound${i + 1}.mp3`
    }))
  },
  {
    title: 'Other Set',
    sounds: Array(16).fill(0).map((_, i) => ({
      label: `Other ${i + 1}`,
      url: `/soundsets/other/sound${i + 1}.mp3`
    }))
  }
];

function App() {
  const [currentSet, setCurrentSet] = useState<SoundSet>(allSoundSets[0]);
  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

  // Preload all audio files from all sound sets
  useEffect(() => {
    allSoundSets.forEach(soundSet => {
      soundSet.sounds.forEach(sound => {
        if (!audioCache.current.has(sound.url)) {
          const audio = new Audio(sound.url);
          audioCache.current.set(sound.url, audio);
        }
      });
    });

    return () => {
      audioCache.current.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      audioCache.current.clear();
    };
  }, []);

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
          audioCache={audioCache.current}
        />
      </div>
      <PWABadge />
    </>
  );
}

export default App;
