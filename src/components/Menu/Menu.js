import React from 'react'
import styled from 'styled-components'
import youthquake from '../../assets/img/porkinYQ1.png'
import iconProfileMini from '../../assets/img/girl mini.png'

const Container = styled.div`s
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`

const NavbarImage = styled.img`
  margin: 10px;
  height: 50px;
`

export const NavBar = () => (
  <Container>
    <NavbarImage src={youthquake} title="Ir para a página inicial" />
    <NavbarImage src={iconProfileMini} title="Visualizar opções" />
  </Container>
)