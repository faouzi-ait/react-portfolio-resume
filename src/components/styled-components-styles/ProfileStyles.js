import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const Boxes = styled.div`
  width: 85%;
  margin: 2rem auto;
  // padding: 2rem 2rem;
  background: ${({ theme }) => theme.background3};
  border-radius: 4px;
`;

export const Title = styled.div`
  padding-bottom: 0.75rem;
  font-size: 24px;
  /* font-size: 2.625rem; */
  padding: 0.5rem 1.5rem;
  padding-top: 1.5rem;
  font-family: 'Stag Medium', Verdana, Arial, serif, 'Markerfield Regular';
  font-weight: bold;
  line-height: 1.14;
  letter-spacing: -1px;
  text-transform: uppercase;
  border-bottom: 5px solid #000;
`;

export const ProfileDescription = styled.p`
  margin-bottom: 0.25rem;
  padding: 1.5rem;
  font-size: 1.15rem;
  line-height: 1.75rem;
  letter-spacing: 0.35px;
`;

export const Separator = styled.div`
  margin: -2rem 0;
`;

export const SkillSetContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  margin-right: 1.5rem;
`;

export const SkillTitle = styled.div`
  margin: 1rem 0 0.25rem 0;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const SkillSetText = styled.div`
  color: grey;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const SkillSetQuote = styled(SkillSetText)`
  font-style: italic;
`;

export const Education = styled.div`
  width: 83%;
  font-style: italic;
  color: grey;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const SkillsetMainContainer = styled.div`
  display: flex;
  padding: 1.5rem;
`;

export const EducationMainContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 1fr;
  grid-template-rows: 6rem;
  padding: 1.5rem;
`;

export const ResponseContainer = styled.div`
  margin-bottom: 1rem;
`;

export const EducationContainerBis = styled.div`
  border: 1px solid red;
`;
