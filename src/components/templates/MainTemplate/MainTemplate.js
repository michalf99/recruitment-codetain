import React from 'react';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import CustomerMovies from 'components/organisms/CustomerMovies/CustomerMovies';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <CustomerMovies />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainTemplate;
