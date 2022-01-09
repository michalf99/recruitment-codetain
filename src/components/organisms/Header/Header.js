import React from 'react';

import Container from 'components/templates/Container/Container';
import Logo from 'components/atoms/Logo/Logo';
import DesktopNav from 'components/molecules/Nav/DesktopNav/DesktopNav';

import { StyledHeader } from './Header.styles';
import MobileNav from 'components/molecules/Nav/MobileNav/MobileNav';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <DesktopNav />
        <MobileNav />
      </Container>
    </StyledHeader>
  );
};

export default Header;
