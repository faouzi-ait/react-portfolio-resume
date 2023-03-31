import React from 'react';
import Page from '../../styled-components/Page';

import {
  Boxes,
  ImageStyle,
  ProjectLogo,
  ProjectDesc,
  ImageContainer,
  OverlayContainer,
  ExpertiseContainer,
} from '../styled-components-styles/PortfolioStyles';

import {
  HomeContainerLayout,
  Title,
} from '../styled-components-styles/Expertise';

import { fullstackWork, uiWork } from '../../utils/utilities';

// import { t } from '../../i18n/translate';

function Portfolio() {
  return (
    <Page id="experiences">
      <HomeContainerLayout>
        <Title>My Portfolio</Title>
      </HomeContainerLayout>
      <ExpertiseContainer>
        {fullstackWork.map((item) => (
          <Boxes width={item.width}>
            <div>
              <ImageStyle src={item.src} />
            </div>

            <OverlayContainer>
              <ProjectDesc>{item.label}</ProjectDesc>
              <ImageContainer>
                <ProjectLogo
                  src={'github.svg'}
                  alt={item.altGithub}
                  onClick={() => window.open(item.githubUrl)}
                />
                <ProjectLogo
                  src={item.web}
                  alt={item.altWeb}
                  onClick={() => window.open(item.webUrl)}
                />
              </ImageContainer>
            </OverlayContainer>
          </Boxes>
        ))}
      </ExpertiseContainer>

      <ExpertiseContainer>
        {uiWork.map((item) => (
          <Boxes width={item.width}>
            <div>
              <ImageStyle src={item.src} />
            </div>

            <OverlayContainer>
              <ProjectDesc>{item.label}</ProjectDesc>
              <ImageContainer>
                <ProjectLogo
                  src={'github.svg'}
                  alt={item.altGithub}
                  onClick={() => window.open(item.githubUrl)}
                />
                <ProjectLogo
                  src={item.web}
                  alt={item.altWeb}
                  onClick={() => window.open(item.webUrl)}
                />
              </ImageContainer>
            </OverlayContainer>
          </Boxes>
        ))}
      </ExpertiseContainer>
    </Page>
  );
}

export default Portfolio;
