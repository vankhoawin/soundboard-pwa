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

function SoundboardSection({ soundSet }: { soundSet: SoundSet }) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<Map<number, HTMLAudioElement>>(new Map());

  // Preload all sounds when the component mounts or soundSet changes
  useEffect(() => {
    const refs = audioRefs.current;
    soundSet.sounds.forEach((sound, index) => {
      const audio = new Audio(sound.url);
      audio.addEventListener('ended', () => setPlayingIndex(null));
      refs.set(index, audio);
    });

    // Cleanup when unmounting or soundSet changes
    return () => {
      refs.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      refs.clear();
    };
  }, [soundSet]);

  const playSound = async (sound: Sound, index: number) => {
    const audio = audioRefs.current.get(index);
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
      const playingAudio = audioRefs.current.get(playingIndex);
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

// Example sound set for testing
const defaultSoundSet: SoundSet = {
  title: 'soundboard-pwa',
  sounds: Array(16).fill(0).map((_, i) => ({
    label: `Sound ${i + 1}`,
    url: `/soundsets/vicky/sound${i + 1}.mp3`
  }))
};

function App() {
  const [currentSet, setCurrentSet] = useState<SoundSet>(defaultSoundSet);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={appLogo} className="logo" alt="soundboard-pwa logo" />
        </a>
      </div>
      <h1>{currentSet.title}</h1>
      <div className="card">
        <SoundboardSection soundSet={currentSet} />
      </div>
      <PWABadge />
    </>
  );
}

export default App;
