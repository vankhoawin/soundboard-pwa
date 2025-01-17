import { type Sound } from "../../../SoundSet/types";
import './component.css';

export function SoundboardButton({ 
    sound, 
    isActive,
    onPlay,
    index
  }: { 
    sound: Sound;
    isActive: boolean;
    onPlay: (index: number) => void;
    index: number;
  }) {
    const isActiveClass = isActive ? 'playing' : ''
    return (
      <button 
        onClick={() => onPlay(index)}
        className={`soundboard-button ${isActiveClass}`}
      >
        <span>{sound.label}</span>
      </button>
    );
  }
  