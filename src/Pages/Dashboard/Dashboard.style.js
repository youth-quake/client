import styled  from 'styled-components'
import { Theme, InputEditable as Input } from '../../components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px;
`

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background: ${Theme.colors.base_color};
    display: flex;
    justify-content: space-between;

    & > div {
    margin: 5px;
    width: 50%;
    background: white;    
    border-radius: 5px;
    height: 400px;
    }
`

export const TitleWrapper = styled.div`
    width: 100%;
    height: 30px;
    font-size: 18px;
    font-weight: 500;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
    display: flex;
    align-items: center;

    & > label{
        margin: 10px;    
    }
`