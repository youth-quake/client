import React, { Fragment } from 'react'
import { Theme, Input, Select } from '../../components'
import { Formik, Field } from 'formik'
import styled from 'styled-components'

import TargetImage from '../../assets/img/target.png'
import FriendImage from '../../assets/img/friendship.png'
import TrophyImage from '../../assets/img/trophy.png'


const ContentInformation = styled.div`
  width: 450px;
  height: 200px;
  border: solid 1px ${Theme.colors.border_color}  
  text-align: center;
  float: left;
  margin: 15px;

  & > div {
    display: flex;
    flex-flow: column;
    width: 100%;
    margin-bottom: 10px;

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
              <div> 
              <TitleInfo>Defina seus objetivos</TitleInfo>
              </div>
                Para um bom controle financeiro, o primeiro passo
                é entender seus objetivos para controlar as suas movimentações.
              </ContentInformation>

              <ContentInformation>
              <ImageInfo src={FriendImage}></ImageInfo>
              <div> 
              <TitleInfo>Aposte com amigos</TitleInfo>
              </div>
              Proponha apostas com um mesmo objetivo em comum!
              Com datas e regras definidas por vocês. Que vença o melhor!
              </ContentInformation>

              <ContentInformation>
              <ImageInfo src={TrophyImage}></ImageInfo>
              <div> 
              <TitleInfo>Ganhe conquistas</TitleInfo>
              </div>
              Ao ganhar apostas e concluir objetivos,
              você ganhará conquistas e subirá de níveis!
              </ContentInformation>
            </Wrapper>
            <h3>Meu primeiro objetivo</h3>
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
          </Fragment>
        )}
    />
  )
}