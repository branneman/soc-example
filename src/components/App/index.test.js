import { render, screen } from '@testing-library/react'
import App from './index'

test('crash test: renders page title', () => {
  render(<App />)
  const appTitle = screen.getByText(/Newsletter/i)
  expect(appTitle).toBeInTheDocument()
})
