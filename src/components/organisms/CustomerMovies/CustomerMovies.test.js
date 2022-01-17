import { screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import CustomerMovies from './CustomerMovies';

describe('CustomerMovies', () => {
  it('Renders the component', () => {
    renderWithProviders(<CustomerMovies />);
    screen.getByText('Your favorite movies');
  });
});
