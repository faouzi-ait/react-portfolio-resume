import styled from 'styled-components';

export const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const Boxes = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 1.5rem 0.5rem;
  border-radius: 4px;
  overflow: hidden;
  transition: all 100ms linear;
  z-index: 9999;

  &:hover {
    scale: 1.1;
    z-index: 99999;
  }

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
  bottom: 0%;
  background: #000;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 150ms linear;

  // @media only screen and (max-width: 768px) {
  //   bottom: 0%;
  // }

  // @media only screen and (max-width: 975px) {
  //   bottom: 0%;
  // }

  ${Boxes}:hover & {
    height: 100%;
    visibility: visible;
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
