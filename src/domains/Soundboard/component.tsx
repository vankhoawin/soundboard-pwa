import { type SoundSet } from '../SoundSet/types';
import { SoundboardPlayer } from './useSoundboardPlayer';
import { SoundboardButton } from './components/SoundboardButton/component';
import './style.css';
import { AudioCache } from '../AudioCache/AudioCache';
import { useEffect } from 'react';

export function Soundboard({
  soundSet,
  audioCacheRef,
  soundboardPlayer,
}: {
  soundSet: SoundSet;
  audioCacheRef: React.RefObject<AudioCache>;
  soundboardPlayer: SoundboardPlayer;
}) {
  useEffect(() => {
    audioCacheRef.current?.loadSoundSet('soundboard', soundSet.sounds);
  }, [audioCacheRef, soundSet]);

  return (
    <div className="soundboard-section">
      {soundSet.sounds.map((sound, i) => (
        <SoundboardButton
          key={i}
          sound={sound}
          isActive={soundboardPlayer.playingAudio?.url === sound.url}
          onPlay={soundboardPlayer.onPlay}
          style={soundSet.style?.buttons}
        />
      ))}
    </div>
  );
}
