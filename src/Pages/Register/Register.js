import React from 'react'
import { Button, Input, Anchor, Requirements } from '../../components'
import { Container, Title, Form, Logo, ContentImage, Content, Text } from './Register.style'
import requirements from '../../utils/requirements'
import youthquake from '../../assets/img/youthquake.png'
import girl from '../../assets/img/girl.png'

const Register = ({
  value,
  isVisible,
  handleChange,
  setIsVisible,
  handleRequirements,
  isDisable
}) => (
  <Container>
    <Form>
      <Logo src={youthquake} />
      <Input placeholder='Apelido' />
      <Input placeholder='E-mail' />
      <Input
        type='password'
        placeholder='Senha'
        onChange={e => handleChange(e.target.value, requirements)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      />
      <Requirements
        value={value}
        title={'Sua senha deve ter:'}
        warning={'Evite senhas utilizadas em outros sites, ou que sejam fáceis de descobrir.'}
        visible={isVisible}
        requirements={requirements}
        onChange={handleRequirements}
      />
      <Button>Register</Button>
      <Anchor
        text='Já possui uma conta?'
        description='Entre agora mesmo'
        to='/login'
      />
    </Form>
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
