import React from 'react';

import { Title } from 'components/atoms/Title/Title';
import { Description } from 'components/atoms/Description/Description.js';
import { Container } from 'components/templates/Container/Container';

import { Wrapper, Portrait } from './Resume.styles.js';
import MyPortrait from 'assets/images/my-portrait.jpeg';

const Resume = () => {
  return (
    <Wrapper>
      <Container>
        <Title isBig>Michal Foltyn</Title>
        <Description>
          I'm frontend developer of 4years experience that starts with own projects. I'm happiest when I'm creating, learning, exploring and thinking
          about how to make things better. I thrive on bringing ideas to life and I love to code eye-catching projects, especially animations. In my
          spare time I play video games and trying to levelup my code skills.
        </Description>
        <Portrait src={MyPortrait} alt="Michał Foltyn" />
      </Container>
    </Wrapper>
  );
};

export default Resume;
