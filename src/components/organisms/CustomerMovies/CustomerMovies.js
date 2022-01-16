import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from 'context/favoriteContext';

import { MovieWrapper, Wrapper, OpenCloseButton, RemoveButton } from './CustomerMovies.styles';
import { Title } from 'components/atoms/Title/Title';

const CustomerMovies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(FavoriteContext);

  const favoriteCustomerMovies = state.length ? (
    state.map(({ id, title }) => (
      <MovieWrapper key={id}>
        <Link to={`/movie/${id}`}>{title}</Link>
        <RemoveButton onClick={() => dispatch({ type: 'REMOVE_MOVIE', payload: id })}>-</RemoveButton>
      </MovieWrapper>
    ))
  ) : (
    <p>you dont have favorite movies yet</p>
  );
  console.log(isOpen);
  return (
    <Wrapper isOpen={isOpen}>
      <OpenCloseButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        {'<'}
      </OpenCloseButton>
      <Title>Your favorite movies</Title>
      {favoriteCustomerMovies}
    </Wrapper>
  );
};

export default CustomerMovies;
