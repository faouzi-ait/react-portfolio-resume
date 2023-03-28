import React from 'react';
import Page from '../../styled-components/Page';

import {
  HomeContainerLayout,
  Title,
} from '../styled-components-styles/ProfileStyles';

import { t } from '../../i18n/translate';

function Portfolio() {
  return (
    <Page id="portfolio">
      <HomeContainerLayout>
        <Title>Professional Experiences</Title>
      </HomeContainerLayout>
      {/* <div className="App">{t('portfolio')}</div>
      <div className="App">{t('text')}</div> */}
    </Page>
  );
}

export default Portfolio;
