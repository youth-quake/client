import React from 'react'
import { Theme, Input, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'
import { compose, withState, withHandlers, lifecycle } from 'recompose'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 2% auto;
  width: 70%;
`

const Container = styled.div`
  width: 80%;
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

const enhance = compose(
  withState('initialValues', 'setInitialValues', {}),
  withHandlers({
    handleSetInitialValues: ({ setInitialValues }) => () => {
      const data = JSON.parse(localStorage.getItem('profile'))

      const register = {
        name: data.name,
        username: data.login,
        email: data.email,
        password: data.password
      }

      setInitialValues(register)
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
  initialValues
}) => (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        render={({
          errors
        }) => (
            <Container>
              <WrapperInput>
                <Label>Nome completo</Label>
                <Field
                  name="initialValues.name"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Nome completo'
                      errors={errors}
                    />
                  )}
                />
              </WrapperInput>
              <WrapperInput>
                <Label>Nome de usuário</Label>
                <Field
                  name="initialValues.username"
                  render={({ field }) => (
                    <Input
                      {...field}
                      backgroundColor={Theme.colors.base_color}
                      placeholder='Nome de usuário'
                      errors={errors}
                    />
                  )}
                />
              </WrapperInput>
              <WrapperInput>
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
              </WrapperInput>
              <WrapperInput>
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
              </WrapperInput>
              <WrapperInput>
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
              </WrapperInput>
              <Actions>
                <Delete backgroundColor={'transparent'}> Excluir conta </Delete>
                <Button backgroundColor={Theme.colors.secondary_color}> Salvar alterações </Button>
              </Actions>
            </Container>
          )}
      />
    </Wrapper>
  )

export const Config = enhance(Component)