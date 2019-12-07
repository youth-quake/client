import React from 'react'

import {
  Button,
  Input,
  Anchor,
  Requirements,
  Theme,
  Modal,
  Loading
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

import girl from '../../assets/img/girl.png'
import youthquake from '../../assets/img/porkinYQ1.png'
import enhance from './Register.hoc'

import { Formik, ErrorMessage, Field } from 'formik'

const Register = ({
  isVisible,
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable,
  initialValues,
  handleSubmit,
  value,
  showModal,
  toggleModal,
  message,
  loading,
  setValue,
  setIsValid
}) => (
    <div>
      <Loading loading={loading} />
      <Container loading={loading}>
        <Modal
          showModal={showModal}
          toggleModal={toggleModal}
          title="Não foi possivel concluir o cadastro"
          Form={() => (<div>{message}</div>)}
        />
        {initialValues && (
          <Formik
            render={({
              values
            }) => (
                <Form>
                  <Logo src={youthquake} />
                  <Field
                    name="name"
                    render={({ field }) => (
                      <Input {...field} placeholder='Nome Completo' />
                    )}
                  />
                  <ErrorMessage name="name" />
                  <Field
                    name="login"
                    render={({ field }) => (
                      <Input {...field} placeholder='Nome de usuário' />
                    )}
                  />
                  <Field
                    name="email"
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder='E-mail'
                        type="email"
                        required
                      />
                    )}
                  />
                  <Field
                    name="confirmEmail"
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder='Confirmar e-mail'
                        type="email"
                        required
                      />
                    )}
                  />
                  <Field
                    name="password"
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder='Senha'
                        type="password"
                        required

                      />
                    )}
                  />
                  <Requirements
                    title={'Sua senha deve ter:'}
                    warning={'Evite senhas utilizadas em outros sites, ou que sejam fáceis de descobrir.'}
                    visible={isVisible}
                    requirements={requirements}
                    value={value}
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
    </div>
  )

export default enhance(Register)
