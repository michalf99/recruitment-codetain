import React from 'react';

import { Wrapper } from './HeroDescription.styles';
import { Button } from 'components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

const HeroDescription = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Michal Foltyn</h1>
      <h3>Front-end Developer</h3>
      <p>
        The best way to predict the future <br></br> is to create it.
      </p>
      <Button isPrimary onClick={() => navigate('/about')}>
        meet me!
      </Button>
    </Wrapper>
  );
};

export default HeroDescription;
