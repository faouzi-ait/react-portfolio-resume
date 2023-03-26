import React from 'react';
import Page from '../../styled-components/Page';
import Image from '../../styled-components/Image';

import {
  Boxes,
  WorkTitle,
  WorkSubTitle,
  ExpertiseContainer,
} from '../styled-components-styles/ExperienceStyles';

import { fullstackWork, uiWork } from '../../utils/utilities';

// import { t } from '../../i18n/translate';

function Experiences() {
  return (
    <Page id="experiences">
      <WorkTitle>My Work |</WorkTitle>
      <WorkSubTitle>
        Here are various examples of my work from my personal portfolio
      </WorkSubTitle>
      <ExpertiseContainer>
        {fullstackWork.map((item) => (
          <Boxes width={item.width}>
            <Image src={item.src} />
          </Boxes>
        ))}
      </ExpertiseContainer>
      <ExpertiseContainer>
        {uiWork.map((item) => (
          <Boxes width={item.width}>
            <Image src={item.src} />
          </Boxes>
        ))}
      </ExpertiseContainer>
    </Page>
  );
}

export default Experiences;
