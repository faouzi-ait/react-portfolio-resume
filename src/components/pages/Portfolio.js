import React from 'react';
import Page from '../../styled-components/Page';
import Image from '../../styled-components/Image';

import {
  Boxes,
  OverlayContainer,
  ExpertiseContainer,
} from '../styled-components-styles/PortfolioStyles';

import {
  HomeContainerLayout,
  Title,
} from '../styled-components-styles/ProfileStyles';

// import { fullstackWork, uiWork } from '../../utils/utilities';

// import { t } from '../../i18n/translate';

function Portfolio() {
  return (
    <Page id="experiences">
      <HomeContainerLayout>
        <Title>My Portfolio</Title>
      </HomeContainerLayout>
      <ExpertiseContainer>
        <Boxes width={'45%'}>
          <Image src={'commerce.png'} />
          <OverlayContainer>
            <p>
              Fullstack E-Commerce applications based on the Amazon experience
            </p>
          </OverlayContainer>
        </Boxes>
        <Boxes width={'45%'}>
          <Image src={'wave.png'} />
          <OverlayContainer>
            <p>
              Fullstack E-Commerce applications specialized in guitards of all
              kind
            </p>
          </OverlayContainer>
        </Boxes>
      </ExpertiseContainer>
      <ExpertiseContainer>
        <Boxes width={'45%'}>
          <Image src={'nexter.png'} />
          <OverlayContainer>
            <p>Real estate presentation user interface</p>
          </OverlayContainer>
        </Boxes>
        <Boxes width={'45%'}>
          <Image src={'map.png'} />
          <OverlayContainer>
            <p>Building filtering map in Zurich, Switzerland</p>
          </OverlayContainer>
        </Boxes>
      </ExpertiseContainer>
    </Page>
  );
}

export default Portfolio;
