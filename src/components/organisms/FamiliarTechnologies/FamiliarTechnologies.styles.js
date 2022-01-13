import styled from 'styled-components';
import background from 'assets/images/familiar-background.png';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.section`
  padding: 150px 0 50px;
  background: center / cover url(${background}) no-repeat;

  ${Title} {
    text-align: center;
    margin-bottom: 100px;

    &:not(:first-child) {
      margin-bottom: 50px;
    }
  }
`;
