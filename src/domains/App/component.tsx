import { Header } from './components/Header/component';
import { Card } from './components/Card/component';
import { PWABadge } from '../PwaBadge/component';
import { BouncingLogo } from '../BouncingLogo/component';
import { useSoundSet } from './hooks';
import './style.css'
// import { vanNoises } from '../SoundSet/soundSets/vanNoises';
import { vickyNoises } from '../SoundSet/soundSets/vickyNoises';
import { animalNoises } from '../SoundSet/soundSets/animalNoises';
import { SoundSet } from '../SoundSet/types';
import { useSoundboardPlayer } from '../Soundboard/useSoundboardPlayer';
import { useRef } from 'react';
import { AudioCache } from '../AudioCache/AudioCache';

const soundSets: SoundSet[] = [
  vickyNoises,
  animalNoises,
  // vanNoises,
];

const audioCache = new AudioCache();
export function App() {
  const [soundSet, setSoundSet] = useSoundSet(soundSets);
  const audioCacheRef = useRef<AudioCache>(audioCache);
  const soundboardPlayer = useSoundboardPlayer(audioCacheRef.current);

  return (
    <div className="app" style={soundSet.style?.page}>
      {soundSet.bouncingLogo && (
        <BouncingLogo
          config={soundSet.bouncingLogo} 
          audioCacheRef={audioCacheRef}
          soundboardPlayer={soundboardPlayer}
        />
      )}
      <Header 
        soundSet={soundSet}
        soundSets={soundSets}
        onSelectSet={setSoundSet}
      />
      <Card 
        soundSet={soundSet}
        audioCacheRef={audioCacheRef}
        soundboardPlayer={soundboardPlayer}
      />
      <PWABadge />
    </div>
  );
}
