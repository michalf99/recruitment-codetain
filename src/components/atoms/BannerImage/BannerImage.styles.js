import styled, { keyframes } from 'styled-components';

const animatedOpacity = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const animatedHeaderButton = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-50px);
  } 100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const animatedShadowBanner = keyframes`
  0%{
    opacity: 0;
    transform: translate(-163.5px, -185.66433px) translateY(-100px);
  } 90% {
    opacity: 1;
  } 100% {
    opacity: 1;
    transform: translate(-163.5px, -185.66433px) translateY(0);
  }
`;

const animatedColumnShadow = keyframes`
  0%{
    opacity: 0;
    transform: translate(-163.5px, -185.66433px) translateY(-100px);
  }
  50% {
    opacity: 0;
  }
   90% {
    opacity: 1;
  } 100% {
    opacity: 1;
    transform: translate(-163.5px, -185.66433px) translateY(0);
  }
`;

const animatedBanner = keyframes`
  0%{
    opacity: 0;
    transform: translate(-163.5px, -185.66433px) translateY(100px);
  } 100% {
    opacity: 1;
    transform: translate(-163.5px, -185.66433px) translateY(0px);
  }
`;

const animatedBannerMountain = keyframes`
  0%{
    opacity: 0;
    transform: translate(-163.5px, -185.66433px) scale(0);
  } 60%{
    opacity: 0;
  } 100% {
    opacity: 1;
    transform: translate(-163.5px, -185.66433px) scale(1);
  }
`;

const animatedBannerSun = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) translate(0, 0);
  } 15% {
    opacity: 0;
  } 25% {
    opacity: 1;
    transform: scale(1) translate(0, 0);
  } 40% {
    opacity: 1;
    transform: scale(1) translate(0, 0);
  } 70% {
    opacity: 1;
    transform: scale(1) translate(150px, -20px);
  } 100% {
    opacity: 1;
    transform: scale(1) translate(250px, 0px);
  }
`;

const animatedLeftColumnContainer = keyframes`
  0% {
    opacity: 0;
    transform: translate(-163.5px, -185.66433px) translate(-10px, -10px);
  } 60% {
    opacity: 1;
  } 100% {
    opacity: 1;
    transform: translate(-163.5px, -185.66433px) translate(0px, 0px);
  }
`;

const animatedRightColumnContainer = keyframes`
  0% {
    opacity: 0;
    transform: translate(-163.5px, -185.66433px) translate(-30px, -30px);
  } 60% {
    opacity: 1;
  } 100% {
    opacity: 1;
    transform: translate(-163.5px, -185.66433px) translate(0px, 0px);
  }
`;

const animatedMiddleColumnContainer = keyframes`
  0% {
    opacity: 0;
    transform: translate(-163.5px, -185.66433px) translate(-50px, -50px);
  } 60% {
    opacity: 1;
  } 100% {
    opacity: 1;
    transform: translate(-163.5px, -185.66433px) translate(0px, 0px);
  }
`;

const animatedStretchingLine = keyframes`
  0%{
    opacity: 0;
    transform: translate(-163.5px, -185.66433px) scaleX(0);
  } 70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(-163.5px, -185.66433px) scaleX(1);
  }
`;

export const StyledSvg = styled.svg`
  width: 100%;

  .outline,
  .border-bottom-header {
    animation: ${animatedOpacity} 0.4s 0.5s linear both;
  }

  .header-button {
    animation: ${animatedHeaderButton} 0.4s both;

    &.exit {
      animation-delay: 0.8s;
    }
    &.minimalize {
      animation-delay: 1s;
    }
    &.stretch {
      animation-delay: 1.2s;
    }
  }

  .banner-image-shadow {
    animation: ${animatedShadowBanner} 0.4s 1.23s linear both;
  }

  .banner-shadow-line {
    animation: ${animatedOpacity} 0.3s 1.5s both;
  }

  .left-column-outline-shadow,
  .middle-column-outline-shadow,
  .right-column-outline-shadow {
    animation: ${animatedColumnShadow} 0.4s 1.4s both;
  }

  .left-column-outline-shadow {
    animation-delay: 1.4s;
  }

  .left-column-shadow-line {
    animation: ${animatedOpacity} 0.3s 1.7s both;
  }

  .middle-column-outline-shadow {
    animation-delay: 1.5s;
  }

  .middle-column-shadow-line {
    animation: ${animatedOpacity} 0.3s 1.8s both;
  }

  .right-column-outline-shadow {
    animation-delay: 1.6s;
  }

  .right-column-shadow-line {
    animation: ${animatedOpacity} 0.3s 1.9s both;
  }

  .banner-imgae-background-color,
  .banner-outline {
    animation: ${animatedBanner} 0.5s 2s both;
  }

  .banner-image-mountain {
    animation: ${animatedBannerMountain} 0.4s 2.4s both;
  }

  .banner-image-sun {
    animation: ${animatedBannerSun} 2s 2.4s both;
  }

  .left-column-container {
    animation: ${animatedLeftColumnContainer} 0.2s 2.8s both;
  }

  .left-column-heading,
  .left-column-description {
    animation: ${animatedOpacity} 0.2s 3s both;
  }

  .right-column-container {
    animation: ${animatedRightColumnContainer} 0.4s 2.9s both;
  }

  .right-column-heading,
  .right-column-description {
    animation: ${animatedOpacity} 0.2s 3.1s both;
  }

  .right-column-underline {
    animation: ${animatedStretchingLine} 0.4s 2.9s both;
  }
  .middle-column-container {
    animation: ${animatedMiddleColumnContainer} 0.3s 3s both;
  }

  .middle-column-heading,
  .middle-column-description {
    animation: ${animatedOpacity} 0.2s 3.2s both;
  }

  .middle-column-underline {
    animation: ${animatedStretchingLine} 0.3s 3s both;
  }
`;
