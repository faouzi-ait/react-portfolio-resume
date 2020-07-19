import React from "react";
import Page from "../../styled-components/Page";
import { t } from "../../i18n/translate";

function Profile() {
  return (
    <Page id="profile">
      <div className="App">{t("profile")}</div>
      <div className="App">{t("text")}</div>
    </Page>
  );
}

export default Profile;
