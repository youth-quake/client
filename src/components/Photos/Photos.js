import React from 'react'
import styled from 'styled-components'
import { Theme } from '../Theme'

import { update } from '../../services'
import getProfile from '../../utils/getProfile'

import PHOTOS from '../../utils/photos'
import getPhoto from '../../utils/getPhoto'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  padding: 10px;
  overflow-y: auto;
  align-items: center;
  justify-content: center;

  & > img {
    margin: 10px;
  }
`

const Image = styled.img`
  height: 90px;
  width: 90px;
  border: solid 4px transparent;
  border-radius: 100px;

  &:hover {
    cursor: pointer;
    border-color: ${Theme.colors.secondary_constrast_color};
  }
`

const profile = JSON.parse(localStorage.getItem('profile'))

export const Photos = () => (
  <Container>
    {PHOTOS.map(item => (
      <Image
        key={item}
        src={item}
        onClick={() => {
          localStorage.setItem('iconUser', item)
          fetch(`${update}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "idUser": profile.idUser,
              "picture": item
            })
          })
            .then(response => response.json())
            .then(async () => { 
              getProfile(profile.login, profile.password) 
              await(() => window.location.pathname = '/perfil')
            })
         
        }}
        onError={e => e.target.src = getPhoto()}
      />
    ))}
  </Container>
)