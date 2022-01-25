import React, { useCallback, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import request from 'helpers/request';
import { useError } from 'hooks/useError';

import Loader from 'components/atoms/Loader/Loader';
import { ReactComponent as FavoriteIcon } from 'assets/icons/favorite.svg';
import { DetailsWrapper, Info, StyledButton } from './FavoriteMovie.styles';
import { Title } from 'components/atoms/Title/Title';
import { Container } from 'components/templates/Container/Container';
import { Description } from 'components/atoms/Description/Description';
import { FavoriteContext } from 'context/favoriteContext';

const FavoriteMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { dispatchError } = useError();

  const fetchMovieById = useCallback(async () => {
    let statusCode;

    try {
      const { data, status } = await request.get(`/${id}`);
      statusCode = status;

      if (status !== 200) {
        throw new Error();
      }

      data['id'] = +id;
      setMovie(data);
    } catch {
      dispatchError(
        `We've got a little problem... ${
          statusCode ? `Server send us a response with status ${statusCode}` : 'Server doesnt respond'
        }, thats mean we couldnt get this specitfic movie. Try to refresh site and feel free to contact our support`
      );
    }
  }, [id, dispatchError]);

  useEffect(() => {
    fetchMovieById();
  }, [fetchMovieById]);

  const { state, dispatch } = useContext(FavoriteContext);
  const { title, director, producer, release_date, opening_crawl } = movie;
  const movieAlreadyInFavorite = state.some((swmovie) => swmovie.id === movie.id);
  const handleButton = (isInFavorite) => {
    if (isInFavorite) {
      dispatch({ type: 'REMOVE_MOVIE', payload: movie.id });
    } else {
      dispatch({ type: 'ADD_MOVIE', payload: movie });
    }
  };

  return (
    <>
      {!Object.keys(movie).length ? (
        <Loader isFullScreen />
      ) : (
        <Container>
          <DetailsWrapper>
            <Title>{title}</Title>
            <StyledButton
              data-testid="favoriteButton"
              className={`${movieAlreadyInFavorite ? 'active' : ''}`}
              onClick={() => handleButton(movieAlreadyInFavorite)}>
              <FavoriteIcon />
            </StyledButton>
            <Info>release date: {release_date}</Info>
            <Info>director: {director}</Info>
            <Info>producer: {producer}</Info>
          </DetailsWrapper>

          <Description>{opening_crawl}</Description>
        </Container>
      )}
    </>
  );
};

export default FavoriteMovie;
