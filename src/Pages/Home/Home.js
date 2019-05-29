import React from 'react'
import { Theme } from '../../components'
import { Menu, WrapperOptions, Option, Container } from './Home.style'

const Home = props => (
  <div>
    <Container>
      <Menu color={Theme.base_color}>
        <Option color={Theme.primary_color}>Youthquake</Option>
        <WrapperOptions>
          <Option to='#nosso-time'>Nosso time</Option>
          <Option to='#sobre-nos'>Sobre nós</Option>
          <Option to='login'>Login</Option>
        </WrapperOptions>
      </Menu>
    </Container>
    <Container>

    </Container>
  </div>
)

export default Home

/* calcular o valor por mês e confirmar se ele se compromete com o valor */