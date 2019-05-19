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
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    justify-content: space-between;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
    & > label{
        margin: 10px;    
    } 
`

export const Wrapper = styled.div`
    width: 50%;
    height: auto;
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    & > div {
    margin: 5px;
    width: 45%;
    border-radius: 2px;
    background: white;  
    border: solid 1px ${Theme.colors.secondary_base_color};
    height: 150px;
    }
`

export const TitleWrapper = styled.div`
    margin: 0;
    padding-top: 10px;
    padding-bottom:10px;
    width: 100%;
    font-size: 15px;
    text-align: center;
    border-radius: 2px;
    font-weight: bold;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.base_color};
    background-color: ${Theme.colors.secondary_color};
    outline: none;
    border: none;
    cursor: default;

    & > label{
        margin: 10px;    
    }
`

export const DescriptionExpense = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 115px;
    font-size: 23px;
    font-weight: bold;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
`

