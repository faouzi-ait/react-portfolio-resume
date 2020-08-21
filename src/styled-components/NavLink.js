import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavigtionLink = styled(Link)`
  padding: 1.5rem 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #30bfbf;
  }
`;

function NavLink({ children, index, ...rest }) {
  return (
    <NavigtionLink
      to={index}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      {...rest}
    >
      {children}
    </NavigtionLink>
  );
}

export default NavLink;
