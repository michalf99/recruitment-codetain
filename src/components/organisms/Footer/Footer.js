import React from 'react';

import { StyledFooter, StyledParagraph } from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledParagraph>Michał Foltyn {currentYear} &copy; All rights reserved.</StyledParagraph>
    </StyledFooter>
  );
};

export default Footer;
