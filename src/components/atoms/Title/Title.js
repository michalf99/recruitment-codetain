import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: 20px;
  color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.blue)};
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSizes.desktop.xl : theme.fontSizes.desktop.l)};
  text-transform: uppercase;
`;
