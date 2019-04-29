import React from 'react'

import { Button, Input, Anchor } from '../../components'
import {
  Logo,
  Form,
  Container,
  Content,
  ContentImage,
  Title,
  Text,
  Img,
  Option,
  Scratches,
  Separator
} from './Login.style'

import youthquake from '../../assets/img/porkinYQ1.png'
import girl from '../../assets/img/girl.png'
import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png'

import { bool } from 'prop-types'
import { Formik, Field } from 'formik'

const Login = ({
  value,
  isVisible,
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable,
  initialValues,
  validation,
  handleSubmit
}) => (
    <Container>
      {initialValues && (
        <Formik
          initialValues={initialValues}
          validate={validation}
          onSubmit={handleSubmit}
          render={({
            errors,
            values,
            setFieldValue,
            form
          }) => (
              <Form>
                <Logo src={youthquake} />
                <Option>
                  <Img src={google} />
                  <Text>Iniciar a sessão com o Google</Text>
                </Option>
                <Option>
                  <Img src={facebook} />
                  <Text>Iniciar a sessão com o Facebook</Text>
                </Option>
                <Separator>
                  <Scratches />
                  <Text>OU</Text>
                  <Scratches />
                </Separator>
                <Field
                  name="register.username"
                  render={({ field }) => (
                    <Input {...field} placeholder='Login' />
                  )}
                />
                <Field
                  name="register.password"
                  render={({ field }) => (
                    <Input type='password' placeholder='Senha' />
                  )}
                />
                <Button type="submit" disabled={isDisable}>Entrar</Button>
                <Anchor
                  text='Não tem sua conta ainda?'
                  description='Cadastre-se'
                  to='/cadastro'
                />
              </Form>
            )}
        />
      )}
      <Content>
        <div>
          <Title>Seja bem vindo ao Youthquake</Title>
          <Text>A solução para o gerenciamento de suas finanças e controle de gastos está aqui!
              Crie sua conta agora mesmo e comece a construção de seu futuro financeiro.
          </Text>
        </div>
        <ContentImage src={girl} />
      </Content>
    </Container>
  )

Login.propTypes = {
  isDisable: bool
}

Login.defaultProps = {
  isDisable: true
}

export default Login
