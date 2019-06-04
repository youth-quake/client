import React from 'react'
import { Theme, Input } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'

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

const Title = styled.label`
  font-family: ${Theme.font.font_family};
  font-size: 21px;
  margin-bottom: 20px;
  color: ${Theme.colors.font_color};
`

const Line = styled.div`
  width:100%;
  height: 1px;
  margin-top: 10px;
  background-color: ${Theme.colors.font_color};
`



export const Config = ({
  ...props
}) => {

  const {
    editable
  } = props

  return (
    <Formik
      render={({
        errors,
        values
      }) => (
          <Container>
            <Title>Configurações da conta</Title>
            <Line/>
              <Field
                name="register.username"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Nome do usuário'
                    disabled={editable}
                    errors={errors}
                  />
                )}
              />
              <Field
                name="register.email"
                render={({ field }) => (
                  <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='E-mail'
                    disabled={editable}
                    errors={errors}
                  />
                )}
              />

            <Title>Altere sua senha</Title>
            <Line/>  
            <Field
              name="register.password"
              render={({ field }) => (
                <Input
                    {...field}
                    backgroundColor={Theme.colors.base_color}
                    placeholder='Digite sua senha atual' 
                    type={'password'}
                    disabled={editable}
                    errors={errors}
                  />
              )}
            />
            <Field
              name="register.newpassword"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Nova senha'
                  type={'password'}
                  disabled={editable}
                  errors={errors}
                />
              )}
            />

            <Field
              name="register.repeatnewpassword"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Repita a nova senha'
                  type={'password'}
                  disabled={editable}
                  errors={errors}
                />
              )}
            />
          </Container>
        )}
    />
  )
}