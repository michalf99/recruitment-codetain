import styled from 'styled-components';
import { Container } from '../Container/Container';

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
