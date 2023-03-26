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
  letter-spacing: 6px;
  z-index: 9999;
`;

export const TopHeader = styled(MainHeader)`
  font-style: italic;
  margin-top: -5rem;

  ${respondTo.sm`
  font-size: 1.75rem
  `}

  ${respondTo.s`
    font-size: 3.5rem
`}
`;

export const SubHeader = styled(MainHeader)`
  font-style: italic;
  // margin-top: -2rem;
  ${respondTo.sm`
  font-size: 1rem
  `}

  ${respondTo.s`
  font-size: 1.75rem
  `}
`;
export const SubHeader2 = styled(MainHeader)`
  font-style: italic;
  font-size: 0.5rem;

  ${respondTo.sm`
  font-size: .75rem;
  `}

  ${respondTo.s`
  font-size: .85rem
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

  ${respondTo.sm`

  `}

  ${respondTo.s`
  `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 62%;
  text-align: center;
`;

export const Line = styled.hr`
  width: 85%;
  margin-bottom: 2rem;
`;

export const HeroContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.116);
  width: 100vw;
  height: 100vh;
`;

export const Video = styled.video`
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

// export const DownLink = styled.button`
// display: block;
// position: absolute;
// bottom: 4rem !important;
// left: 50%
// color: ${({ theme }) => theme.color2};
// background: ${({ theme }) => theme.background2};
// padding: 1rem 2.5rem;
// border-radius: 10px;
// border: 0;
// transform: translateX(-50%);
// cursor: pointer;

// &:hover {
//   background: #30bfbf;
// }

// &:focus {
//   outline: none;
//   border: 0;
// }

// &:active {
//   background: ${({ theme }) => theme.background2};
// }

// ${respondTo.sm`
//     font-size: 2rem;
// `}

// ${respondTo.s`
//     font-size: 3rem;
// `}
//  `;
