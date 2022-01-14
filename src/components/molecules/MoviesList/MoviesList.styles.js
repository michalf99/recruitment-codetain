import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    display: grid;
    place-items: center;
    position: relative;
    padding: 10px 20px;
    border: 2px solid ${({ theme }) => theme.colors.black};
    border-radius: 20px;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -5%;
      left: -5%;
      width: 110%;
      height: 110%;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.blue};
      opacity: 0;
      transition: 0.3s;
      z-index: -1;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover ${Title} {
      transform: translateY(-30px);
    }

    ${Title} {
      margin-bottom: 0;
      transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      text-shadow: 0px 30px 0px ${({ theme }) => theme.colors.white};
    }
  }
`;
