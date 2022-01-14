import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from './MoviesList.styles';
import Columns from 'components/templates/Columns/Columns';

const MoviesList = (movies) => {
  const arrayWithSplitedUrlOfEachMovie = movies.map(({ url }) => url.split('/films/'));
  const arrayOfMoviesId = arrayWithSplitedUrlOfEachMovie.map((urlparts) => urlparts[1].split('/')[0]);

  const listOfFavoriteMovies = movies.map(({ title }, index) => (
    <Wrapper key={index}>
      <Link to={`/movie/${arrayOfMoviesId[index]}`}>
        <Title isBlack isMovie>
          {title}
        </Title>
      </Link>
    </Wrapper>
  ));

  return <Columns>{listOfFavoriteMovies}</Columns>;
};

export default MoviesList;
