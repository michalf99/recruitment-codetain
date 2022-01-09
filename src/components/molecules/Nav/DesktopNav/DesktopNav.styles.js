import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }

  a {
    position: relative;
    margin: 0 5px;
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontSizes.desktop.s};
    font-weight: 500;
    text-transform: uppercase;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.blue};
      opacity: 0;
      transition: 0.3s;
    }

    &.active {
      color: ${({ theme }) => theme.colors.blue};

      &::after {
        opacity: 1;
      }
    }
  }
`;
