import React from 'react';
import Hero from 'components/organisms/Hero/Hero';
import Columns from 'components/templates/Columns/Columns';

import { data } from '../../data/home';
import SingleColumn from 'components/molecules/SingleColumn/SingleColumn';

const Home = () => {
  const advantages = data.map((props, index) => <SingleColumn key={index} {...props} />);

  return (
    <>
      <Hero />
      <Columns>{advantages}</Columns>
    </>
  );
};

export default Home;
