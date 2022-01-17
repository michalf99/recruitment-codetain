import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import About from './About/About';
import { ErrorProvider } from 'hooks/useError';
import ErrorTemplate from 'components/templates/ErrorTemplate/ErrorTemplate';
import FavoriteMovie from './FavoriteMovie/FavoriteMovie';
import FavoriteContextProvider from 'context/favoriteContext';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <FavoriteContextProvider>
          <ErrorProvider>
            <GlobalStyle />
            <ErrorTemplate>
              <MainTemplate>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/movie/:id" element={<FavoriteMovie />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </MainTemplate>
            </ErrorTemplate>
          </ErrorProvider>
        </FavoriteContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
