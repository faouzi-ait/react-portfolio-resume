import React from "react";

import { t } from "../i18n/translate";
import { DARK, LIGHT, BASE } from "../themes/index";
import { THEMES } from "../theme";

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
    width: "30%",
    src: "wave.png",
    label: "Fullstack E-Commerce focused on guitards",
    stack:
    "ReactJS, Hooks, JS ES6+, Context API, SASS, CSS3, REST/ExpressJS, Paypal, Email",
    github: "github.png",
    altGithub: "github",
    web: "mgn.png",
    altWeb: "mgn",
    githubUrl: "https://github.com/faouzi-ait/waves-front",
    webUrl: "https://wave-store.netlify.app",
    showWeb: false,
  },
  {
    width: "30%",
    src: "commerce.png",
    label: "Fullstack Amazon E-Commerce ",
    stack:
      "ReactJS, Hooks, JS ES6+, Redux/Saga, SASS, CSS Grid/Flexbox, i18n, REST, Stripe Payments, Email",
    github: "github.png",
    altGithub: "github",
    web: "mgn.png",
    altWeb: "mgn",
    githubUrl: "https://github.com/faouzi-ait/e-commerce-2-front",
    webUrl: "https://new-online-store.netlify.app",
    showWeb: true,
  },
  {
    width: "30%",
    src: "new-style.png",
    label: "Fullstack E-Commerce for men and women cloting",
    stack:
      "ReactJS, Hooks, JS ES6+, Redux/Saga, Responsive Design, CSS3, CSS Grid/Flexbox, REST/ExpressJS, Paypal, Email",
    github: "github.png",
    altGithub: "github",
    web: "mgn.png",
    altWeb: "mgn",
    githubUrl: "https://github.com/faouzi-ait/e-commerce-front",
    webUrl: "https://new-style.netlify.app",
    showWeb: false,
  },
];

export const uiWork = [
  {
    width: "30%",
    src: "nexter.png",
    label: "Real estate presentation user interface",

    github: "github.png",
    altGithub: "github",
    web: "mgn.png",
    altWeb: "mgn",
    githubUrl: "https://github.com/faouzi-ait/Nexter",
    webUrl: "https://real-estates-agency.netlify.app",
    showWeb: false,
  },
  {
    width: "30%",
    src: "instagram.png",
    label: "Fullstack & fully featured Instagram website",

    github: "github.png",
    altGithub: "github",
    web: "mgn.png",
    altWeb: "mgn",
    githubUrl: "https://github.com/faouzi-ait/instagram-web",
    webUrl: "https://insta-web.netlify.app/",
    showWeb: true,
  },
  {
    width: "30%",
    src: "trillio.png",
    label: "Hotel resort website for holiday makers",

    github: "github.png",
    altGithub: "github",
    web: "mgn.png",
    altWeb: "mgn",
    githubUrl: "https://github.com/faouzi-ait/Trillo",
    webUrl: "https://trillo-reservation.netlify.app",
    showWeb: false,
  },
];

export const accordionData = [
  {
    title: t("jobTitle1"),
    content: t("jobDesc1"),
    env: [
      "NX",
      "NextJS",
      "TypeScript",
      "JavaScript ES6+",
      "Forge-XD",
      "Material-UI",
      "Context API",
      "REST API",
      "HTML",
      "CSS",
      "SASS",
    ],
  },
  {
    title: t("jobTitle2"),
    content: t("jobDesc2"),
    env: [
      "React v17+",
      "React Hooks",
      "useMemo",
      "useCallback",
      "Redux",
      "Redux Saga",
      "Redux Persist",
      "JavaScript ES6+",
      "HTML",
      "CSS",
      "SASS",
      "Styled Component",
      "React-Table",
      "React-Chart-JS",
      "TreeMap",
      "Material-UI",
      "REST API",
    ],
  },
  {
    title: t("jobTitle3"),
    content: t("jobDesc3"),
    env: [
      "React v17+",
      "React Hooks",
      "Redux",
      "Redux Saga",
      "Redux",
      "JavaScript ES6+",
      "HTML",
      "Git/GitHub",
      "CSS",
      "SASS",
      "Styled Component",
      "REST API.",
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
        className={errors?.name ? "error" : ""}
        autoComplete="off"
        ref={register({ required: true })}
      />
      {errors?.name && errors?.name?.type === "required" && (
        <p className="login__error">{errorLabel}</p>
      )}
    </div>
  );
};

export const resetMessage = (setError) => {
  setTimeout(() => {
    setError("");
  }, 4000);
};
