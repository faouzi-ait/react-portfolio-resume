import { DARK, LIGHT, BASE } from '../themes/index';
import { THEMES } from '../theme';

export const getTheme = (themeName) => {
  switch (themeName) {
    case THEMES.DARK:
      return DARK;
    case THEMES.LIGHT:
      return LIGHT;
    default:
      return BASE;
  }
};

export const fullstackWork = [
  {
    width: '30%',
    src: 'commerce.png',
    label: 'Fullstack E-Commerce applications based on the Amazon experience',
    github: 'github.svg',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/e-commerce-2-front',
    webUrl: 'https://new-online-store.netlify.app',
  },
  {
    width: '30%',
    src: 'wave.png',
    label:
      'Fullstack E-Commerce applications specialized in guitards of all kind',
    github: 'github.svg',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/waves-front',
    webUrl: 'https://wave-store.netlify.app',
  },
  {
    width: '30%',
    src: 'new-style.png',
    
    label: 'Fullstack E-Commerce applications for men and women cloting',
    github: 'github.svg',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/e-commerce-front',
    webUrl: 'https://new-style.netlify.app',
  },
];

export const uiWork = [
  {
    width: '30%',
    src: 'nexter.png',
    label: 'Real estate presentation user interface',

    github: 'github.svg',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/Nexter',
    webUrl: 'https://real-estates-agency.netlify.app',
  },
  {
    width: '30%',
    src: 'map.png',
    label: 'Building filtering map in Zurich, Switzerland',

    github: 'github.svg',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/nomoko',
    webUrl: 'https://nomoko-map.netlify.app',
  },
  {
    width: '30%',
    src: 'trillio.png',
    label: 'Hotel resort website for holiday makers',

    github: 'github.svg',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/Trillo',
    webUrl: 'https://trillo-reservation.netlify.app',
  },
];
