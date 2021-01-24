import React from 'react';
import styled from 'styled-components';
// import { respondTo } from "../styled-components/ResponsiveUtils";

const MainPage = styled.div`
  min-width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`;
// ${respondTo.xl``}
// ${respondTo.lg``}
// ${respondTo.md``}
// ${respondTo.sm``}
// ${respondTo.s``}
// ${respondTo.xs``}

function Page({ children, id = '', ...rest }) {
  return (
    <MainPage id={id} {...rest}>
      {children}
    </MainPage>
  );
}

export default Page;
