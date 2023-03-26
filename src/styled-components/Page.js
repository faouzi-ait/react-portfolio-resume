import React from 'react';
import styled from 'styled-components';

const MainPage = styled.div`
  max-width: 100%;
  min-height: 100vh;
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
