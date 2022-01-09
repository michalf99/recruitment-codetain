import styled, { keyframes } from 'styled-components';

const animateLogo = keyframes`
  0% {
    stroke-dashoffset: 1260;
  } 
  100% {
    stroke-dashoffset: 0;
  }
`;

export const StyledSvg = styled.svg`
  path {
    stroke-dasharray: 1260;
    stroke-dashoffset: 1260;
    animation: ${animateLogo} 15s linear both;
  }
`;
