import React, { useState } from 'react';
import Page from '../../styled-components/Page';

import {
  HomeContainerLayout,
  Title,
} from '../styled-components-styles/ExpertiseStyles';

import {} from '../styled-components-styles/ExperienceStyles';

import { accordionData } from '../../utils/utilities';
// import { t } from '../../i18n/translate';

function Portfolio() {
  const Accordion = ({ title, content, env }) => {
    const [isActive, setIsActive] = useState(true);

    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div style={{ fontSize: '1.15rem' }}>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && (
          <div className="accordion-content">
            <div
              style={{
                fontSize: '1.15rem',
                fontWeight: 'bold',
                marginBottom: '.5rem',
              }}>
              Project Overview:
            </div>
            <div>{content}</div>
            <br />
            <div
              style={{
                fontSize: '1.15rem',
                fontWeight: 'bold',
                marginBottom: '.5rem',
              }}>
              Technical Environment:
            </div>
            <div>{env}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Page id="portfolio">
      <HomeContainerLayout>
        <Title>Professional Experiences</Title>
      </HomeContainerLayout>
      <div className="accordion">
        {accordionData.map(({ title, content, env }) => (
          <Accordion title={title} content={content} env={env} />
        ))}
      </div>
    </Page>
  );
}

export default Portfolio;
