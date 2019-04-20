import React from 'react'
import { Theme } from '../../components'
import { Wrapper, Menu, Youthquake, WrapperOptions, Option, Container, Team } from './Home.style'

const Home = props => (
  <Wrapper>
    <Menu color={Theme.base_color}>
      <Youthquake color={Theme.primary_color}>
        <Option to='/'>Youthquake</Option>
      </Youthquake>
      <WrapperOptions color='transparent'>
        <Option to='/nosso-time' color={Theme.primary_color}>Nosso time</Option>
        <Option to='/sobre-nos' color={Theme.primary_color}>Sobre nós</Option>
        <Option to='/login' color={Theme.primary_color}>Login</Option>
      </WrapperOptions>
    </Menu>
    <Team>
      <Container>

      </Container>
    </Team>
  </Wrapper>
)

export default Home
