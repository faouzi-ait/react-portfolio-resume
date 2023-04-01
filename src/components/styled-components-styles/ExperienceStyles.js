import styled from 'styled-components';
// import { respondTo } from '../../styled-components/ResponsiveUtils';

export const Accordion = styled.div`
  max-width: 80%;
  font-family: 'Be Vietnam Pro', sans-serif;
  margin: 5rem auto;

  @media only screen and (max-width: 1100pw) {
    max-width: 90%;
  }
`;

export const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  background-color: #323c3e;
  cursor: pointer;

  &:hover & {
    background-color: #3ab4cc;
  }
`;

export const AccordionContent = styled.div`
  padding: 1rem;
  background-color: #39b9d2;
`;
