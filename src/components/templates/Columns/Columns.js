import React from 'react';
import { Wrapper } from './Columns.styles';

const Columns = ({ children }) => {
  return <Wrapper as="section">{children}</Wrapper>;
};

export default Columns;
