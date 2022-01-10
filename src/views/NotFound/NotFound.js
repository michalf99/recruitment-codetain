import React from 'react';
import { ReactComponent as Image404 } from 'assets/images/404.svg';
import { Wrapper } from './NotFound.styles';

const NotFound = () => {
  return (
    <Wrapper>
      <Image404 />
    </Wrapper>
  );
};

export default NotFound;
