import { type SoundSet } from '../types';

export const vickyNoises: SoundSet = {
  title: 'Vicky noises',
  slug: 'vicky',
  sounds: [
    { label: 'okay', url: '/soundsets/vicky/sounds/okay.m4a' },
    { label: 'teehee', url: '/soundsets/vicky/sounds/teehee.m4a' },
    { label: 'yamate', url: '/soundsets/vicky/sounds/yamate.m4a' },
    {
      label: 'i said yamate',
      url: '/soundsets/vicky/sounds/i_said_yamate.m4a',
    },
    { label: 'massage', url: '/soundsets/vicky/sounds/ok_sir_finish.m4a' },
    { label: 'hot pot', url: '/soundsets/vicky/sounds/hot_pot.m4a' },
    { label: 'oi, oi, oi, oi', url: '/soundsets/vicky/sounds/oi_oi_oi.m4a' },
    { label: 'oi yeyeyoi', url: '/soundsets/vicky/sounds/oi_yeyeyoi.m4a' },
    { label: 'hmph', url: '/soundsets/vicky/sounds/hmph.m4a' },
    { label: 'đụ má', url: '/soundsets/vicky/sounds/du_ma.m4a' },
    { label: 'gioi', url: '/soundsets/vicky/sounds/gioi.m4a' },
    { label: "i'm olright", url: '/soundsets/vicky/sounds/im_olright.m4a' },
    {
      label: 'i like it like that',
      url: '/soundsets/vicky/sounds/i_like_it_like_that.m4a',
    },
    { label: 'who are you', url: '/soundsets/vicky/sounds/who_are_you.m4a' },
    {
      label: 'my eggie leggies',
      url: '/soundsets/vicky/sounds/my_eggie_leggies.m4a',
    },
    { label: '*yawn*', url: '/soundsets/vicky/sounds/yawn.m4a' },
    { label: 'ariana', url: '/soundsets/vicky/sounds/yuh.m4a' },
    { label: 'expensivo', url: '/soundsets/vicky/sounds/expensivo.m4a' },
    { label: 'toad', url: '/soundsets/vicky/sounds/toad.m4a' },
    { label: 'bounce', url: '/soundsets/vicky/sounds/bounce.m4a' },
  ],
  bouncingLogo: {
    sound: '/soundsets/vicky/sounds/oi.m4a',
    images: [
      '/soundsets/vicky/images/vicky_banh_mi.jpg',
      '/soundsets/vicky/images/vicky_dog.jpg',
      '/soundsets/vicky/images/vicky_salute.jpg',
      '/soundsets/vicky/images/vicky_smirk.jpg',
      '/soundsets/vicky/images/vicky_duck.jpg',
      '/soundsets/vicky/images/vicky_middle_finger.jpg',
      '/soundsets/vicky/images/vicky_smiley.jpg',
      '/soundsets/vicky/images/loser.jpg',
      '/soundsets/vicky/images/middle_fingers.jpg',
      '/soundsets/vicky/images/gin.jpg',
      '/soundsets/vicky/images/finger_food.jpg',
      '/soundsets/vicky/images/beanbag.jpg',
    ],
  },
  style: {
    page: {
      backgroundColor: '#000000',
      backgroundImage: 'url("/bg_stars.gif")',
    },
    header: {
      title: {
        color: '#00ff00',
        textShadow: '1px 1px 0 #ffff00, 0 0 10px #00ff00',
        fontFamily:
          '"Comic Sans MS", "Comic Sans", "Chalkboard SE", "Comic Neue", sans-serif',
      },
      logo: {
        filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
      },
    },
    menu: {
      button: {
        color: '#00ff00',
        textShadow: '1px 1px 0 #000000',
        backgroundColor: '#000080',
        border: '2px outset #00ffff',
        padding: '4px 12px',
        fontWeight: 'bold',
        '--hover-bg': '#000066',
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
          '--hover-bg': '#000066',
        },
      },
    },
    buttons: {
      backgroundColor: '#000080',
      color: '#00ff00',
      border: '3px outset #00ffff',
      fontFamily:
        '"Comic Sans MS", "Comic Sans", "Chalkboard SE", "Comic Neue", sans-serif',
      fontWeight: 'bold',
      textShadow: '1px 1px 0 #000000',
      boxShadow: '5px 5px 0 #000000',
      transform: 'none',
      '--active-transform': 'translate(2px, 2px)',
      '--active-shadow': '3px 3px 0 #000000',
      '--hover-brightness': '1.2',
    },
  },
};
