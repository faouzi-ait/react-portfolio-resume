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
    width: '45%',
    src: 'commerce.png',
    label: 'Fullstack E-Commerce applications based on the Amazon experience',
  },
  {
    width: '45%',
    src: 'wave.png',
    label:
      'Fullstack E-Commerce applications specialized in guitards of all kind',
  },
];

export const uiWork = [
  {
    width: '45%',
    src: 'nexter.png',
    label: 'Real estate presentation user interface',
  },
  {
    width: '45%',
    src: 'map.png',
    label: 'Building filtering map in Zurich, Switzerland',
  },
  // {
  //   width: '30%',
  //   src: 'trilio.png',
  //   label: 'Hotel resort website for holiday makers',
  // },
];
