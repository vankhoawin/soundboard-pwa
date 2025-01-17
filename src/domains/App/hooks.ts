import { useState, useEffect } from 'react';
import { type SoundSet } from '../SoundSet/types';
import { allSoundSets, findSoundSetBySlug } from '../Soundboard/constants';

export function useSoundSet(): [SoundSet, (set: SoundSet) => void] {
  const [currentSet, setCurrentSet] = useState<SoundSet>(allSoundSets[0]);

  useEffect(() => {
    // Get soundSet from URL on initial load
    const params = new URLSearchParams(window.location.search);
    const soundSetSlug = params.get('soundSet');
    if (soundSetSlug) {
      const soundSet = findSoundSetBySlug(soundSetSlug);
      if (soundSet) {
        setCurrentSet(soundSet);
      }
    }
  }, []);

  const handleSetChange = (set: SoundSet) => {
    setCurrentSet(set);
    // Update URL when changing sound set
    const params = new URLSearchParams(window.location.search);
    params.set('soundSet', set.slug);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  };

  return [currentSet, handleSetChange];
} 