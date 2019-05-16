import React from 'react'
import styled from 'styled-components'
import youthquake from '../../assets/img/porkinYQ1.png'
import iconProfileMini from '../../assets/img/girl mini.png'
import { Modal } from '../../components'
import { compose, withHandlers, withState } from 'recompose'

const Container = styled.div`s
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`

const NavbarImage = styled.img`
  margin: 10px;
  height: 50px;

  &:hover{
    cursor: pointer;
  }
`

const enhance = compose(
  withState('showModal', 'setShowModal', false),
  withHandlers({
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    }
  })
)


export const Component = ({ showModal, toggleModal }) => (
  <Container>
    <Modal
      showModal={showModal}
      toggleModal={() => toggleModal()}
      title="Configurações"
      text=""
      Form={() => (<div></div>)}
    />
    <NavbarImage
      src={youthquake}
      title="Ir para a página inicial"
    />
    <NavbarImage src={iconProfileMini} title="Visualizar opções" />
  </Container>
)


export const NavBar = enhance(Component)