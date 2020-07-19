import React from "react";
import Page from "../../styled-components/Page";
import { t } from "../../i18n/translate";

function Contact() {
  return (
    <Page id="contact">
      <div className="App">{t("contact")}</div>
      <div className="App">{t("text")}</div>
    </Page>
  );
}

export default Contact;
