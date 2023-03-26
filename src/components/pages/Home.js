import React from 'react';
import NavLink from '../../styled-components/NavLink';
import { t } from '../../i18n/translate';
import {
  HeaderContainer,
  HomeContainer,
  TopHeader,
  SubHeader,
  SubHeader2,
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
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          transform: 'translate(-50%, -50%)',
        }}>
        <SubHeader2>M.Sc in web application development</SubHeader2>
        <div style={{ margin: '.35rem 0' }}></div>
        <SubHeader2>Northumbria University | 2023</SubHeader2>
      </div>
    </HomeContainer>
  );
}

export default Home;
