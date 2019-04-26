import React from 'react'
import { Button, Input, Anchor, Requirements } from '../../components'
import { Container, Title, Form, Logo, ContentImage, Content, Text } from './Register.style'
import requirements from '../../utils/requirements'
import youthquake from '../../assets/img/porkinYQ1.png'
import girl from '../../assets/img/girl.png'
import { Formik, Field } from 'formik'

const Register = ({
  value,
  isVisible,
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable,
  values
}) => (
    <Container>
      {values && (
        <Formik
          render={({ 
            errors, 
            values, 
            setFieldValue 
          }) => (
            <Form>
              <Logo src={youthquake} />
              <Field
                name="register.name"
                render={({field}) => (
                  <Input {...field} placeholder='Nome Completo' />
                )}
              />
              <Field
                name="register.username"
                render={({field}) => (
                  <Input {...field} placeholder='Apelido' />
                )}
              />
              <Field
                name="register.email"
                render={({field}) => (
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
                render={({field}) => (
                  <Input 
                    {...field} 
                    placeholder='Confirmar E-mail' 
                    type='email' 
                    required
                  />
                )}
              />
              <Field
                name="register.password"
                render={({field}) => (
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
                value={value}
                title={'Sua senha deve ter:'}
                warning={'Evite senhas utilizadas em outros sites, ou que sejam fáceis de descobrir.'}
                visible={isVisible}
                requirements={requirements}
                onChange={handleRequirements}
              />
              <Button disabled={isDisable}>Cadastrar</Button>
              <Anchor
                text='Já possui uma conta?'
                description='Entre agora mesmo'
                to='/login'
              />
            </Form>
          )}
        >

        </Formik>
      )}
      <Content>
        <div>
          <Title>Para um jovem retardado como você</Title>
          <Text>Lorem ITextsum is simTextly dummy text of the Textrinting and tyTextesetting industry. Lorem ITextsum has been the</Text>
        </div>
        <ContentImage src={girl} />
      </Content>
    </Container>
  )

export default Register

