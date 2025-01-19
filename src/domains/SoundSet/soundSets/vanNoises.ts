import { type SoundSet } from "../types";

export const vanNoises: SoundSet = {
  title: 'Van noises',
  slug: 'van',
  sounds: [
    { label: '*Wheeze laugh*', url: '/soundsets/animals/cat.mp3' },
    { label: 'Stahp it', url: '/soundsets/animals/chick_bird.mp3' },
    { label: 'BaBY', url: '/soundsets/animals/chick_bird.mp3' },
    { label: 'Okaaay', url: '/soundsets/animals/dog.mp3' },
    { label: 'Oi, oi, oi', url: '/soundsets/animals/bear.mp3' },
    { label: 'I like it like that', url: '/soundsets/animals/elephant.mp3' },
    { label: '*Cackle*', url: '/soundsets/animals/horse.mp3' },
    { label: 'EHH', url: '/soundsets/animals/donkey.mp3' },
    { label: 'What the heck', url: '/soundsets/animals/monkey.mp3' },
    { label: 'Pig', url: '/soundsets/animals/pig.mp3' },
    { label: 'Whale', url: '/soundsets/animals/whale.mp3' },
    { label: 'Sheep', url: '/soundsets/animals/sheep.mp3' },
    { label: 'Owl', url: '/soundsets/animals/owl.mp3' },
    { label: 'Frog', url: '/soundsets/animals/frog.mp3' },
    { label: 'Bee', url: '/soundsets/animals/bee.mp3' },
    { label: 'Crickets', url: '/soundsets/animals/crickets.mp3' }
  ],
  images: [],
  style: {
    page: {
      background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
      backgroundAttachment: 'fixed'
    },
    header: {
      title: {
        color: '#2d3436',
        fontFamily: '"Marker Felt", "Trattatello", "Brush Script MT", cursive',
        fontSize: 'clamp(2rem, 7vw, 3.5rem)',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        textShadow: '4px 4px 0px #ff6b6b'
      }
    },
    menu: {
      button: {
        color: '#2d3436',
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        fontSize: '24px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        '--hover-bg': '#f1f1f1'
      },
      dropdown: {
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        border: 'none',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(10px)',
        padding: '16px',
        buttonStyle: {
          color: '#2d3436',
          fontSize: '18px',
          borderRadius: '8px',
          padding: '12px',
          transition: 'all 0.2s ease',
          '--hover-bg': '#f1f1f1'
        }
      }
    },
    buttons: {
      backgroundColor: '#fff',
      color: '#2d3436',
      fontFamily: '"Marker Felt", "Trattatello", "Brush Script MT", cursive',
      fontSize: '1.1rem',
      letterSpacing: '1px',
      borderRadius: '16px',
      border: 'none',
      boxShadow: '0 8px 0 #ff6b6b, 0 15px 20px rgba(0,0,0,0.2)',
      transition: 'all 0.2s ease',
      '--active-transform': 'translateY(4px)',
      '--active-shadow': '0 4px 0 #ff6b6b, 0 8px 12px rgba(0,0,0,0.2)',
      '--hover-brightness': '0.95'
    }
  }
};
