import { useState } from 'react';
import { type SoundSet } from '../SoundSet/types';
import './style.css';

export function Menu({ 
  soundSets,
  onSelectSet 
}: { 
  soundSets: readonly SoundSet[];
  onSelectSet: (set: SoundSet) => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="menu">
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