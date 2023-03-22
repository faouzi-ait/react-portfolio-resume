import React from 'react';
import NavLink from '../../styled-components/NavLink';
import { t } from '../../i18n/translate';
import {
  HeaderContainer,
  HomeContainer,
  TopHeader,
  SubHeader,
  Line,
} from '../styled-components-styles/HomeStyles';

import './Home.css';

function Home() {

  return (
    <HomeContainer id="home">

      <HeaderContainer>
        <TopHeader>Faouzi Aitelhara</TopHeader>
        <Line />
        <SubHeader>{t('subHeader')}</SubHeader>
        <br />
        <SubHeader>{t('subHeader2')}</SubHeader>
      </HeaderContainer>
      <NavLink index="profile">{/* <DownLink>&darr;</DownLink> */}</NavLink>
    </HomeContainer>
  );
}

export default Home;
