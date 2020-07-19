import { css } from "styled-components";

const breakpoints = {
  xl: "1400px",
  lg: "1200px",
  md: "992px",
  sm: "768px",
  s: "480px",
  xs: "0px",
};

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

/* 
    TO APPLLY THE RESPONSIVENESS IN COMPONENTS:

    ${respondTo.xs`
      font-size: 12px;
      background: ${({ theme }) => theme.xtra};
    `}

    ${respondTo.s`
      background: ${({ theme }) => theme.small};
    `}

    ${respondTo.sm`
      background: ${({ theme }) => theme.respond};
    `};

    ${respondTo.md`
      background: ${({ theme }) => theme.respond};
    `};

    ${respondTo.lg`
      background: ${({ theme }) => theme.respond};
    `};

    ${respondTo.xl`
      background: ${({ theme }) => theme.respond};
    `};
*/
