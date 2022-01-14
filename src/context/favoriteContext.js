import React, { createContext, useReducer } from 'react';
import favoriteReducer from './favoriteReducer';

const parsedMovies = JSON.parse(localStorage.getItem('movies'));
const initialState = parsedMovies.length ? parsedMovies : [];

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  return <FavoriteContext.Provider value={{ state, dispatch }}>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
