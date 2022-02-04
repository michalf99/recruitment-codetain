import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from './MoviesList.styles';
import Columns from 'components/templates/Columns/Columns';

const MoviesList = (movies) => {
  const moviesId = movies.map(({ url }) => url.split('films/')[1].split('/')[0]);

  const listOfFavoriteMovies = movies.map(({ title }, index) => (
    <Wrapper key={index}>
      <Link to={`/movie/${moviesId[index]}`}>
        <Title isBlack isMovie>
          {title}
        </Title>
      </Link>
    </Wrapper>
  ));

  return <Columns>{listOfFavoriteMovies}</Columns>;
};

export default MoviesList;
