import { DARK, LIGHT, BASE } from "../themes/index";
import { THEMES } from "../theme";

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
