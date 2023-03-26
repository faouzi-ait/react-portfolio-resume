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

export const ProjectImage = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 975px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WorkTitle = styled.h2`
  margin: 1rem 3rem 0 3rem;
  font-family: Overpass;
  font-size: 2.5rem;

  @media only screen and (max-width: 975px) {
    margin: 1rem 1.5rem 0 1.5rem;
    font-size: 1.75rem;
  }
`;

export const WorkSubTitle = styled.p`
  margin: 1rem 3rem 0 3rem;
  font-family: Overpass;
  font-size: 1rem;
  border-bottom: 3px solid;
  padding-bottom: 8px;

  @media only screen and (max-width: 975px) {
    margin: 1rem 1.5rem 0 1.5rem;
  }
`;
