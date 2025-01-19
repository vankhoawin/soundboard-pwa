import { type SoundSet } from '../../../SoundSet/types';
import { type AudioCache } from '../../../AudioCache/AudioCache';
import { Soundboard } from '../../../Soundboard/component';
import './style.css';

interface CardProps {
  soundSet: SoundSet;
  audioCache: AudioCache;
}

export function Card({ soundSet, audioCache }: CardProps) {
  return (
    <div className="card">
      <Soundboard 
        soundSet={soundSet}
        audioCache={audioCache}
      />
    </div>
  );
} 