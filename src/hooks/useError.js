import React, { createContext, useCallback, useContext, useState } from 'react';

const ErrorContext = createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const dispatchError = useCallback((message) => {
    setError(message);
    setTimeout(() => setError(null), 6000);
  }, []);

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!Object.keys(errorContext).length) {
    console.log('Error context doesnt exists');
  }

  return errorContext;
};
