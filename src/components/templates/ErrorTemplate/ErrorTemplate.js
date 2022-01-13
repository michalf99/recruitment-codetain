import React from 'react';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';

const ErrorTemplate = ({ children }) => {
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {children}
    </>
  );
};

export default ErrorTemplate;
