import styled from 'styled-components';

export const Wrapper = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSizes.desktop.xl};
    text-transform: uppercase;
  }

  h3 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSizes.desktop.m};
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.desktop.l};
  }
`;
