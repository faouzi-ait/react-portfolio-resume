import { LOCALES } from '../constants';

export default {
  [LOCALES.FRENCH]: {
    // HOME PAGE
    subHeader: 'Développeur Front End',
    subHeaderb: "4 ans d'expérience",
    subHeader2: 'React & Redux',

    // SIDE NAVIGATION
    homeLink: 'Accueil',
    profileLink: 'Expertise',
    experiencesLink: 'Portfolio',
    portfolioLink: 'Experiences',
    contactLink: 'Contacte',
    profileTitle: 'Mon Expertise',

    // MY EXPERTISE PAGE
    profileDesc: `Développeur front end passionné, spécialisé dans l'écosystème ReactJS et adepte de la méthodologie Agile/scrum. Intervenant à tout stade du cycle de vie de développement, de la conception au lancement en production. Confortable aussi bien dans une structure en équipe ou autonome, très orienté sur la qualité et la satisfaction de l'utilisateur.`,

    librariesTitle: 'Librairies',
    librariesDesc: 'Les librairies qui composent ma stack:',
    libraries:
      'ReactJS v16+ (Hooks), useMemo, useCallback, Styled Component, React Hook Form, Responsive Design, Material-UI, React-ChartJS, React-Table.',

    statesTitle: 'Gestion des données',
    statesDesc:
      'Les librairies suivantes sont aussi utilisées pour gérer les données au niveau applicatif:',
    states: 'Redux, Redux Saga, Redux Persist, Context API.',

    developmentTitle: 'Développement',
    developmentDesc:
      'Expérimenté dans les languages de développement ainsi que les outils suivants:',
    development:
      'JavaScript ES6+, HTML, CSS, SASS, Git, Github, Netifly, VS Code, Postman, In-Vision.',

    // PORTFOLIO PAGE
    portfolio: 'Mon Portfolio',

    // EXPERIENCE PAGE
    experience: 'Expérience Professionnelle',

    jobTitle1: 'Développeur React | NatWest Group | Juillet 2021 - Présent',
    jobTitle2:
      'Développeur React | RiskCare Financial | Octobre 2020 - Juin 2021',
    jobTitle3:
      'Développeur React | ST-Groupe Consultancy | Septembre 2018 - Août 2020',

    jobDesc1:
      "Je travaille actuellement sur la mise à jour de plusieurs applications financières, bancaires et de dashboard au sein d'une équipe de dévevoppeur Front End, Back End et UX en proche collaboration avec le client dans une méthodologie Agile/Scrum. L'application passe d'une architecture monolithique à un modèle axé sur les services et les API. Le front-end est construit sur ReactJS v17+. Spécifiquement axé sur les hooks, composants fonctionnels, données (states) centralisées au niveau applicatif en utilisant Redux/Saga et JavaScript ES6+.",
    jobDesc2:
      "Mise en œuvre de nouvelles interfaces et développement d’une application back-office de type CRM utilisée par une équipe de Finance et de Marketing pour la gestion de portefeuille clients avec contacts, messagerie, organisation de réunion, maintient de l'historique des communications avec upload de documents.",
    jobDesc3:
      'Développement d’une application back-office pour la gestion de clients et des tâches opérationnelles liées à la souscription d’assurance voyage sur plateforme Web et mobile.',

    // CONTACT PAGE
    contact: 'Contactez Moi',
    about: 'Parlez-moi de votre project',

    collaborate: 'Et si on collaborait ensemble',
    linkedin: 'Consulter mon profile LinkedIn',
    github: 'Voici mes repository sur GitHub',
    resume: 'Vous pouvez télécharger mon CV au format PDF',

    here: 'ici',

    nameField: 'Veuillez saisir votre nom*',
    emailField: 'Veuillez saisir votre email*',
    messageField: 'Veuillez saisir votre message',
    labelField: 'Parlez-moi de vous et de votre projet*',

    nameFieldError: 'Votre nom est obligatoire',
    emailFieldError: 'Votre email est obligatoire',
    messageFieldError: 'Votre message est obligatoire',

    send: 'Envoyer',
    sending: 'Envoi en cours...',
  },
};
