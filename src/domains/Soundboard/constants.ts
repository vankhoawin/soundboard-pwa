import { type SoundSet } from "../SoundSet/types";

export const allSoundSets: readonly SoundSet[] = [
    {
      title: 'Vicky noises',
      slug: 'vicky',
      sounds: [
        { label: 'okay', url: '/soundsets/vicky/sounds/okay.m4a' },
        { label: 'teehee', url: '/soundsets/vicky/sounds/teehee.m4a' },
        { label: 'yamate', url: '/soundsets/vicky/sounds/yamate.m4a' },
        { label: 'i said yamate', url: '/soundsets/vicky/sounds/i_said_yamate.m4a' },
        { label: 'massage', url: '/soundsets/vicky/sounds/ok_sir_finish.m4a' },
        { label: 'hot pot', url: '/soundsets/vicky/sounds/hot_pot.m4a' },
        { label: 'oi, oi, oi', url: '/soundsets/vicky/sounds/oi_oi_oi.m4a' },
        { label: 'i like it like that', url: '/soundsets/vicky/sounds/i_like_it_like_that.m4a' },
        { label: 'hmph', url: '/soundsets/vicky/sounds/hmph.m4a' },
        { label: 'đụ má', url: '/soundsets/vicky/sounds/du_ma.m4a' },
        { label: 'gioi', url: '/soundsets/vicky/sounds/gioi.m4a' },
        { label: 'i\'m olright', url: '/soundsets/vicky/sounds/im_olright.m4a' },
        { label: 'who are you', url: '/soundsets/vicky/sounds/who_are_you.m4a' },
        { label: 'my eggie leggies', url: '/soundsets/vicky/sounds/my_eggie_leggies.m4a' },
        { label: '*yawn*', url: '/soundsets/vicky/sounds/yawn.m4a' },
        { label: 'bounce', url: '/soundsets/vicky/sounds/bounce.m4a' },
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
            fontFamily: '"Comic Sans MS", "Comic Sans", "Chalkboard SE", "Comic Neue", sans-serif'
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
          fontFamily: '"Comic Sans MS", "Comic Sans", "Chalkboard SE", "Comic Neue", sans-serif',
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
      style: {
        page: {
          backgroundColor: '#2c5530',
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%),
            radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)
          `,
          backgroundSize: '100px 100px'
        },
        header: {
          title: {
            color: '#ffffff',
            fontFamily: '"SF Pro Display", "Segoe UI", "Avenir Next", "Helvetica Neue", sans-serif',
            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
            textTransform: 'uppercase',
            fontWeight: '700',
            textShadow: `
              0 0 10px rgba(255,255,255,0.5),
              2px 2px 0 #1a472a
            `
          }
        },
        menu: {
          button: {
            color: '#ffffff',
            backgroundColor: '#1a472a',
            border: '2px solid #4a7856',
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: '20px',
            '--hover-bg': '#2c5530'
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
              '--hover-bg': '#2c5530'
            }
          }
        },
        buttons: {
          backgroundColor: '#4a7856',
          color: '#ffffff',
          fontFamily: '"SF Pro Display", "Segoe UI", "Avenir Next", "Helvetica Neue", sans-serif',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '12px',
          border: '3px solid #1a472a',
          boxShadow: '0 6px 0 #1a472a, 0 6px 20px rgba(0,0,0,0.2)',
          padding: '4px',
          '--active-transform': 'translateY(3px)',
          '--active-shadow': '0 3px 0 #1a472a, 0 3px 10px rgba(0,0,0,0.2)',
          '--hover-brightness': '1.1'
        }
      }
    }
] as const;

export function findSoundSetBySlug(slug: string): SoundSet | undefined {
  return allSoundSets.find(set => set.slug === slug);
}
