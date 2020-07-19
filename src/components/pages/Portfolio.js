import React from "react";
import Page from "../../styled-components/Page";
import { t } from "../../i18n/translate";

function Portfolio() {
  return (
    <Page id="portfolio">
      <div className="App">{t("portfolio")}</div>
      <div className="App">{t("text")}</div>
    </Page>
  );
}

export default Portfolio;
