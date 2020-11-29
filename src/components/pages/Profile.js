import React from 'react';
// import Page from "../../styled-components/Page";
import styled from 'styled-components';
// import { t } from "../../i18n/translate";
// import profile from "../../images/landscape.jpg";

const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

const Boxes = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.background};
`;

function Profile() {
  return (
    <HomeContainer id="profile">
      <Boxes>box 1</Boxes>
    </HomeContainer>
  );
}

export default Profile;
