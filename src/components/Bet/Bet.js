import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled, { css } from 'styled-components'
import iconProfileMini from '../../assets/img/girl mini.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { compose, withState, withHandlers } from 'recompose'
import { newBet } from '../../services'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow-y: auto;
  
  & > input {
    padding: 22px 10px;
  }

  & > input, textarea {
    width: 100%;
    box-sizing: border-box;
  }

  & > textarea {
    padding: 12px;
    font-size: 15px;
    text-align: justify;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
    border: none;
    outline: none;
    resize: none;
    border-radius: 3px;
    background-color: ${Theme.colors.base_color};
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > input+input {
    margin-left: 10px;
  }
`

const ContentImage = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const Image = styled.img`
  margin: 10px;
  height: 50px;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 22px;

  &:hover {
    opacity: 0.5;
  }
`

const Message = styled.span`
  color: ${Theme.colors.primary_color};
  display: ${props => props.visible ? css`block` : css`none`};
`

const enhance = compose(
  withState('initialValues', 'setInitialValues', {}),
  withState('visible', 'setVisible', false),
  withState('message', 'setMessage', ''),
  withHandlers({
    handleSetInitialValues: ({ setInitialValues }) => () => {
      const data = JSON.parse(localStorage.getItem('profile'))

      const register = {
        id: data.idUser,
        name: data.name,
        username: data.login,
        email: data.email,
        password: data.password
      }

      setInitialValues(register)
    },
    handleSubmit: ({ initialValues, setVisible, setMessage }) => (values, selectedFriend) => {
      fetch(newBet, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "idUser": initialValues.id,
          "idFriend": selectedFriend,
          "name": values.name,
          "description": values.description,
          "time": values.time,
          "value": values.value
        })
      })
        .then(response => response.json())
        .then(json => {
          if (json) {
            setMessage('Alteração realizada com sucesso')
            setVisible(true)
          } else {
            setMessage('Ocurreu um erro ao atualizar o cadastro')
            setVisible(true)
          }
        })
        .catch(error => {
          setMessage('Ocurreu um erro ao atualizar o cadastro')
          setVisible(true)
        })
    }
  })
)

const Component = ({
  editable,
  visible,
  message,
  handleSubmit,
  selectedFriend
}) => (
    <Formik
      render={({
        errors,
        values
      }) => (
          <Container>
            <ContentImage>
              <Image src={iconProfileMini} title="Visualizar opções" />
              <Icon icon={faTimes} />
              <Image src={iconProfileMini} title="Visualizar opções" />
            </ContentImage>
            <Wrapper>
              <Field
                name="register.dateStart"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Data inicial'
                    disabled={editable}
                    errors={errors}
                  />
                )}
              />
              <Field
                name="register.dateEnd"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Data final'
                    disabled={editable}
                    errors={errors}
                  />
                )}
              />
            </Wrapper>
            <Field
              name="register.description"
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder='Descrição'
                  disabled={editable}
                  errors={errors}
                  maxLength={200}
                  title="Descrição do objetivo"
                  rows="4"
                  cols="80"
                />
              )}
            />
            <Field
              name="register.value"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Valor proposto'
                  disabled={editable}
                  errors={errors}
                />
              )}
            />
            <Message visible={visible}>{message}</Message>
            <Button
              backgroundColor={Theme.colors.secondary_color}
              onClick={() => handleSubmit(values, selectedFriend.idUser)}
            >
              Cadastrar
              </Button>
          </Container>
        )}
    />
  )

export const Bet = enhance(Component)
