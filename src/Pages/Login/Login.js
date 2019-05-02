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

import { bool, shape } from 'prop-types'
import { Formik, Field } from 'formik'

const Login = ({
  isDisable,
  initialValues,
  validation,
  handleSubmit,
  handleChange
}) => (
  <Container>
      {initialValues && (
        <Formik
          initialValues={initialValues}
          validate={validation}
          onSubmit={handleSubmit}
          render={({
            errors
          }) => (
              <Form onChange={handleChange}>
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
                  name="register.login"
                  render={({ field }) => (
                    <Input 
                      {...field} 
                      placeholder='Login'
                      errors={errors} 
                    />
                  )}
                />
                <Field
                  name="register.password"
                  render={({ field }) => (
                    <Input 
                      {...field} 
                      type='password' 
                      placeholder='Senha' 
                      errors={errors} 
                    />
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
          <Title>Bem vindo de volta!</Title>
          <Text>A solução para o gerenciamento de suas finanças e controle de gastos está aqui,
              Não perca tempo na hora de construir um futuro inovador.
          </Text>
        </div>
        <ContentImage src={girl} />
      </Content>
    </Container>
  )

Login.propTypes = {
  isDisable: bool,
  initialValues: shape({})
}

Login.defaultProps = {
  isDisable: true,
  initialValues: {}
}

export default Login
