import { Header } from './components/Header/component';
import { Card } from './components/Card/component';
import { useAudioCache } from '../AudioCache/hooks';
import { allSoundSets } from '../Soundboard/constants';
import { PWABadge } from '../PwaBadge/component';
import { BouncingLogo } from '../BouncingLogo/component';
import { useSoundSet } from './hooks';
import './style.css'

export function App() {
  const [soundSet, setSoundSet] = useSoundSet();
  const audioCache = useAudioCache(soundSet);

  return (
    <div className="app" style={soundSet.style?.page}>
      <BouncingLogo images={soundSet.images} />
      <Header 
        soundSet={soundSet}
        soundSets={allSoundSets}
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
