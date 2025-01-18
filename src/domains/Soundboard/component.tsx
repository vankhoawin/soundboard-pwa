import { type SoundSet } from "../SoundSet/types";
import { AudioCache } from "../AudioCache/component";
import { useSoundboardPlayer } from "./hooks";
import { SoundboardButton } from "./components/SoundboardButton/component";
import './style.css';

export function Soundboard({ soundSet, audioCache }: { soundSet: SoundSet; audioCache: AudioCache }) {
    const { playingIndex, onPlay } = useSoundboardPlayer(audioCache);
  
    return (
      <div className="soundboard-section">
        {soundSet.sounds.map((sound, i) => (
          <SoundboardButton
            key={i}
            sound={sound}
            isActive={playingIndex === i}
            onPlay={onPlay}
            index={i}
            style={soundSet.style?.buttons}
          />
        ))}
      </div>
    );
  }
