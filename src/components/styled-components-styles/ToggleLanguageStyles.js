import styled from 'styled-components';

  export const Container = styled.div`
    position: fixed;
    top: 11%;
    right: 0;
    display: flex;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.color2};
    background: ${({ theme }) => theme.background2};
    z-index: 9999;
  `;

  export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `;

  export const ButtonsStyle = styled.button`
    padding: 10px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      background: #fff;
    }
  `;

  export const MenuIcon = styled.button`
    display: inline-block;
    position: fixed;
    top: 0%;
    right: 0%;
    font-size: 1.75rem;
    padding: 0.5rem 1.5rem;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.color2};
    background: ${({ theme }) => theme.background2};
    cursor: pointer;
    z-index: 9999;

    &:hover {
      background: #30bfbf;
    }

    &:active {
      background: ${({ theme }) => theme.background2};
    }
  `;

  export const Group = styled.div`
    display: flex;
    position: relative;
    z-index: 99999;
  `;

  export const BackToTop = styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    color: ${({ theme }) => theme.color2};
    background: ${({ theme }) => theme.background2};
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #30bfbf;
    }
  `;
