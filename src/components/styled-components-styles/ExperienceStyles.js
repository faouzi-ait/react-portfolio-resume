import styled from 'styled-components';

export const Boxes = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 1.5rem 0.5rem;
  border-radius: 4px;
  overflow: hidden;

  @media only screen and (max-width: 975px) {
    width: 80%;
    margin: 1rem;
  }

  @media only screen and (max-width: 768px) {
    width: 87%;
  }
`;

export const ExpertiseContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 975px) {
    flex-direction: column;
    align-items: center;
  }
`;
