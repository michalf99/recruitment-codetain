import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 50px 0;
  position: relative;

  ${Title} {
    text-align: center;
    margin-bottom: 50px;
  }
`;
