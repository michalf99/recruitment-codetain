import styled from 'styled-components';
export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 30px;
`;

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  justify-self: end;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &.active {
    svg {
      stroke: ${({ theme }) => theme.colors.error};
    }
  }

  svg {
    display: block;
    width: 100%;
    stroke: ${({ theme }) => theme.colors.black};
    transition: 0.2s;
  }
`;

export const Info = styled.p`
  grid-column: 1/ -1;
  color: ${({ theme }) => theme.colors.black};
`;
