import React from "react";
import styled from "styled-components";
import { t } from "../../i18n/translate";
// import { respondTo } from "../../styled-components/ResponsiveUtils";
import bcgImage from "../../images/home-image.jpg";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.color};
  background-image: url(${bcgImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const MainHeader = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Varela", sans-serif;
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

const SubHeader = styled(MainHeader)`
  font-size: 2rem;
  font-style: italic;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
`;

const Line = styled.hr`
  width: 90%;
  margin-bottom: 3rem;
`;

function Home() {
  return (
    <HomeContainer id="home">
      <HeaderContainer>
        <MainHeader>Faouzi Aitelhara</MainHeader>
        <Line />
        <SubHeader>{t("subHeader")}</SubHeader>
      </HeaderContainer>
    </HomeContainer>
  );
}

export default Home;
