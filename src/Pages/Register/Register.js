import React from 'react'
import {
  Button,
  Input,
  Anchor,
  Requirements,
  Theme
} from '../../components'
import {
  Container,
  Title,
  Form,
  Logo,
  ContentImage,
  Content,
  Text,
  To
} from './Register.style'
import requirements from '../../utils/requirements'
import youthquake from '../../assets/img/porkinYQ1.png'
import girl from '../../assets/img/girl.png'
import { Formik, Field } from 'formik'
import {
  shape
} from 'prop-types'

const Register = ({
  isVisible,
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable,
  validation,
  initialValues,
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
                <Field
                  name="register.name"
                  render={({ field }) => (
                    <Input {...field} placeholder='Nome Completo' />
                  )}
                />
                <Field
                  name="register.username"
                  render={({ field }) => (
                    <Input {...field} placeholder='Apelido' />
                  )}
                />
                <Field
                  name="register.email"
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder='E-mail'
                      type='email'
                      required
                    />
                  )}
                />
                <Field
                  name="register.confirmEmail"
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder='Confirmar e-mail'
                      type='email'
                      required
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
                      onChange={e => handleChange(e.target.value, requirements)}
                      onFocus={() => setIsVisible(true)}
                      onBlur={() => setIsVisible(false)}
                    />
                  )}
                />
                <Requirements
                  title={'Sua senha deve ter:'}
                  warning={'Evite senhas utilizadas em outros sites, ou que sejam fáceis de descobrir.'}
                  visible={isVisible}
                  requirements={requirements}
                  onChange={handleRequirements}
                />
                <Button type="submit" disabled={isDisable} backgroundColor={Theme.colors.secondary_color}>
                  <To to='/perfil' disabled={isDisable}>
                    Cadastrar
                </To>
                </Button>
                <Anchor
                  text='Já possui uma conta?'
                  description='Entre agora mesmo'
                  to='/login'
                />
              </Form>
            )}
        />
      )}
      <Content>
        <div>
          <Title>Feito para jovens como você!</Title>
          <Text>Acredite na mudança e nas coisas boas que podemos construir juntos.
              Não perca tempo na hora de construir um futuro inovador.
          </Text>
        </div>
        <ContentImage src={girl} />
      </Content>
    </Container>
  )

Register.propTypes = {
  initialValues: shape({})
}

Register.defaultProps = {
  initialValues: {}
}

export default Register
