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
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && (
          <div className="accordion-content">
            <div>{content}</div>
            <br />
            <div
              style={{
                fontSize: '.15rem',
                fontWeight: 'bold',
              }}></div>
            <div>
              {env.map((item) => (
                <span
                  style={{
                    display: 'inline-block',
                    marginRight: '.5rem',
                    marginBottom: '.5rem',
                    padding: '.1rem .4rem',
                    fontSize: '.85rem',
                    borderRadius: '10px',
                    border: '1px solid #3ab4cc',
                    backgroundColor: '#91d3e2',
                  }}>
                  {item}
                </span>
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
