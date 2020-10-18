import React, { useEffect } from "react";
import styled from "styled-components";
import { t } from "../../i18n/translate";
// import NavLink from "../../styled-components/NavLink";
import { respondTo } from "../../styled-components/ResponsiveUtils";

// FOR THE BACKGROUND IMAGE
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
  user-select: none;

  // FOR THE BACKGROUND IMAGE
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

  ${respondTo.xs`
    font-size: 1.25rem
  `}

  ${respondTo.sm`
    font-size: 2rem
  `}

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
  width: 85%;
  margin-bottom: 2rem;
`;

const HeroContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.116);
  width: 100vw;
  height: 100vh;
`;

const Video = styled.video`
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

// const DownLink = styled.button`
//   display: inline-block;
//   position: absolute;
//   bottom: 0;
//   left: 50%
//   font-size: 1.5rem;
//   color: ${({ theme }) => theme.color2};
//   background: ${({ theme }) => theme.background2};
//   padding: 1rem 2.5rem;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   border: 0;
//   transform: translateX(-50%);
//   cursor: pointer;

//   &:hover {
//     background: #30bfbf;
//   }

//   &:focus {
//     outline: none;
//     border: 0;
//   }

//   &:active {
//     background: ${({ theme }) => theme.background2};
//   }

//   ${respondTo.sm`
//     font-size: 2rem
//   `}
// `;

function Home() {
  useEffect(() => {
    document.querySelector("video").playbackRate = 0.93;
  }, []);

  return (
    <HomeContainer id="home">
      <HeroContainer>
        <Video src="/videos/bg_video.mp4" autoPlay loop muted />
      </HeroContainer>
      <HeaderContainer>
        <MainHeader>Faouzi Aitelhara</MainHeader>
        <Line />
        <SubHeader>{t("subHeader")}</SubHeader>
      </HeaderContainer>
      {/* <NavLink index="profile">
        <DownLink>&darr;</DownLink>
      </NavLink> */}
    </HomeContainer>
  );
}

export default Home;
