import styled from 'styled-components';

export const Boxes = styled.div`
  position: relative;
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
export const OverlayContainer = styled.span`
  position: absolute;
  visibility: hidden;
  width: 100%;
  height: 0%;
  bottom: 5%;
  background: #f0f0f0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  opacity: 0;
  transition: all 200ms linear;
  
  @media only screen and (max-width: 768px) {
    bottom: 0%;
  }

  @media only screen and (max-width: 975px) {
    bottom: 4%;
  }

  ${Boxes}:hover & {
    height: 96%;
    visibility: visible;
    opacity: 0.9;
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
