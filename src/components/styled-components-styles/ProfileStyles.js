import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const Boxes = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.background};
`;