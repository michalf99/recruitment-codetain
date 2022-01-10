import styled from 'styled-components';
import heroImage from 'assets/images/hero-desktop.png';
import { Container } from 'components/templates/Container/Container';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: center / cover url(${heroImage}) no-repeat;

  ${Container} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    height: 100%;
    padding: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      place-items: start;
      gap: 50px;
    }

    svg {
      width: 100%;
      grid-column: 2/-1;

      @media (max-width: 1024px) {
        grid-column: 1;
        grid-row: 1;
        height: 100%;
      }
    }
  }
`;
