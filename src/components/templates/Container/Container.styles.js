import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: min(100%, 1000px);
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;
