import React from "react";
import { useSelector } from "react-redux";
import TranslationProvider from "./i18n/Provider";

import { ThemeProvider } from "styled-components";
import { THEMES } from "./theme";
import { getTheme } from "./utils/utilities";

import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Experiences from "./components/pages/Experiences";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

import MainLayoutContainer from "./styled-components/MainLayoutContainer";
import ToggleOptions from "./components/ToggleLanguage";

function App() {
  const { 
    languageTheme, 
    lightTheme } = useSelector((state) => state);
  const persistedLanguage = localStorage.getItem("language");

  return (
    <ThemeProvider
      theme={getTheme(lightTheme.state ? THEMES.LIGHT : THEMES.DARK)}
    >
      <TranslationProvider
        locale={
          persistedLanguage ? persistedLanguage : languageTheme.state || "en-us"
        }
      >
        <ToggleOptions />
        <MainLayoutContainer>
          <Home />
          <Profile />
          <Experiences />
          <Portfolio />
          <Contact />
        </MainLayoutContainer>
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;
