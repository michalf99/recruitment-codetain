import styled from 'styled-components';
import { StyledContainer } from 'components/templates/Container/Container.styles';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.white};
  ${StyledContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
