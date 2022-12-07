import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render,
  RenderOptions,
  RenderResult,
  waitFor,
  act,
} from '@testing-library/react';
import { theme, ThemeProvider } from '@mineral/core';

interface RenderWithProvidersOptions extends RenderOptions {
  route?: string;
}

export type RenderWithProviders = (
  ui: React.ReactElement,
  options?: RenderWithProvidersOptions
) => Promise<RenderResult>;

export const renderWithProviders: RenderWithProviders = async (
  ui,
  options = {}
) => {
  const { route = '/', ...restOptions } = options;

  const Wrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    </ThemeProvider>
  );

  const renderAndWait = async () => {
    const view = render(ui, {
      wrapper: Wrapper,
      ...restOptions,
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function, testing-library/no-wait-for-empty-callback
    await act(async () => await waitFor(() => {}));

    return view;
  };

  return await renderAndWait();
};
