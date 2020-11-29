import React from "react";
import styled from "styled-components";
import { respondTo } from "../styled-components/ResponsiveUtils";

const MainPage = styled.div`
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};

  ${respondTo.xs``}
  ${respondTo.s``}
  ${respondTo.sm``}
  ${respondTo.md``}
  ${respondTo.lg``}
  ${respondTo.xl``}
`;

function Page({ children, id = "", ...rest }) {
  return (
    <MainPage id={id} {...rest}>
      {children}
    </MainPage>
  );
}

export default Page;
