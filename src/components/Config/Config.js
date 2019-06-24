import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled, { css } from 'styled-components'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { alterRegister } from '../../services'

const Container = styled.div`
  width: 60%;
  margin: 0 auto; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  max-height: 75vh;
  padding: 20px;

  & > * {
    margin: 0;
    width: 100%;
  }

  & > button {
    width: 200px;
  }
`

const Fields = styled.div`
  width: 100%;
  padding: 4px 0;
  display: flex;
  flex-flow: column;
  align-items: flex-start;  
  margin: 2px 0;
  
  & > input {
    width: 95%;
    height: 25px;
  }
`

const Label = styled.label`
  font-family: ${Theme.font.font_family};
  font-size: 14px;
  color: ${Theme.colors.font_color};
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  & > button+button {
    width: 220px;
    margin-right: 10px;
  }
`

const Delete = styled(Button)`
  width: 120px;
  font-weight: normal;
  color: #A8A8A8; 
  padding: 0;
  border: solid 1px #E8E8E8;

  &:hover {
    background: ${Theme.colors.font_color};
    color: #FFF;
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
    handleSubmit: ({ initialValues, setVisible, setMessage }) => data => {
      fetch(`${alterRegister}/${initialValues.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": data.name,
          "login": data.username,
          "email": data.email,
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
    }
  }),
  lifecycle({
    componentDidMount() {
      const { handleSetInitialValues } = this.props
      handleSetInitialValues()
    }
  })
)

const Component = ({
  initialValues,
  visible,
  message,
  handleSubmit
}) => (
    <Formik
      initialValues={initialValues}
      render={({
        errors,
        values
      }) => (
          <Container>
            <Fields>
              <Label>Email</Label>
              <Field
                name="initialValues.email"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='E-mail'
                    errors={errors}
                  />
                )}
              />
            </Fields>
            <Fields>
              <Label>Senha atual</Label>
              <Field
                name="initialValues.password"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Digite sua senha atual'
                    type={'password'}
                    errors={errors}
                  />
                )}
              />
            </Fields>
            <Fields>
              <Label>Nova senha</Label>
              <Field
                name="initialValues.newpassword"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Nova senha'
                    type={'password'}
                    errors={errors}
                  />
                )}
              />
            </Fields>
            <Message visible={visible}>{message}</Message>
            <Actions>
              <Delete backgroundColor={'transparent'}> Excluir conta </Delete>
              <Button
                onClick={() => handleSubmit(values)}
                backgroundColor={Theme.colors.secondary_color}
              >
                Salvar alterações
              </Button>
            </Actions>
          </Container>
        )}
    />

  )

export const Config = enhance(Component)