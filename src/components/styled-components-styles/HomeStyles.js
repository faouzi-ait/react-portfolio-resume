import styled from 'styled-components';
import { respondTo } from '../../styled-components/ResponsiveUtils';
import bcgImage from '../../images/home-image.jpg';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color};
  user-select: none;

  background-image: url(${bcgImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const MainHeader = styled.span`
  width: 100% !important;
  color: #fff;
  font-family: 'Varela', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
  z-index: 9999;
`;

export const TopHeader = styled(MainHeader)`
  font-style: italic;
  margin-top: -5rem;

  @media (min-width: 601px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

export const SubHeader = styled(MainHeader)`
  font-style: italic;

  ${respondTo.sm`
  font-size: 1rem
  `}

  ${respondTo.s`
  font-size: 1.75rem
  `}
`;

export const SubHeader2 = styled(SubHeader)`
  font-style: normal;
  font-size: 0.5rem;
  letter-spacing: 3px;

  ${respondTo.sm`
     font-size: .8rem;
    `}

  ${respondTo.s`
  font-size: 1rem;
  `}
`;

export const SubHeader2Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 82%;
  text-align: center;

  ${respondTo.sm`
  margin-bottom: 4rem;
  `}
`;

export const Line = styled.hr`
  width: 85%;
  margin-bottom: 2rem;
`;
