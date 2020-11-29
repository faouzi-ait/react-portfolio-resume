import { SET_LANGUAGE } from "../types";

export const languageTheme = (state = "en-US", action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      localStorage.setItem("language", action.lang);
      return {
        ...state,
        state: action.lang,
      };
    default:
      return state;
  }
};
