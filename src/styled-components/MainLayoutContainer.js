import React from "react";
import styled from "styled-components";

const PageLayoutContainer = styled.nav`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
`;

function LayoutContainer({ children, ...rest }) {
  return <PageLayoutContainer {...rest}>{children}</PageLayoutContainer>;
}

export default LayoutContainer;
