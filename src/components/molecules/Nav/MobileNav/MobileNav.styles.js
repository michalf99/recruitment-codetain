import styled from 'styled-components';

export const StyledMobileNav = styled.nav`
  display: none;

  @media (max-width: 1024px) {
    display: block;

    .burger {
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      z-index: 5;

      svg {
        z-index: 5;
      }

      .line {
        fill: none;
        stroke: ${({ theme }) => theme.colors.black};
        stroke-width: 6;
        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1), 600ms;
      }
      .line1 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
      }
      .line2 {
        stroke-dasharray: 60 60;
        stroke-width: 6;
      }
      .line3 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
      }
      &.opened .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
        stroke: ${({ theme }) => theme.colors.white};
      }
      &.opened .line2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
        stroke: ${({ theme }) => theme.colors.white};
      }
      &.opened .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0%;
  bottom: 0;
  right: -100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 100px 20px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-100%)' : 'translateX(0%)')};
  transition: 0.6s;
  z-index: 3;

  a {
    position: relative;
    margin-bottom: 15px;
    padding-bottom: 5px;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.white};
      opacity: 0;
      transition: 0.3s;
    }

    &.active::after {
      opacity: 1;
    }
  }
`;
