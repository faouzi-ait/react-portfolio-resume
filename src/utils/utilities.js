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
  { width: '45%', src: 'commerce.png' },
  { width: '45%', src: 'wave.png' },
];

export const uiWork = [
  { width: '30%', src: 'trilio.png' },
  { width: '30%', src: 'nexter.png' },
  { width: '30%', src: 'map.png' },
];
