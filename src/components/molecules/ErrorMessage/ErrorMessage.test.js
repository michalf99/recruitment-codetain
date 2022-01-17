import { screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import ErrorMessage from './ErrorMessage';

describe('CustomerMovies', () => {
  it('Renders the component', () => {
    renderWithProviders(<ErrorMessage message="issue" />);
    screen.getByText('issue');
  });
});
