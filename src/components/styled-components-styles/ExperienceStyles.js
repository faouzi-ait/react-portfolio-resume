import styled from 'styled-components';
// import { respondTo } from '../../styled-components/ResponsiveUtils';

export const Accordion = styled.div`
  max-width: 80%;
  font-family: 'Be Vietnam Pro', sans-serif;
  margin: 5rem auto;

  @media only screen and (max-width: 1100px) {
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

export const AccordionLabels = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.1rem 0.4rem;
  font-size: 0.85rem;
  border-radius: 10px;
  border: 1px solid #3ab4cc;
  background-color: #91d3e2;
  transition: all 200ms linear;

  &:hover {
    background: #3ab4cc;
  }
`;
