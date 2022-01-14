import styled from 'styled-components';

export const Description = styled.p`
  color: ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.black)};
`;
