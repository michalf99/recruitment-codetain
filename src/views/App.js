import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
