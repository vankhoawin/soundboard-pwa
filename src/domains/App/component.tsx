import { Header } from './components/Header/component';
import { Card } from './components/Card/component';
import { useAudioCache } from '../AudioCache/hooks';
import { PWABadge } from '../PwaBadge/component';
import { BouncingLogo } from '../BouncingLogo/component';
import { useSoundSet } from './hooks';
import './style.css'
// import { vanNoises } from '../SoundSet/soundSets/vanNoises';
import { vickyNoises } from '../SoundSet/soundSets/vickyNoises';
import { animalNoises } from '../SoundSet/soundSets/animalNoises';
import { SoundSet } from '../SoundSet/types';

const soundSets: SoundSet[] = [
  vickyNoises,
  animalNoises,
  // vanNoises,
];

export function App() {
  const [soundSet, setSoundSet] = useSoundSet(soundSets);
  const audioCache = useAudioCache(soundSet);

  return (
    <div className="app" style={soundSet.style?.page}>
      <BouncingLogo images={soundSet.images} />
      <Header 
        soundSet={soundSet}
        soundSets={soundSets}
        onSelectSet={setSoundSet}
      />
      <Card 
        soundSet={soundSet}
        audioCache={audioCache}
      />
      <PWABadge />
    </div>
  );
}
