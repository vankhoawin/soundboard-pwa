import { useState } from 'react';
import { type SoundSet } from '../SoundSet/types';
import { allSoundSets, findSoundSetBySlug } from '../Soundboard/constants';

export function useSoundSet(): [SoundSet, (set: SoundSet) => void] {
  const [currentSet, setCurrentSet] = useState<SoundSet>(() => {
    const params = new URLSearchParams(window.location.search);
    const soundSetSlug = params.get('soundSet');
    const soundSetFromQuery = soundSetSlug && findSoundSetBySlug(soundSetSlug);
    return soundSetFromQuery || allSoundSets[0];
  });

  const handleSetChange = (set: SoundSet) => {
    setCurrentSet(set);
    // Update URL when changing sound set
    const params = new URLSearchParams(window.location.search);
    params.set('soundSet', set.slug);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  };

  return [currentSet, handleSetChange];
}
