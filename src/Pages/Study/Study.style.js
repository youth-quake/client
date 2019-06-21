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
  height: 160px;
  margin: 10px;
  background-color: #FFF;
  font-family: ${Theme.font.font_family};
  border: solid 1px ${Theme.colors.secondary_base_color};
  border-radius: 3px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  
  & > h1 {
    box-sizing: border-box;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
  }

  & > p {
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding: 10px;
  }

  & > button {
    width: 120px;
    color: ${Theme.colors.primary_color};
  }
`

export const Column = styled.div`
  widht: 100%;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  padding: 20px 0;
  font-size: 22px;
  font-weight: bold;
  margin: 0 10px;
  font-family: ${Theme.font.font_family};
`