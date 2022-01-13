import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import request from 'helpers/request';
import { useError } from 'hooks/useError';

import Loader from 'components/atoms/Loader/Loader';
import { Wrapper } from './FavoriteMovie.styles';
import { Title } from 'components/atoms/Title/Title';
import { Container } from 'components/templates/Container/Container';
import { Description } from 'components/atoms/Description/Description';

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

  const { title, director, producer, release_date, opening_crawl } = movie;

  return (
    <Wrapper>
      {!Object.keys(movie).length ? (
        <Loader isFullScreen />
      ) : (
        <Container>
          <Title>{title}</Title>
          <span>{release_date}</span>
          <Description>director: {director}</Description>
          <Description>producer: {producer}</Description>
          <Description>{opening_crawl}</Description>
        </Container>
      )}
    </Wrapper>
  );
};

export default FavoriteMovie;
