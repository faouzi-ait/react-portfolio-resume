import { createStore, combineReducers, compose } from "redux";
import { languageTheme } from "./redux/reducers/language";
import { lightTheme } from "./redux/reducers/translations";

const combinedReducers = combineReducers({ languageTheme, lightTheme });
const persistedTheme = localStorage.getItem("isLightTheme");

let initialThemeState = {
  lightTheme: persistedTheme ? JSON.parse(persistedTheme) : false,
};

const store = createStore(combinedReducers, initialThemeState, compose());

store.subscribe(() => {
  const preferences = store.getState().lightTheme;
  if (!preferences) return;

  localStorage.setItem("isLightTheme", JSON.stringify(preferences));
});

export default store;
