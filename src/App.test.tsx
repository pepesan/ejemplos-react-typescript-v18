import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import App from './App';

test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})
  // verify page content for default route
  expect(screen.getByText(/Componente principal/i)).toBeInTheDocument()
})


test('landing on a bad page', () => {
  const badRoute = '/some/bad/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument()
})
test('rendering a component that uses useLocation', () => {
  const route = '/about'

  // use <MemoryRouter> when you want to manually control the history
  render(
      <MemoryRouter initialEntries={[route]}>
        <App></App>
      </MemoryRouter>,
  )

  // verify about is rendered
  expect(screen.getByText(/About Page/i)).toBeInTheDocument()
})
