import { useState, useCallback } from 'react';
import { AudioCache, PlayingAudio } from '../AudioCache/AudioCache';

export type SoundboardPlayer = {
  playingAudio: PlayingAudio | null;
  onPlay: (playingAudio: PlayingAudio) => void;
};

export function useSoundboardPlayer(audioCache: AudioCache): SoundboardPlayer {
  const [playingAudio, setPlayingAudio] = useState<PlayingAudio | null>(null);

  const onPlay = useCallback(
    (newPlayingAudio: PlayingAudio) => {
      const audio = audioCache.getAudio(newPlayingAudio);
      if (!audio) return;

      const currentlyPlayingAudio =
        playingAudio && audioCache.getAudio(playingAudio);
      if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
      }

      audio.onended = () => setPlayingAudio(null);

      audio
        .play()
        .then(() => {
          setPlayingAudio(newPlayingAudio);
        })
        .catch((error) => {
          console.error(
            `Error playing sound at index ${newPlayingAudio.url}:`,
            error,
          );
          setPlayingAudio(null);
        });
    },
    [audioCache, playingAudio],
  );

  return { playingAudio, onPlay };
}
