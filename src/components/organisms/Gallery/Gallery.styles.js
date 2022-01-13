import secondBackground from 'assets/images/about-second-background.png';
import { Wrapper } from 'components/templates/Columns/Columns.styles';
import styled from 'styled-components';

export const StyledSection = styled.section`
  background: center / 40% url(${secondBackground}) no-repeat;
  background-color: transparent;

  ${Wrapper} {
    padding: 0;

    @media (max-width: 1024px) {
      gap: 0px;
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 200px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.blue};
    transform: ${({ isSelected }) => (isSelected ? 'scaleY(1.05) scaleX(1.03)' : 'scaleY(1) scaleX(1)')};
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: -1;
  }

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  } ;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: ${({ isSelected }) => (isSelected ? '600px' : '100%')};
  margin-bottom: 50px;
  object-fit: cover;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    height: ${({ isSelected }) => (isSelected ? '300px' : '100%')};
  } ;
`;
