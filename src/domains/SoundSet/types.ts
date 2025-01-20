export interface Sound {
  label: string;
  url: string;
}

export interface SoundSetStyle {
  page?: React.CSSProperties & {
    backgroundImage?: string;
  };
  header?: {
    title?: React.CSSProperties;
    logo?: React.CSSProperties;
  };
  menu?: {
    button?: React.CSSProperties & {
      '--hover-bg'?: string;
    };
    dropdown?: React.CSSProperties & {
      buttonStyle?: React.CSSProperties & {
        '--hover-bg'?: string;
      };
    };
  };
  buttons?: React.CSSProperties & {
    '--active-transform'?: string;
    '--active-shadow'?: string;
    '--hover-brightness'?: string;
  };
}
export type BouncingLogoConfig = {
  sound: string;
  images: string[];
};

export interface SoundSet {
  title: string;
  slug: string;
  sounds: Sound[];
  bouncingLogo?: BouncingLogoConfig;
  style?: SoundSetStyle;
}
