import React from 'react'
import styled from 'styled-components'
import photos from '../../utils/photos'
import { Theme } from '../Theme'

import { updatePicture } from '../../services'
import getProfile from '../../utils/getProfile'

import errorImage from '../../assets/img/girl big.png'

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
  border: dotted 3px transparent;
  border-radius: 100px;

  &:hover {
    cursor: pointer;
    border-color: ${Theme.colors.secondary_constrast_color};
  }
`

const profile = JSON.parse(localStorage.getItem('profile'))

export const Photos = () => (
  <Container>
    {photos.map(item => (
      <Image
        key={item}
        src={item}
        onClick={() => {
          localStorage.setItem('iconUser', item)
          fetch(`${updatePicture}/${profile.idUser}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "picture": item
            })
          })
            .then(response => response.json())
            .then(async () => { 
              getProfile(profile.login, profile.password) 
              await(() => window.location.pathname = '/perfil')
            })
         
        }}
        onError={e => e.target.src = errorImage}
      />
    ))}
  </Container>
)