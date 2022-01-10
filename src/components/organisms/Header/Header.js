import React from 'react';

import Logo from 'components/atoms/Logo/Logo';
import DesktopNav from 'components/molecules/Nav/DesktopNav/DesktopNav';

import { StyledHeader } from './Header.styles';
import MobileNav from 'components/molecules/Nav/MobileNav/MobileNav';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <DesktopNav />
      <MobileNav />
    </StyledHeader>
  );
};

export default Header;
