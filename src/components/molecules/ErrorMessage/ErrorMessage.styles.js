import styled, { keyframes } from 'styled-components';

const shrinkAnimation = keyframes`
  0% {
    transform: translateX(-50%) scaleX(1);
  }
  100% {
    transform: translateX(-50%) scaleX(0);
  }
`;

const slideInAnimation = keyframes`
    0% {
    transform: translateX(-50%) translateY(0%);
  }
  100% {
    transform: translateX(-50%) translateY(-55vh);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: -50%;
  width: max(30%, 500px);
  padding: 40px 25px 15px;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.error};
  border-radius: 20px;
  animation: ${slideInAnimation} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both,
    ${slideInAnimation} 0.4s 5.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards reverse;
  z-index: 999;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 15%;
    left: 50%;
    width: 100px;
    height: 10px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.error};
    border-radius: 10px;
    opacity: 0.5;
  }

  &::after {
    transform-origin: 0 50%;
    animation: ${shrinkAnimation} 5s 0.5s linear both;
  }
`;
