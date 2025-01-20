import { useState } from 'react';
import { type SoundSet } from '../SoundSet/types';
import './style.css';

export function Menu({
  soundSets,
  onSelectSet,
  currentSet,
}: {
  soundSets: readonly SoundSet[];
  onSelectSet: (set: SoundSet) => void;
  currentSet: SoundSet;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuStyle = currentSet.style?.menu;

  return (
    <div className="menu">
      <button
        className="hamburger-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        style={menuStyle?.button}
      >
        ☰
      </button>
      {isOpen && (
        <div className="soundset-list" style={menuStyle?.dropdown}>
          {soundSets.map((set, i) => (
            <button
              key={i}
              onClick={() => {
                onSelectSet(set);
                setIsOpen(false);
              }}
              style={menuStyle?.dropdown?.buttonStyle}
            >
              {set.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
