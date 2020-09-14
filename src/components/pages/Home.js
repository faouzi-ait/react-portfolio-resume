import React from "react";
import styled from "styled-components";
import { t } from "../../i18n/translate";
import NavLink from "../../styled-components/NavLink";
// import { respondTo } from "../../styled-components/ResponsiveUtils";
import bcgImage from "../../images/home-image.jpg";
import "./Home.css";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color};
  // background-image: url(${bcgImage});
  // background-size: 100% 100%;
  // background-repeat: no-repeat;
`;

const MainHeader = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Varela", sans-serif;
  text-transform: uppercase;
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: 6px;
  z-index: 9999;
`;

const SubHeader = styled(MainHeader)`
  font-size: 2rem;
  font-style: italic;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 62%;
  text-align: center;
`;

const Line = styled.hr`
  width: 60%;
  margin-bottom: 3rem;
`;

const DownLink = styled.button`
  display: inline-block;
  position: absolute;
  bottom: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color2};
  background: ${({ theme }) => theme.background2};
  padding: 1rem 2.5rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #30bfbf;
  }

  &:focus {
    outline: none;
    border: 0;
  }

  &:active {
    background: ${({ theme }) => theme.background2};
  }
`;

function Home() {
  return (
    <HomeContainer id="home">
      <div className="hero-container">
        <video src="/videos/bg_video.mp4" autoPlay loop muted></video>
      </div>
      <HeaderContainer>
        <MainHeader>Faouzi Aitelhara</MainHeader>
        {/* <Line /> */}
        <SubHeader>{t("subHeader")}</SubHeader>
      </HeaderContainer>
      <NavLink index="profile">
        <DownLink>&darr;</DownLink>
      </NavLink>
    </HomeContainer>
  );
}

export default Home;
