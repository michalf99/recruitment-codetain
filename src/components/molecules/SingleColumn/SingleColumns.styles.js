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
  max-width: 50%;
  margin-bottom: ${({ isTechnology }) => (isTechnology ? '20px' : '50px')};
`;
