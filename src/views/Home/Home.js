import React from 'react';
import Hero from 'components/organisms/Hero/Hero';
import Columns from 'components/templates/Columns/Columns';

import { data } from './data';
import SingleColumn from 'components/molecules/SingleColumn/SingleColumn';

// <div>
// I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. I can take your project to the next level.
// I thrive on bringing ideas to life and have a reputation for delivering eye-catching results ahead of schedule.
// </div>

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
