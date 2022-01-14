import React from 'react';

import { Wrapper } from './HeroDescription.styles';
import { Button } from 'components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';

const HeroDescription = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title isBig>Michal Foltyn</Title>
      <h4>Front-end Developer</h4>
      <p>The best way to predict the future is to create it.</p>
      <Button isPrimary onClick={() => navigate('/about')}>
        meet me!
      </Button>
    </Wrapper>
  );
};

export default HeroDescription;
