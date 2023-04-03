import React from 'react';
import { t } from '../../i18n/translate';
import {
  HeaderContainer,
  HomeContainer,
  TopHeader,
  SubHeader,
  SubHeader2,
  SubHeader2Container,
  Line,
} from '../styled-components-styles/HomeStyles';

function Home() {
  return (
    <HomeContainer id="home">
      <HeaderContainer>
        <TopHeader>Faouzi Aitelhara</TopHeader>
        <Line />
        <SubHeader>{t('subHeader')}</SubHeader>
        <SubHeader>{t('subHeader2')}</SubHeader>
        <SubHeader>{t('subHeaderb')}</SubHeader>
      </HeaderContainer>
      <SubHeader2Container>
        <SubHeader2>M.Sc in web application development</SubHeader2>
        <SubHeader2>Northumbria University | 2023</SubHeader2>
      </SubHeader2Container>
    </HomeContainer>
  );
}

export default Home;
