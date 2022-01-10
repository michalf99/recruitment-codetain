import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  padding: 10px 30px;
  background-color: ${({ theme, isPrimary }) => (isPrimary ? theme.colors.blue : theme.colors.white)};
  color: ${({ theme, isPrimary }) => (isPrimary ? theme.colors.white : theme.colors.blue)};
  font-size: ${({ theme }) => theme.fontSizes.desktop.s};
  box-shadow: 3px 2px 10px ${({ theme, isPrimary }) => (isPrimary ? theme.colors.blue : theme.colors.white)};
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ theme, isPrimary }) => (isPrimary ? theme.colors.white : theme.colors.blue)};
    transform: skew(-45deg) translateX(-150%);
    opacity: 0;
    transition: 0.5s all, opacity 0s;
  }

  &:hover::after {
    transform: skew(-45deg) translateX(300%);
    opacity: 0.2;
  }
`;
