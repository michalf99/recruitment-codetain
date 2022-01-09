import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  padding: 30px 0;
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.desktop.s};
`;
