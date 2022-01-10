import React from 'react';
import { Wrapper } from './Hero.styles';
import { Container } from 'components/templates/Container/Container';
import BannerImage from 'components/atoms/BannerImage/BannerImage';
import HeroDescription from 'components/molecules/HeroDescription/HeroDescription';

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <HeroDescription />
        <BannerImage />
      </Container>
    </Wrapper>
  );
};

export default Hero;
