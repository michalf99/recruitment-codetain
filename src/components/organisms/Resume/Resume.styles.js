import styled from 'styled-components';
import firstBackground from 'assets/images/about-first-background.png';

import { Description } from 'components/atoms/Description/Description';
import { Container } from 'components/templates/Container/Container';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.section`
  height: 50vh;
  display: grid;
  place-items: center;
  background: bottom / auto url(${firstBackground}) no-repeat;

  @media (max-width: 1024px) {
    height: 100vh;
  }

  ${Container} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 150px);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }

  ${Description} {
    grid-column: 2;

    @media (max-width: 768px) {
      grid-column: auto;
    }
  }

  ${Title} {
    align-self: end;
  }
`;

export const Portrait = styled.img`
  grid-row: 1 / 2;
  grid-column: 1;
  justify-self: center;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 50px;
`;
