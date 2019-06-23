import React from 'react'

import {
  Button,
  Input,
  Anchor,
  Theme,
  Loading
} from '../../components'

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
import login from '../../assets/img/login.png'
import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png'

import { bool, shape } from 'prop-types'
import { Formik, Field } from 'formik'

import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

const responseFacebook = (response) => {

}

const responseGoogle = (response) => {

}

const Login = ({
  handleSubmit,
  setIsDisabled,
  isDisabled,
  loading
}) => (
    <div>
      <Loading loading={loading} />
      <Container loading={loading}>
        <Formik
          data-testid="login-form"
          render={({
            errors,
            values
          }) => (
              <Form onChange={() => { setIsDisabled(false) }}>
                <Logo src={youthquake} />
                <Option>
                  <Img src={google} />
                  <GoogleLogin
                    clientId="829754218470-ca67eraacbnc1nsr91e6tcr8uneckt33.apps.googleusercontent.com"
                    clientSecret="zO-a0SA2FLOhGt6f1rKgBEJm"
                    buttonText="Iniciar sessão com o Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    icon={false}
                  />
                </Option>
                <Option>
                  <Img src={facebook} />
                  <FacebookLogin
                    appId=""
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    textButton="Iniciar sessão com o Facebook"
                    language="pt_BR"
                    cssClass=""
                  />
                </Option>
                <Separator>
                  <Scratches />
                  <Text>OU</Text>
                  <Scratches />
                </Separator>
                <Field
                  name="login"
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder='Nome de usuário'
                      errors={errors}
                    />
                  )}
                />
                <Field
                  name="password"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type='password'
                      placeholder='Senha'
                      errors={errors}
                    />
                  )}
                />
                <Button
                  type="submit"
                  disabled={isDisabled}
                  onClick={() => handleSubmit(values)}
                  backgroundColor={Theme.colors.secondary_color}
                >
                  Entrar
                </Button>
                <Anchor
                  text='Não tem uma conta ainda?'
                  description='Crie agora mesmo'
                  to='/cadastro'
                />
              </Form>
            )}
        />
        <Content>
          <div>
            <Title>Bem vindo de volta!</Title>
            <Text>A solução para o gerenciamento de suas finanças e controle de gastos está aqui,
                Não perca tempo na hora de construir um futuro inovador.
          </Text>
          </div>
          <ContentImage src={login} />
        </Content>
      </Container>
    </div>
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
