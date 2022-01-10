import styled from 'styled-components';
import { Container } from 'components/templates/Container/Container';

export const Wrapper = styled(Container)`
  display: grid;
  place-items: center;
  margin-block: 200px;

  @media (max-width: 1024px) {
    margin-block: 100px;
  }

  @media (max-width: 768px) {
    margin-block: 50px;
  }

  svg {
    width: min(100%);
  }
`;
