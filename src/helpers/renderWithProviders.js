import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import FavoriteContextProvider from 'context/favoriteContext';
import { ErrorProvider } from 'hooks/useError';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <ErrorProvider>
        <FavoriteContextProvider>{children}</FavoriteContextProvider>
      </ErrorProvider>
    </ThemeProvider>
  );
};
