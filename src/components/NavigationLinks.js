import React from "react";
import { t } from "../i18n/translate";
import styled from "styled-components";
import NavLink from "../styled-components/NavLink";

import "../activeLink.css";

const NavigtionLinksLayout = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavigationLinks = () => {
  return (
    <NavigtionLinksLayout>
      <NavLink index="home">{t("homeLink")}</NavLink>
      <NavLink index="profile">{t("profileLink")}</NavLink>
      <NavLink index="experiences">{t("experiencesLink")}</NavLink>
      <NavLink index="portfolio">{t("portfolioLink")}</NavLink>
      <NavLink index="contact"> {t("contactLink")}</NavLink>
    </NavigtionLinksLayout>
  );
};

export default NavigationLinks;
