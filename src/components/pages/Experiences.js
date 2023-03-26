import React from 'react';
import Page from '../../styled-components/Page';
import Image from '../../styled-components/Image';

import {
  Boxes,
  Project1,
  WorkTitle,
  WorkSubTitle,
  ExpertiseContainer,
} from '../styled-components-styles/ExperienceStyles';

import {
  HomeContainerLayout,
  Title,
} from '../styled-components-styles/ProfileStyles';

import { fullstackWork, uiWork } from '../../utils/utilities';

// import { t } from '../../i18n/translate';

function Experiences() {
  return (
    <Page id="experiences">
      <HomeContainerLayout>
        <Title>My Portfolio</Title>
      </HomeContainerLayout>
      <div style={{ display: 'flex', alignitems: 'center' }}>
        <WorkTitle>Full Applications |</WorkTitle>
        <Project1>E-Commerce fullstack applications</Project1>
      </div>
      <WorkSubTitle></WorkSubTitle>
      <ExpertiseContainer>
        {fullstackWork.map((item) => (
          <Boxes width={item.width}>
            <Image src={item.src} label={item.label} />
          </Boxes>
        ))}
      </ExpertiseContainer>
      <div style={{ display: 'flex', alignitems: 'center' }}>
        <WorkTitle>User Interfaces |</WorkTitle>
        <Project1>User Interfaces &amp; Maps</Project1>
      </div>
      <WorkSubTitle></WorkSubTitle>
      <ExpertiseContainer>
        {uiWork.map((item) => (
          <Boxes width={item.width}>
            <Image src={item.src} label={item.label} />
          </Boxes>
        ))}
      </ExpertiseContainer>
    </Page>
  );
}

export default Experiences;
