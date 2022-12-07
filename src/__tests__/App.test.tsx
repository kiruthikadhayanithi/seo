import { AppPlain as App } from 'App';
import { renderWithProviders } from 'testUtils/renderWithProviders';

describe('App', () => {
  it('renders', () => {
    expect(async () => {
      await renderWithProviders(<App />);
    }).not.toThrow();
  });
});
