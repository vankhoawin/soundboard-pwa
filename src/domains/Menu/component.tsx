import { useState } from 'react';
import { type SoundSet } from '../SoundSet/types';
import './component.css';

export function HamburgerMenu({ 
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