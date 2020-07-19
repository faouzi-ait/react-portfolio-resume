import React from "react";
import { LOCALES } from "../i18n/constants";
import { setLanguage } from "../redux/actions/set_language";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { respondTo } from "../styled-components/ResponsiveUtils";
import NavigationLinks from "../components/NavigationLinks";
import sun from "./sun.svg";
import night from "./night.svg";

import {
  setLightThemeStatus,
  setDarkThemeStatus,
} from "../redux/actions/set_themes";

function ToggleOptions() {
  const dispatch = useDispatch();
  const { lightTheme } = useSelector((state) => state);

  const Container = styled.div`
    position: fixed;
    top: 7%;
    right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};
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

  return (
    <Container>
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
  );
}

export default ToggleOptions;
