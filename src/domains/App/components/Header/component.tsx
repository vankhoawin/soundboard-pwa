import { type SoundSet } from '../../../SoundSet/types';
import { Menu } from '../../../Menu/component';
import './style.css';

interface HeaderProps {
  soundSet: SoundSet;
  soundSets: readonly SoundSet[];
  onSelectSet: (set: SoundSet) => void;
}

export function Header({ soundSet, soundSets, onSelectSet }: HeaderProps) {
  const headerStyle = soundSet.style?.header;
  
  return (
    <div className="header">
      <h1 style={{
        color: headerStyle?.title?.color,
        textShadow: headerStyle?.title?.textShadow
      }}>
        {soundSet.title}
      </h1>
      <Menu 
        soundSets={soundSets} 
        onSelectSet={onSelectSet}
        currentSet={soundSet}
      />
    </div>
  );
} 