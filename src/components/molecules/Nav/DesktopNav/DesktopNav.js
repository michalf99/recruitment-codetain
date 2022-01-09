import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledNav } from './DesktopNav.styles.js';

const DesktopNav = () => {
  return (
    <StyledNav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </StyledNav>
  );
};

export default DesktopNav;
