import { type Sound } from "../../../SoundSet/types";
import './style.css';

export function SoundboardButton({ 
    sound, 
    isActive,
    onPlay,
    index,
    style
  }: { 
    sound: Sound;
    isActive: boolean;
    onPlay: (index: number) => void;
    index: number;
    style?: React.CSSProperties & {
      '--active-transform'?: string;
      '--active-shadow'?: string;
      '--hover-brightness'?: string;
    };
  }) {
    return (
      <button 
        onClick={() => onPlay(index)}
        className={`soundboard-button ${isActive ? 'playing' : ''}`}
        style={style}
      >
        <span>{sound.label}</span>
      </button>
    );
  }
  