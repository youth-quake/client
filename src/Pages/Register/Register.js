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
  Text
} from './Register.style'
import requirements from '../../utils/requirements'
import youthquake from '../../assets/img/porkinYQ1.png'
import girl from '../../assets/img/girl.png'
import { Formik, ErrorMessage, Field } from 'formik'
import { shape } from 'prop-types'
import enhance from './Register.hoc'
import { validationSchema } from './Register.validation'

const Register = ({
  isVisible,
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable,
  initialValues,
  handleSubmit,
  value
}) => (
    <Container>
      {initialValues && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          data-testid="register-form"
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
                <ErrorMessage name="register.name" />
                <Field
                  name="register.login"
                  render={({ field }) => (
                    <Input {...field} placeholder='Apelido' />
                  )}
                />
                <ErrorMessage name="register.login" />
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
                <ErrorMessage name="register.email" />
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
                <ErrorMessage name="register.confirmEmail" />
                <Field
                  name="register.password"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type='password'
                      placeholder='Senha'
                      onChange={e => handleChange(e.target.value)}
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
                  onChange={() => handleRequirements(requirements, value)}
                />
                <Button
                  type="submit"
                  onClick={() => handleSubmit(values)}
                  backgroundColor={Theme.colors.secondary_color}
                >
                  Cadastrar
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
          <Text>A solução para o gerenciamento de suas finanças e controle de gastos está aqui,
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

export default enhance(Register)
