const setStorage = (movieItems) => {
  const movies = movieItems.length ? movieItems : [];
  localStorage.setItem('movies', JSON.stringify(movies));
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      const movies = [...state, action.payload];
      setStorage(movies);
      return movies;
    case 'REMOVE_MOVIE':
      const newState = state.filter((movie) => movie.id !== action.payload);
      setStorage(newState);
      return [...newState];
    default:
      return state;
  }
};

export default favoriteReducer;
