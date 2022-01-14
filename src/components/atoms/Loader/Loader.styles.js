import styled, { keyframes } from 'styled-components';

const animatedOutline = keyframes`
  0% {
    stroke-dashoffset: 131;
  } 10% {
    stroke-dashoffset: 0;
  } 90% {
    stroke-dashoffset: 0;
  } 100% {
    stroke-dashoffset: -131;
  }
`;

const animatedForeheadLine = keyframes`
  0% {
    stroke-dashoffset: 36;
  } 8% {
    stroke-dashoffset: 36;
  } 13% {
    stroke-dashoffset: 0;
  } 87% {
    stroke-dashoffset: 0
  } 92% {
    stroke-dashoffset: -36
  } 100% {
    stroke-dashoffset: -36;
  }
`;

const animatedLeftEye = keyframes`
  0% {
    stroke-dashoffset: 23;
  } 13%{
    stroke-dashoffset: 23;
  } 19% {
    stroke-dashoffset: 0;
  } 81% {
    stroke-dashoffset: 0;
  } 87% {
    stroke-dashoffset: -23;
  }
   100% {
    stroke-dashoffset: -23;
  }
`;

const animatedRightEye = keyframes`
  0% {
    stroke-dashoffset: 45;
  } 13%{
    stroke-dashoffset: 45;
  } 19% {
    stroke-dashoffset: 0;
  } 81% {
    stroke-dashoffset: 0;
  } 87% {
    stroke-dashoffset: -45;
  }
   100% {
    stroke-dashoffset: -45;
  }
`;

const animatedMouth = keyframes`
  0% {
    stroke-dashoffset: 55.5;
  } 16% {
    stroke-dashoffset: 55.5;
  } 21% { 
    stroke-dashoffset: 0;
  } 79% {
    stroke-dashoffset: 0;
  } 84% {
    stroke-dashoffset: -55.5
  } 100% {
    stroke-dashoffset: -55.5;
  }
`;

const animatedChin = keyframes`
  0% {
    stroke-dashoffset: 6;
  } 19% {
    stroke-dashoffset: 6;
  } 23% {
    stroke-dashoffset: 0;
  } 77% {
    stroke-dashoffset: 0;
  } 81% {
    stroke-dashoffset: -6;
  } 100% {
    stroke-dashoffset: -6;
  }
`;

const animatedEyebrows = keyframes`
  0% {
    stroke-dashoffset: 33;
  } 10% {
    stroke-dashoffset: 0;
  } 90% {
    stroke-dashoffset: 0;
  } 100% {
    stroke-dashoffset: -33;
  }
`;

export const Wrapper = styled.div`
  ${({ isFullScreen }) => {
    if (isFullScreen) {
      return `position: fixed; 
         z-index: 99;
        `;
    } else {
      return `
        position: absolute;
      `;
    }
  }}
  display: grid;
  place-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 1;
`;

export const StyledLoader = styled.svg`
  .outline {
    stroke-dashoffset: 131px;
    stroke-dasharray: 131px;
    animation: ${animatedOutline} 10s both linear infinite;
  }

  .line-middle-of-forehead {
    stroke-dashoffset: 36px;
    stroke-dasharray: 36px;
    animation: ${animatedForeheadLine} 10s both linear infinite;
  }

  .left-eye {
    stroke-dashoffset: 23px;
    stroke-dasharray: 23px;
    animation: ${animatedLeftEye} 10s both linear infinite;
  }

  .right-eye {
    stroke-dashoffset: 45px;
    stroke-dasharray: 45px;
    animation: ${animatedRightEye} 10s both linear infinite;
  }

  .outline-of-mouth {
    stroke-dashoffset: 55.5px;
    stroke-dasharray: 55.5px;
    animation: ${animatedMouth} 10s both linear infinite;
  }

  .chin {
    stroke-dashoffset: 6px;
    stroke-dasharray: 6px;
    animation: ${animatedChin} 10s both linear infinite;
  }

  .eyebrows {
    stroke-dashoffset: 33px;
    stroke-dasharray: 33px;
    animation: ${animatedEyebrows} 5s 2.1s both linear infinite;
  }
`;
