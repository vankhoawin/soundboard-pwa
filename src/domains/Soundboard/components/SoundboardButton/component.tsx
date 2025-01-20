import { type Sound } from '../../../SoundSet/types';
import './style.css';
import { type PlayingAudio } from '../../../AudioCache/AudioCache';

export function SoundboardButton({
  sound,
  isActive,
  onPlay,
  style,
}: {
  sound: Sound;
  isActive: boolean;
  onPlay: (playingAudio: PlayingAudio) => void;
  style?: React.CSSProperties & {
    '--active-transform'?: string;
    '--active-shadow'?: string;
    '--hover-brightness'?: string;
  };
}) {
  return (
    <button
      onClick={() => onPlay({ key: 'soundboard', url: sound.url })}
      className={`soundboard-button ${isActive ? 'playing' : ''}`}
      style={style}
    >
      <span>{sound.label}</span>
    </button>
  );
}
