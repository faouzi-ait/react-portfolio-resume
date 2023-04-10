import React, { useState } from 'react';
import Page from '../../styled-components/Page';

import {
  HomeContainerLayout,
  Title,
} from '../styled-components-styles/ExpertiseStyles';

import { AccordionLabels } from '../styled-components-styles/ExperienceStyles';

import { accordionData } from '../../utils/utilities';
import { t } from '../../i18n/translate';

function Portfolio() {
  const Accordion = ({ title, content, env }) => {
    const [isActive, setIsActive] = useState(true);

    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && (
          <div className="accordion-content">
            <div>{content}</div>
            <br />
            <div className="experience-separation"></div>
            <div>
              {env.map((item, i) => (
                <AccordionLabels key={i}>{item}</AccordionLabels>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Page id="portfolio">
      <HomeContainerLayout>
        <Title>{t('experience')}</Title>
      </HomeContainerLayout>
      <div className="accordion">
        {accordionData.map(({ title, content, env }) => (
          <Accordion title={title} content={content} env={env} key={title} />
        ))}
      </div>
    </Page>
  );
}

export default Portfolio;
