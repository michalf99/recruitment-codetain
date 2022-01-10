import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const Icon = styled.img`
  display: block;
  height: 75px;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;
