import React from 'react'
import styled from 'styled-components'
import { Theme } from '../../components'
import Trofeu from '../../assets/img/trofeu.png'

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 10px;

  & > img {
    margin: 10px;
  }
`

const Title = styled.p`
  font-size: 28px;  
  font-family: ${Theme.font.font_family};
  font-weight: bold;
  padding: 20px;
`

const Badge = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: baseline;
  align-items: center;
  padding: 10px;
  height: 150px;
  width: 180px;
  margin: 20px 10px; 

  & > span {
    cursor: default;
    font-weight: bold;
    box-sizing: border-box;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.secondary_color};
  }

  & > p {
    cursor: default;
    box-sizing: border-box;
    font-family: ${Theme.font.font_family};
    font-size: 14px;
    color: ${Theme.colors.secondary_color};
    margin: 10px 0;
  }
`

const Image = styled.img`
  height: 120px;
  width: 120px;
`

export const Achievements = ({ achievements }) => (
  <div>
    <Title>Minhas conquistas</Title>
    <Container>
      {achievements.map(item => (
        <Badge key={item.key}>
          <Image src={Trofeu} />
          <span>{item.title}</span>
          <p>{item.description}</p>
        </Badge>
      )
      )}
    </Container>
  </div>
)