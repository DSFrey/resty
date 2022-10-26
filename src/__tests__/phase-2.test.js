import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react"
import App from "../app"

describe('Form component', () => {
  test('Loads and displays initial components', () => {
    render(<App />)

    const form = screen.getByTestId('form')
    expect(form).toBeInTheDocument()
    const results = screen.getByTestId('results')
    expect(results).toBeInTheDocument();
  })
})