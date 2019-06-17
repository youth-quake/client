import React from 'react'
import styled, { css } from 'styled-components'
import youthquake from '../../assets/img/daindia.png'
import iconProfileMini from '../../assets/img/girl mini.png'
import { Modal, Config } from '../../components'
import { compose, withHandlers, withState } from 'recompose'
import { Theme } from '../Theme'
import { Link } from 'react-router-dom'

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(210,210,210, 0.1);
  display: ${props => props.visible ? css`block` : css`none`};
`

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0;

  & > button+button {
      position: absolute;
      right: 30px;
  }
`

const NavbarImage = styled.button`
  margin: 10px;
  width: 5%;
  height: 50px;
  background: url(${props => props.img}) center no-repeat;
  background-size: 50px;
  border: none;
  outline: none;

  &:hover{
    cursor: pointer;
  }
`

const Menu = styled.div`
  background: red;
  position: absolute;
  width: 150px;
  font-family: ${Theme.font.font_family};
  z-index: 300;
  right: 0;
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

export const AllOptions = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  background: ${props => props.color};
  font-family: ${Theme.font.font_family};
`

export const WrapperOptions = styled.div`
  display:flex;  
  align-items: center;

  & > a+a{
    margin-left: 14px; 
  }
`

export const Option = styled(Link)`
  height: 40px;
  padding: 10px 0;
  line-height: 2;
  text-decoration: ${props => props.currentRoute ? 'underline' : 'none'};
  font-size: 18px;
  display: flex;
  align-items: center;

  & > button {
    width: 120px;
    color: ${Theme.colors.secondary_color};
  }
`

export const Divider = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  padding: 0 20px;
  justify-content: space-between;
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
      <Cover
        visible={visible}
        onClick={() => setVisible(false)}
      />
      <Menu visible={visible}>
        <div>
          <Link
            onClick={() => setVisible(false)}
            to='/perfil'
          >
            Perfil
          </Link>
          <Link
            onClick={() => setVisible(false)}
            to='/dashboard'
          >
            Dashboard
          </Link>
          <Link
            to='/dashboard'
            onClick={() => {
              toggleModal()
              setVisible(false)
            }}
          >
            Configurações
          </Link>
          <Link
            onClick={() => setVisible(false)}
            to='/apostas'
          >
            Apostas
          </Link>
          <Link
            onClick={() => {
              setVisible(false)
              localStorage.clear()
            }}
            to='/login'
          >
            Sair
          </Link>
        </div>
      </Menu>
      <Modal
        showModal={showModal}
        toggleModal={() => toggleModal()}
        title="Configurações da conta"
        text=""
        Form={Config}
      />
      <Divider>
          <NavbarImage
            img={youthquake}
            title="Ir para a página inicial"
          />
          <AllOptions color={Theme.base_color}>
            <WrapperOptions>
            <Option to='/'>Home</Option>
              <Option to='/#projeto'>O projeto</Option>
              <Option to='/#sobre-nos'>Fórum</Option>
            </WrapperOptions>
          </AllOptions>
        <NavbarImage
          onClick={() => setVisible(!visible)}
          img={iconProfileMini}
          title="Visualizar opções"
        />
      </Divider>
    </Container>
  )


export const NavBar = enhance(Component)