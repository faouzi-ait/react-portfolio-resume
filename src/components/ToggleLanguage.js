import React, { useState, useEffect } from 'react';
import { LOCALES } from '../i18n/constants';
import { setLanguage } from '../redux/actions/set_language';
import { useDispatch, useSelector } from 'react-redux';
import NavigationLinks from '../components/NavigationLinks';
import sun from '../images/sun.svg';
import night from '../images/night.svg';

import {
  setLightThemeStatus,
  setDarkThemeStatus,
} from '../redux/actions/set_themes';

import {
  Container,
  ButtonsContainer,
  MenuIcon,
  ButtonsStyle,
  Group,
  BackToTop,
} from '../components/styled-components-styles/ToggleLanguageStyles';

function ToggleOptions() {
  const dispatch = useDispatch();
  const { lightTheme } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', function (e) {
      window.pageYOffset > 790 ? setIsVisible(true) : setIsVisible(false);
    });
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Group>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        <i className="fa fa-bars"></i>
      </MenuIcon>
      {isVisible && (
        <BackToTop className="scroll-to-top" onClick={() => scrollToTop()}>
          <i class="fa fa-arrow-up"></i>
        </BackToTop>
      )}
      <Container isOpen={isOpen}>
        <NavigationLinks />
        <ButtonsContainer>
          <ButtonsStyle onClick={() => dispatch(setLanguage(LOCALES.ENGLISH))}>
            EN
          </ButtonsStyle>
          <ButtonsStyle onClick={() => dispatch(setLanguage(LOCALES.FRENCH))}>
            FR
          </ButtonsStyle>
          {!lightTheme.state && (
            <ButtonsStyle onClick={() => dispatch(setLightThemeStatus)}>
              <img src={sun} alt="sun" width="30" />
            </ButtonsStyle>
          )}
          {lightTheme.state && (
            <ButtonsStyle onClick={() => dispatch(setDarkThemeStatus)}>
              <img src={night} alt="night" width="30" />
            </ButtonsStyle>
          )}
        </ButtonsContainer>
      </Container>
    </Group>
  );
}

export default ToggleOptions;
