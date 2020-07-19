import React from "react";
import Page from "../../styled-components/Page";
import { t } from "../../i18n/translate";

function Experiences() {
  return (
    <Page id="experiences">
      <div className="App">{t("experiences")}</div>
      <div className="App">{t("text")}</div>
    </Page>
  );
}

export default Experiences;
