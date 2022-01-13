import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: 20px;
  color: ${({ isWhite, isError, isBlack, theme }) => {
    if (isWhite) {
      return theme.colors.white;
    } else if (isError) {
      return theme.colors.error;
    } else if (isBlack) {
      return theme.colors.black;
    } else {
      return theme.colors.blue;
    }
  }};
  font-size: ${({ isTechnology, isBig, isMovie, theme }) => {
    if (isBig) {
      return theme.fontSizes.desktop.xl;
    } else if (isTechnology || isMovie) {
      return theme.fontSizes.desktop.m;
    } else {
      return theme.fontSizes.desktop.l;
    }
  }};
  font-weight: 700;
  text-transform: uppercase;
`;
