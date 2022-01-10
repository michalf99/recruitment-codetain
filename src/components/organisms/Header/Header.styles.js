import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 99;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;
