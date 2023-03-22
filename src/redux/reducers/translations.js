import { LIGHT_MODE, DARK_MODE } from "../../types";

export const lightTheme = (state = false, action) => {
  switch (action.type) {
    case LIGHT_MODE:
      localStorage.setItem("isLightTheme", true);
      return {
        state: true,
      };
    case DARK_MODE:
      localStorage.setItem("isLightTheme", false);
      return {
        state: false,
      };
    default:
      return state;
  }
};
