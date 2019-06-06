import React, { Fragment } from 'react'
import { Theme, Input, Select, Button } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'

import TargetImage from '../../assets/img/target.png'
import FriendImage from '../../assets/img/friendship.png'
import TrophyImage from '../../assets/img/trophy.png'


const ContentInformation = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 170px;
  height: 210px;
  border: solid 1px ${Theme.colors.base_color};  
  text-align: center;
  padding: 10px;
  line-height: 20px;
  border-radius: 1px;
  float: left;
  margin: 10px;

  & > div {
    display: flex;
    flex-flow: column;
    width: 100%;
    margin-bottom: 10px;
  }

  & > p {
  font-family: ${Theme.font.font_family};
  font-size: 14px;
  color: ${Theme.colors.text_color};
  }

  & > input{
    height: 15px;
  } 

`

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 80%;
  line-height: 23px;

  & > h3 {
    font-family: ${Theme.font.font_family};
    text-align: center;
    color: ${Theme.colors.font_color};
  }
`

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`

const TitleInfo = styled.label`
  font-family: ${Theme.font.font_family};
  font-size: 17px;
  color: ${Theme.colors.font_color};
`

const ImageInfo = styled.img`
  height: 50px;
  width: 50px;
  margin: 10px;
`

const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > button {
  width: 120px;
  margin-top: -5px;
}
`

export const PatrimonialSituation = ({
  ...props
}) => {

  const {
    editable,
    options
  } = props

  return (
    <Formik
      render={({
        errors,
        values
      }) => (
          <Fragment>
            <Wrapper>
              <ContentInformation>
                <ImageInfo src={TargetImage}></ImageInfo>
                <TitleInfo>Defina seus objetivos</TitleInfo>
                <p>Para um bom controle financeiro, o primeiro passo
                é entender seus objetivos e controlar as suas movimentações.</p>
              </ContentInformation>

              <ContentInformation>
                <ImageInfo src={FriendImage}></ImageInfo>
                <TitleInfo>Aposte com amigos</TitleInfo>
                <p>Proponha apostas com um mesmo objetivo em comum!
              Com datas e regras definidas por vocês. Que vença o melhor!</p>
              </ContentInformation>

              <ContentInformation>
                <ImageInfo src={TrophyImage}></ImageInfo>
                <TitleInfo>Ganhe conquistas</TitleInfo>
                <p>Ao ganhar apostas e concluir objetivos,
              você ganhará conquistas e subirá de níveis!</p>
              </ContentInformation>
            </Wrapper>
            <WrapperText>
              <h3>Como primeiro passo, você precisa nos dizer sua renda total acumulada no momento!
              (Não tem problema se você começar do zero).</h3>
            </WrapperText>
            <Field
              name="register.name"
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Renda total'
                  disabled={editable}
                  errors={errors}
                />
              )}
            />
            <Field
              name="register.categoria"
              render={({ field }) => (
                <Select
                  {...field}
                  backgroundColor={Theme.colors.base_color}
                  placeholder='Renda total'
                  disabled={editable}
                  errors={errors}
                >
                  {options.map(item => (
                    <option key={item.key}>{item.description}</option>
                  ))}
                </Select>
              )}
            />
            <WrapperButton>
              <Button backgroundColor={Theme.colors.secondary_color}>
                Enviar
              </Button>
            </WrapperButton>
          </Fragment>
        )}
    />
  )
}