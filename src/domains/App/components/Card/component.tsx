import { type SoundSet } from '../../../SoundSet/types';
import { Soundboard } from '../../../Soundboard/component';
import './style.css';
import { SoundboardPlayer } from '../../../Soundboard/useSoundboardPlayer';
import { AudioCache } from '../../../AudioCache/AudioCache';

interface CardProps {
  soundSet: SoundSet;
  audioCacheRef: React.RefObject<AudioCache>;
  soundboardPlayer: SoundboardPlayer;
}

export function Card({ soundSet, audioCacheRef, soundboardPlayer }: CardProps) {
  return (
    <div className="card">
      <Soundboard
        soundSet={soundSet}
        audioCacheRef={audioCacheRef}
        soundboardPlayer={soundboardPlayer}
      />
    </div>
  );
}
