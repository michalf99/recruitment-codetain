import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Container from 'components/templates/Container/Container';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Container>
            <h1>App</h1>
          </Container>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
