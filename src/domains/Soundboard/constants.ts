import { type SoundSet } from "../SoundSet/types";

export const allSoundSets: readonly SoundSet[] = [
    {
      title: 'Vicky noises',
      slug: 'vicky',
      sounds: [
        { label: 'Eeeexpensivo', url: '/soundsets/animals/cat.mp3' },
        { label: 'Yamate', url: '/soundsets/animals/chick_bird.mp3' },
        { label: 'I said Yamate', url: '/soundsets/animals/bee.mp3' },
        { label: 'Ok, finish', url: '/soundsets/animals/tiger.mp3' },
        { label: 'Okaaay', url: '/soundsets/animals/dog.mp3' },
        { label: 'Oi, oi, oi', url: '/soundsets/animals/bear.mp3' },
        { label: 'I like it like that', url: '/soundsets/animals/elephant.mp3' },
        { label: '*Cackle*', url: '/soundsets/animals/horse.mp3' },
        { label: 'EHH', url: '/soundsets/animals/donkey.mp3' },
        { label: 'Hmph', url: '/soundsets/animals/monkey.mp3' },
        { label: 'Teehee', url: '/soundsets/animals/pig.mp3' },
        { label: 'Đụ Má', url: '/soundsets/animals/whale.mp3' },
        { label: 'Who are you', url: '/soundsets/animals/sheep.mp3' },
        { label: 'My eggie leggies', url: '/soundsets/animals/owl.mp3' },
        { label: '*Yawn*', url: '/soundsets/animals/frog.mp3' },
        { label: 'Hello? It\'s for you', url: '/soundsets/animals/crickets.mp3' }
      ],
      images: [
        '/soundsets/vicky/images/vicky_banh_mi.jpg', 
        '/soundsets/vicky/images/vicky_dog.jpg', 
        '/soundsets/vicky/images/vicky_salute.jpg',
        '/soundsets/vicky/images/vicky_smirk.jpg',
        '/soundsets/vicky/images/vicky_duck.jpg',
        '/soundsets/vicky/images/vicky_middle_finger.jpg',
        '/soundsets/vicky/images/vicky_smiley.jpg',
      ],
      style: {
        page: {
          backgroundColor: '#000000',
          backgroundImage: 'url("/bg_stars.gif")'
        },
        header: {
          title: {
            color: '#00ff00',
            textShadow: '1px 1px 0 #ffff00, 0 0 10px #00ff00',
            fontFamily: '"Comic Sans MS", "Comic Sans", cursive'
          },
          logo: {
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
          }
        },
        menu: {
          button: {
            color: '#00ff00',
            textShadow: '1px 1px 0 #000000',
            backgroundColor: '#000080',
            border: '2px outset #00ffff',
            padding: '4px 12px',
            fontWeight: 'bold',
            '--hover-bg': '#000066'
          },
          dropdown: {
            background: '#000080',
            border: '3px outset #00ffff',
            boxShadow: '5px 5px 0 #000000',
            padding: '8px',
            buttonStyle: {
              color: '#00ff00',
              backgroundColor: '#000080',
              border: '2px outset #00ffff',
              padding: '4px 8px',
              width: '100%',
              fontWeight: 'bold',
              textAlign: 'center',
              '--hover-bg': '#000066'
            }
          }
        },
        buttons: {
          backgroundColor: '#000080',
          color: '#00ff00',
          border: '3px outset #00ffff',
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
          fontWeight: 'bold',
          textShadow: '1px 1px 0 #000000',
          boxShadow: '5px 5px 0 #000000',
          transform: 'none',
          '--active-transform': 'translate(2px, 2px)',
          '--active-shadow': '3px 3px 0 #000000',
          '--hover-brightness': '1.2'
        }
      }
    },
    {
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
    },
    {
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
        { label: 'Crickets', url: '/soundsets/animals/crickets.mp3' }
      ],
      images: [],
    },
  ] as const;

export function findSoundSetBySlug(slug: string): SoundSet | undefined {
  return allSoundSets.find(set => set.slug === slug);
}
