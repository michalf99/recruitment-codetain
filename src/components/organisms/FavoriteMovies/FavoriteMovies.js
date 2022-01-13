import React, { useEffect, useState, useCallback } from 'react';
import request from 'helpers/request';
import { useError } from 'hooks/useError';
import { Container } from 'components/templates/Container/Container';

import { Wrapper } from './FavoriteMovies.styles';
import { Title } from 'components/atoms/Title/Title';
import MoviesList from 'components/molecules/MoviesList/MoviesList';
import Loader from 'components/atoms/Loader/Loader';

const FavoriteMovies = () => {
  const [movies, setMovies] = useState([]);
  const { dispatchError } = useError();

  const fetchMoviesFromStarWarsApi = useCallback(async () => {
    let statusCode;

    try {
      const { data, status } = await request.get('/');
      statusCode = status;

      if (status !== 200) {
        throw new Error();
      }

      setMovies(data.results);
    } catch {
      dispatchError(
        `We've got a little problem...  ${
          statusCode ? `Server send us a response with status ${statusCode}` : 'Server doesnt respond'
        }, thats mean we couldnt present you favorites movies. Try to refresh site and feel free to contact our support`
      );
    }
  }, [dispatchError]);

  useEffect(() => {
    fetchMoviesFromStarWarsApi();
  }, [fetchMoviesFromStarWarsApi]);

  return (
    <Wrapper>
      <Container>
        <Title isBig>Favorite Movies</Title>
        {!movies.length ? <Loader /> : MoviesList(movies)}
      </Container>
    </Wrapper>
  );
};

export default FavoriteMovies;
