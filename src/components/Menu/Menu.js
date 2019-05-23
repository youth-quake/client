import React from 'react'
import styled, { css } from 'styled-components'
import youthquake from '../../assets/img/porkinYQ1.png'
import iconProfileMini from '../../assets/img/girl mini.png'
import { Modal } from '../../components'
import { compose, withHandlers, withState } from 'recompose'
import { Theme } from '../Theme'
import { Link } from 'react-router-dom'

const Container = styled.div`s
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  position: relative;

  & > img+img{
    position: absolute;
    right: 30px;
  }
`

const NavbarImage = styled.img`
  margin: 10px;
  height: 50px;

  &:hover{
    cursor: pointer;
  }
`

const Menu = styled.div`
  background: red;
  position: absolute;
  width: 150px;
  font-family: ${Theme.font.font_family};
  z-index: 100;
  right: 10px;
  top: 80px;
  padding: 10px;
  background: #FFFFFF;
  border-radius: 3px;
  border: ${Theme.colors.base_color} solid 1px;
  box-shadow: 7px 2px 16px -11px rgba(0,0,0,0.75);
  visibility: ${props => props.visible ? css`visible` : css`hidden`};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: ${Theme.colors.base_color};
    border-top: 0;
    border-right: 0;
    margin-left: -10px;
    margin-top: -20px;
  }

  & > div {
    display: flex;
    flex-flow: column;
    align-items: center;

    & > a {
      width: 100%;
      text-decoration: none;
      padding: 5px 0;
      margin: 0 0 2px;
      text-align: center;
    }

    & > a:last-child{
      border-top: solid 1px ${Theme.colors.base_color};
      margin: 2px 0;
    }
  }
`

const enhance = compose(
  withState('showModal', 'setShowModal', false),
  withState('visible', 'setVisible', false),
  withHandlers({
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    }
  })
)

export const Component = ({ 
  handleChange, 
  showModal, 
  toggleModal, 
  visible, 
  setVisible 
}) => (
  <Container>
    <Menu visible={visible}>
      <div>
        <Link to='/perfil'>Perfil</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/apostas'>Apostas</Link>
        <Link to='/login'>Sair</Link>
      </div>
    </Menu>
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
    <NavbarImage onClick={() => setVisible(!visible)} src={iconProfileMini} title="Visualizar opções" />
  </Container>
)


export const NavBar = enhance(Component)