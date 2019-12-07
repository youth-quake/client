import React from 'react'
import styled from 'styled-components'
import { Theme } from '../../components'
import linkedin from '../../assets/img/linkedin.png'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook-logo-button.png'
import twitter from '../../assets/img/twitter.png'

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${Theme.colors.secondary_color};
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.base_color};
  font-size: 16px;

  & > span {
    margin: 10px;
    padding: 10px;
  }

  & > u {
    color: red;
  }

  & > p {
    font-weight: bold;
    margin: 10px;
    padding: 10px;
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & > img {
    height: 35px;
    width: 35px;
    margin: 0 10px;
    box-sizing: border-box;
  }
`

export const Footer = () => (
  <Container title="Informações de contato">
    <p>Feito com <span role="img" aria-label="heart">💗</span> por Youthquake</p>
    <p title="Acesso ao F.A.Q">Contate-nos&nbsp;&nbsp;&nbsp;&nbsp;F.A.Q</p>
    <Social>
      <img src={linkedin} title={'LinkedIn'} alt={'LinkedIn'} />
      <img src={facebook} title={'Facebook'} alt={'Facebook'} />
      <img src={instagram} title={'Instagram'} alt={'Instagram'} />
      <img src={twitter} title={'Twitter'} alt={'Twitter'} />
    </Social>
  </Container>
)