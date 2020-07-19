import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
import { languageTheme } from "./reducers/language";
import { lightTheme } from "./reducers/translations";

const combinedReducers = combineReducers({ languageTheme, lightTheme });
const persistedTheme = localStorage.getItem("isLightTheme");

let initialThemeState = {
  lightTheme: persistedTheme ? JSON.parse(persistedTheme) : false,
};

const store = createStore(
  combinedReducers,
  initialThemeState,
  compose(
    // applyMiddleware(logger),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  const preferences = store.getState().lightTheme;
  if (!preferences) return;

  localStorage.setItem("isLightTheme", JSON.stringify(preferences));
});

export default store;
