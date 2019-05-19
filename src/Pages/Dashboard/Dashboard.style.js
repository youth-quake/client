import styled  from 'styled-components'
import { Theme, InputEditable as Input } from '../../components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px;
`

export const WrapperTitleDashboard = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
    background: ${Theme.colors.base_color};
    & > label{
        margin: 10px;    
    } 
`

export const Wrapper = styled.div`
    width: 50%;
    height: auto;
    background: ${Theme.colors.base_color};
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    & > div {
    margin: 5px;
    width: 45%;
    background: white;  
    height: 150px;
    }
`

export const TitleWrapper = styled.div`
    width: 100%;
    height: 30px;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
    display: flex;
    align-items: center;

    & > label{
        margin: 10px;    
    }
`