export interface Sound {
    label: string;
    url: string;
  }

export interface SoundSet {
    title: string;
    slug: string;
    sounds: Sound[];
  }
