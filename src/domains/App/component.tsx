import { useState } from 'react'
import { type SoundSet } from '../SoundSet/types';
import { Soundboard } from '../Soundboard/component';
import { useAudioCache } from '../AudioCache/hooks';
import { allSoundSets } from '../Soundboard/constants';
import { HamburgerMenu } from '../Menu/component';
import { PWABadge } from '../PwaBadge/component';
import './component.css'

export function App() {
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
            <img src="/favicon.svg" className="logo" alt="soundboard-pwa logo" />
          </a>
        </div>
        <h1>{currentSet.title}</h1>
      </div>
      <div className="card">
        <Soundboard 
          soundSet={currentSet}
          audioCache={audioCache}
        />
      </div>
      <PWABadge />
    </>
  );
}
