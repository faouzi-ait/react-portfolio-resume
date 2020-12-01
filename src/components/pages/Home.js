import React from 'react';
import NavLink from '../../styled-components/NavLink';
import { t } from '../../i18n/translate';
import {
  // HeroContainer,
  // Video,
  // DownLink,
  HeaderContainer,
  HomeContainer,
  TopHeader,
  SubHeader,
  Line,
} from '../styled-components-styles/HomeStyles';

import './Home.css';

function Home() {
  // useEffect(() => {
  //   document.querySelector('video').playbackRate = 0.93;
  // }, []);

  return (
    <HomeContainer id="home">
      {/* <HeroContainer>
        <Video src="/videos/bg_video.mp4" autoPlay loop muted />
      </HeroContainer> */}
      <HeaderContainer>
        <TopHeader>Faouzi Aitelhara</TopHeader>
        <Line />
        <SubHeader>{t('subHeader')}</SubHeader>
        <br />
        <SubHeader>{t('subHeader2')}</SubHeader>
      </HeaderContainer>
      <NavLink index="profile">
        {/* <DownLink>&darr;</DownLink> */}
      </NavLink>
    </HomeContainer>
  );
}

export default Home;
