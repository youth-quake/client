import React from 'react'
import { render } from 'react-testing-library'
import Register from './Register'

const component = props => (
  <Register />
)

describe('Register', () => {
  test('should render component', () => {
    const { getByTestId } = render(component)
    const register = getByTestId('register-form')
    expect(register).toBeInTheDocument()
  })
})