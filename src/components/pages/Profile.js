import React from "react";
import Page from "../../styled-components/Page";
import styled from "styled-components";
import { t } from "../../i18n/translate";
import profile from "../../images/landscape.jpg";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.background};
`;

const Boxes = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.background};

  &:nth-child(2) {
    background: ${({ theme }) => theme.background3}
  }
`;

function Profile() {
  return (
    <HomeContainer id="profile">
      <Boxes>box 1</Boxes>
      <Boxes>box 2</Boxes>
      <Boxes>box 3</Boxes>
      {/* <MainHeader>about me</MainHeader>
        <SubHeader>front end developer</SubHeader> */}
    </HomeContainer>
  );
}

export default Profile;
