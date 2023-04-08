import React from 'react';
import { DARK, LIGHT, BASE } from '../themes/index';
import { THEMES } from '../theme';

export const getTheme = (themeName) => {
  switch (themeName) {
    case THEMES.DARK:
      return DARK;
    case THEMES.LIGHT:
      return LIGHT;
    default:
      return BASE;
  }
};

export const fullstackWork = [
  {
    width: '30%',
    src: 'commerce.png',
    label: 'Fullstack E-Commerce based on the Amazon UX',
    github: 'github.png',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/e-commerce-2-front',
    webUrl: 'https://new-online-store.netlify.app',
    showWeb: true,
  },
  {
    width: '30%',
    src: 'wave.png',
    label: 'Fullstack E-Commerce based in guitards of all kind',
    github: 'github.png',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/waves-front',
    webUrl: 'https://wave-store.netlify.app',
    showWeb: false,
  },
  {
    width: '30%',
    src: 'new-style.png',

    label: 'Fullstack E-Commerce for men and women cloting',
    github: 'github.png',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/e-commerce-front',
    webUrl: 'https://new-style.netlify.app',
    showWeb: false,
  },
];

export const uiWork = [
  {
    width: '30%',
    src: 'nexter.png',
    label: 'Real estate presentation user interface',

    github: 'github.png',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/Nexter',
    webUrl: 'https://real-estates-agency.netlify.app',
    showWeb: false,
  },
  {
    width: '30%',
    src: 'map.png',
    label: 'Building filtering map in Zurich, Switzerland',

    github: 'github.png',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/nomoko',
    webUrl: 'https://nomoko-map.netlify.app',
    showWeb: false,
  },
  {
    width: '30%',
    src: 'trillio.png',
    label: 'Hotel resort website for holiday makers',

    github: 'github.png',
    altGithub: 'github',
    web: 'mgn.png',
    altWeb: 'mgn',
    githubUrl: 'https://github.com/faouzi-ait/Trillo',
    webUrl: 'https://trillo-reservation.netlify.app',
    showWeb: false,
  },
];

export const accordionData = [
  {
    title: 'React Developer | NatWest Group | July 2021 - Present',
    content: `Currently working on rebuilding the Financials, Banking and Dashboard applications, migrating from the current monolithic architecture to a service oriented, API driven model. The front-end is built using ReactJS v17+. Specifically focused on Hooks, Functional Components, centralized data using Redux/Saga and JavaScript ES6+.`,
    env: [
      'React v17+',
      'React Hooks',
      'useMemo',
      'useCallback',
      'Redux',
      'Redux Saga',
      'Redux Persist',
      'JavaScript ES6+',
      'HTML',
      'CSS',
      'SASS',
      'Styled Component',
      'React-Table',
      'React-Chart-JS',
      'TreeMap',
      'Material-UI',
      'REST API',
    ],
  },
  {
    title: 'React Developer | RiskCare Financial | October 2020 - June 2021',
    content: `Implementation of new interfaces and further development of a back-office application of type CRM used by a Finance and Marketing team to manage a portfolio of clients with contacts, messages, meeting requests, communication history and documentation submission.`,
    env: [
      'React v17+',
      'React Hooks',
      'Redux',
      'Redux Saga',
      'Redux',
      'JavaScript ES6+',
      'HTML',
      'Git/GitHub',
      'CSS',
      'SASS',
      'Styled Component',
      'REST API.',
    ],
  },
  {
    title:
      'React Developer | ST-Groupe Consultancy | September 2018 - October 2020',
    content: `Development of a back-office application for client management and day-to-day operational tasks for travel insurance for the web and mobile tablet platform.`,
    env: [
      'React v17+',
      'React Hooks',
      'Redux',
      'Redux Saga',
      'Context API',
      'JavaScript ES6+',
      'JWT',
      'HTML',
      'CSS',
      'SASS',
      'Styled Component',
      'REST API',
    ],
  },
];

export const createField = (
  type,
  name,
  placeHolder,
  errors,
  register,
  errorLabel
) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        className={errors?.name ? 'error' : ''}
        autoComplete="off"
        ref={register({ required: true })}
      />
      {errors?.name && errors?.name?.type === 'required' && (
        <p className="login__error">{errorLabel}</p>
      )}
    </div>
  );
};

export const resetMessage = (setError) => {
  setTimeout(() => {
    setError('');
  }, 4000);
};
