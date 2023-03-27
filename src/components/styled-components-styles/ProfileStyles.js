import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const ProfileDesc = styled.p`
  position: relative;
  // width: 70%;
  margin-top: -2rem;
  padding: 0 3rem;
  font-family: 'Overpass', sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 2.75rem;
  text-align: center;

  &:before {
    content: '“';
    position: relative;
    top: 90px;
    font-size: 12rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 975px) {
    font-size: 1.25rem;

    &:before {
      top: 40px;
      margin-right: 0.5rem;
      font-size: 6rem;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;

    &:before {
      font-size: 6rem;
      margin-right: 0.5rem;
    }
  }
`;

export const Boxes = styled.div`
  width: 27%;
  margin: 1.5rem 0.5rem;
  padding: 1rem 1rem;
  background: ${({ theme }) => theme.background3};
  border: 1px solid ${({ theme }) => theme.background2};
  border-radius: 4px;

  @media only screen and (max-width: 975px) {
    width: 75%;
    margin: 1rem;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    margin: 0.5rem 0.5rem;
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

export const ExpertiseTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', Sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2em;
  text-align: center;
  font-color: ${({ theme }) => theme.background2};
`;

export const Title = styled.div`
  width: 35%;
  margin-bottom: -2%;
  padding: 0.5rem 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.25rem;
  font-family: 'Stag Medium', Verdana, Arial, serif, 'Markerfield Regular';
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  line-height: 1.14;
  letter-spacing: 1px;
  // text-transform: uppercase;
  border-bottom: 5px solid ${({ theme }) => theme.background2};

  @media only screen and (max-width: 975px) {
    width: 70%;
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TitleMargin = styled.div`
  margin-left: 1rem;
`;

export const HomeContainerLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Expertise = styled.div`
  font-family: 'Overpass', sans-serif;
  line-height: 20px;
`;

export const ExpertiseList = styled(Expertise)`
  font-style: italic;
`;

export const Separator = styled.div`
  margin: 1rem 0;
`;
