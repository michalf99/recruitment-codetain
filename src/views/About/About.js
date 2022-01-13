import React from 'react';

import Resume from 'components/organisms/Resume/Resume';
import Gallery from 'components/organisms/Gallery/Gallery';
import FamiliarTechnologies from 'components/organisms/FamiliarTechnologies/FamiliarTechnologies';
import FavoriteMovies from 'components/organisms/FavoriteMovies/FavoriteMovies';

const About = () => {
  return (
    <>
      <Resume />
      <Gallery />
      <FamiliarTechnologies />
      <FavoriteMovies />
    </>
  );
};

export default About;
