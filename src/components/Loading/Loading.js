import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../Theme'
import ReactLoading from 'react-loading';

const Suspende = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250,250,250,0.6);
  visibility: ${props => props.loading ? css`visible` : css`hidden`};
`

export const Loading = ({ loading }) => (
  <Suspende loading={loading}>
    <ReactLoading type={'bubbles'} color={Theme.colors.primary_color} width="350px" height="350px" delay={1000}/>
  </Suspende>
)