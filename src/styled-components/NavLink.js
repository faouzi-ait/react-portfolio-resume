import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const NavigtionLink = styled(Link)`
  padding: 1.5rem 1.75rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #30bfbf;
  }
`;

function NavLink({ children, index }) {
  return (
    <NavigtionLink
      to={index}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      {children}
    </NavigtionLink>
  );
}

export default NavLink;
