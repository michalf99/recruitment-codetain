import React from 'react';
import PropTypes from 'prop-types';

import { Description } from 'components/atoms/Description/Description';
import { Title } from 'components/atoms/Title/Title';

import { Wrapper } from './ErrorMessage.styles';

const defaultErrorMessage = 'Something went wrong. Please try again, or contact our support.';

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title isError>oops...</Title>
      <Description isError>{message}</Description>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
