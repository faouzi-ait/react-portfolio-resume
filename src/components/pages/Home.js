import React from "react";
import styled from "styled-components";
import { t } from "../../i18n/translate";
import { respondTo } from "../../styled-components/ResponsiveUtils";
import bcgImage from "./home-image.jpg";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.color};
  background-image: url(${bcgImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

function Home() {
  return (
    <HomeContainer id="home">
      <div>{t("home")}</div>
      <div className="App">{t("text")}</div>
    </HomeContainer>
  );
}

export default Home;
