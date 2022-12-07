import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testUtils/renderWithProviders';
import { AppPlain as App } from 'App';

describe('NotFound', () => {
  it('renders', async () => {
    await renderWithProviders(<App />, {
      route: '/notfound',
    });

    const page = await screen.findByTestId('notFoundPage');

    expect(page).toBeInTheDocument();
  });
});
