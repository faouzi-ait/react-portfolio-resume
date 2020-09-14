import React, { useState } from "react";
import { LOCALES } from "../i18n/constants";
import { setLanguage } from "../redux/actions/set_language";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { respondTo } from "../styled-components/ResponsiveUtils";
import NavigationLinks from "../components/NavigationLinks";
import sun from "../images/sun.svg";
import night from "../images/night.svg";

import {
  setLightThemeStatus,
  setDarkThemeStatus,
} from "../redux/actions/set_themes";

function ToggleOptions() {
  const dispatch = useDispatch();
  const { lightTheme } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  const Container = styled.div`
    position: fixed;
    top: 22%;
    right: 0;
    display: flex;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.color2};
    background: ${({ theme }) => theme.background2};
    z-index: 9999;
  `;

  const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `;

  const ButtonsStyle = styled.button`
    padding: 10px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      background: #fff;
    }
  `;

  const MenuIcon = styled.button`
    display: inline-block;
    position: fixed;
    top: 0%;
    right: 0%;
    padding: 0.75rem 1.5rem;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.color2};
    background: ${({ theme }) => theme.background2};
    cursor: pointer;
    z-index: 9999;

    &:hover {
      background: #30bfbf;
    }

    &:active {
      background: ${({ theme }) => theme.background2};
    }
  `;

  const Group = styled.div`
    display: flex;
    position: relative;
  `;

  return (
    <Group>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>MENU</MenuIcon>
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
