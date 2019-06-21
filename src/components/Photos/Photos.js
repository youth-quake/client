import React from 'react'
import styled from 'styled-components'
import photos from '../../utils/photos'
import { Theme } from '../Theme'

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
    border-color: ${Theme.colors.secondary_constrast_color};
  }
`

export const Photos = () => (
  <Container>
    {photos.map(item => (
      <Image src={item} onClick={() => localStorage.setItem('iconUser', item)} onError={photos[0]}/>
    ))}
  </Container>
)