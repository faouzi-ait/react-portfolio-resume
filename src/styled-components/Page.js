import React from 'react';
import styled from 'styled-components';

const MainPage = styled.div`
  min-width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`;

function Page({ children, id = '', ...rest }) {
  return (
    <MainPage id={id} {...rest}>
      {children}
    </MainPage>
  );
}

export default Page;
