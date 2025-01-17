import { type SoundSet } from '../../../SoundSet/types';
import { HamburgerMenu } from '../../../Menu/component';
import './style.css';

interface HeaderProps {
  soundSet: SoundSet;
  soundSets: readonly SoundSet[];
  onSelectSet: (set: SoundSet) => void;
}

export function Header({ soundSet, soundSets, onSelectSet }: HeaderProps) {
  return (
    <div className="header">
      <HamburgerMenu 
        soundSets={soundSets} 
        onSelectSet={onSelectSet} 
      />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/favicon.svg" className="logo" alt="soundboard-pwa logo" />
        </a>
      </div>
      <h1>{soundSet.title}</h1>
    </div>
  );
} 