import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled, { css } from 'styled-components'
import { target } from '../../services'
import { compose, withState, withHandlers, lifecycle } from 'recompose'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 2% auto;
  width: calc(100vw - 60vw);
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto; 
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;

  & > * {
    margin: 0;
    width: 100%;
  }

  & > button {
    width: 200px;
  }
`

const WrapperInput = styled.div`
  width: 100%;
  padding: 4px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;  
  margin: 2px 0;

  & > input {
    width: 95%;
    box-sizign: border-box;
  }
`

const Label = styled.label`
  font-family: ${Theme.font.font_family};
  font-size: 14px;
  color: ${Theme.colors.font_color};
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

      const profile = {
        id: data.idUser,
        name: data.name,
        username: data.login,
        email: data.email,
        password: data.password
      }

      setInitialValues(profile)
    },
    handleSubmit: ({ initialValues, setVisible, setMessage }) => values => {
      const date = new Date()

      fetch(`${target}/${initialValues.id}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": values.initialValues.name,
          "description": values.initialValues.description,
          "dtStart": `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
          "dtEnd": values.initialValues.dateEnd,
          "value": values.initialValues.value
        })
      })
        .then(response => response.json())
        .then(json => {
          if (json) {
            setMessage('Objetivo cadastrado com sucesso')
            setVisible(true)
          } else {
            setMessage('Ops! Ocurreu um erro ao durante o cadastro.')
            setVisible(true)
          }
        })
        .catch(error => {
          setMessage('Ops! Ocurreu um erro ao durante o cadastro.')
          setVisible(true)
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
  message,
  visible,
  handleSubmit
}) => (
    <Wrapper>
      <Formik
        render={({
          values,
          errors
        }) => (
            <Container>
              <WrapperInput>
                <Label>Titulo</Label>
                <Field
                  name="initialValues.name"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Titulo'
                      errors={errors}
                    />
                  )}
                />
              </WrapperInput>
              <WrapperInput>
                <Label>Descrição</Label>
                <Field
                  name="initialValues.description"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Descrição'
                      errors={errors}
                    />
                  )}
                />
              </WrapperInput>
              <WrapperInput>
                <Label>Data final</Label>
                <Field
                  name="initialValues.dateEnd"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Data final'
                      errors={errors}
                    />
                  )}
                />
              </WrapperInput>
              <WrapperInput>
                <Label>Valor</Label>
                <Field
                  name="initialValues.value"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Valor'
                      errors={errors}
                    />
                  )}
                />
              </WrapperInput>
              <Message
                visible={visible}
              >
                {message}
              </Message>
              <Button
                backgroundColor={Theme.colors.secondary_color}
                onClick={() => handleSubmit(values)}
              >
                Novo objetivo
              </Button>
            </Container>
          )}
      />
    </Wrapper>
  )

export const NewTarget = enhance(Component)