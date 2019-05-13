import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'
import Login from './Login'

const component = props => (
  <Login />
)

describe('Should test Login component', () => {
  test('', () => {
    const { getByTestId } = render(component)
    const login = getByTestId('login-form')
    expect(login).toBeInTheDocument()
  })
})