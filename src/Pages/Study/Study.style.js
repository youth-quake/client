import styled from 'styled-components'
import { Theme } from '../../components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px;
  overflow-x: hidden;
`

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
`

export const Card = styled.div`
  width: 300px;
  height: 220px;
  margin: 10px;
  background-color: #FFF;
`

export const Column = styled.div`
  widht: 100%;
  display: flex;
  justify-content: space-between;
  background-color: red;
`

export const Title = styled.h1`
  padding: 10px 0;
  font-size: 22px;
  font-family: ${Theme.font.font_family};
`