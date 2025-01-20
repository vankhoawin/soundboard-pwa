import { type SoundSet } from '../types';

export const animalNoises: SoundSet = {
  title: 'Animal noises',
  slug: 'animals',
  sounds: [
    { label: 'Cat', url: '/soundsets/animals/cat.mp3' },
    { label: 'Chick', url: '/soundsets/animals/chick_bird.mp3' },
    { label: 'Tiger', url: '/soundsets/animals/tiger.mp3' },
    { label: 'Dog', url: '/soundsets/animals/dog.mp3' },
    { label: 'Bear', url: '/soundsets/animals/bear.mp3' },
    { label: 'Elephant', url: '/soundsets/animals/elephant.mp3' },
    { label: 'Horse', url: '/soundsets/animals/horse.mp3' },
    { label: 'Donkey', url: '/soundsets/animals/donkey.mp3' },
    { label: 'Monkey', url: '/soundsets/animals/monkey.mp3' },
    { label: 'Pig', url: '/soundsets/animals/pig.mp3' },
    { label: 'Whale', url: '/soundsets/animals/whale.mp3' },
    { label: 'Sheep', url: '/soundsets/animals/sheep.mp3' },
    { label: 'Owl', url: '/soundsets/animals/owl.mp3' },
    { label: 'Frog', url: '/soundsets/animals/frog.mp3' },
    { label: 'Bee', url: '/soundsets/animals/bee.mp3' },
    { label: 'Crickets', url: '/soundsets/animals/crickets.mp3' },
  ],
  style: {
    page: {
      backgroundColor: '#2c5530',
      backgroundImage: `
        radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%),
        radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)
      `,
      backgroundSize: '100px 100px',
    },
    header: {
      title: {
        color: '#ffffff',
        fontFamily:
          '"SF Pro Display", "Segoe UI", "Avenir Next", "Helvetica Neue", sans-serif',
        fontSize: 'clamp(1.8rem, 6vw, 3rem)',
        textTransform: 'uppercase',
        fontWeight: '700',
        textShadow: `
          0 0 10px rgba(255,255,255,0.5),
          2px 2px 0 #1a472a
        `,
      },
    },
    menu: {
      button: {
        color: '#ffffff',
        backgroundColor: '#1a472a',
        border: '2px solid #4a7856',
        borderRadius: '8px',
        padding: '8px 16px',
        fontSize: '20px',
        '--hover-bg': '#2c5530',
      },
      dropdown: {
        background: '#1a472a',
        border: '2px solid #4a7856',
        borderRadius: '8px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        padding: '8px',
        buttonStyle: {
          color: '#ffffff',
          borderRadius: '4px',
          padding: '10px',
          margin: '4px 0',
          textAlign: 'left',
          '--hover-bg': '#2c5530',
        },
      },
    },
    buttons: {
      backgroundColor: '#4a7856',
      color: '#ffffff',
      fontFamily:
        '"SF Pro Display", "Segoe UI", "Avenir Next", "Helvetica Neue", sans-serif',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '12px',
      border: '3px solid #1a472a',
      boxShadow: '0 6px 0 #1a472a, 0 6px 20px rgba(0,0,0,0.2)',
      padding: '4px',
      '--active-transform': 'translateY(3px)',
      '--active-shadow': '0 3px 0 #1a472a, 0 3px 10px rgba(0,0,0,0.2)',
      '--hover-brightness': '1.1',
    },
  },
};
