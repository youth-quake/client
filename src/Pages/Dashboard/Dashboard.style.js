import styled  from 'styled-components'
import { Theme, InputEditable as Input } from '../../components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px;
  background: ${Theme.colors.base_color};
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

export const WrapperExpenses = styled.div`
    width: 25%;
    height: auto;
    display: inline-flex;
    padding: 5px;
    float: left;
    flex-wrap: wrap;
    & > div {
    margin: 5px;
    width: 100%;
    border-radius: 2px;
    background: white;  
    border: solid 1px ${Theme.colors.secondary_base_color};
    height: 150px;
    }
`

export const WrapperGraphic = styled.div`
    width: 73%;
    float: left;
    height: 325px;
    display: inline-flex;
    padding: 5px;
    flex-wrap: wrap;
    & > div {
    margin: 5px;
    width: 100%;
    border-radius: 2px;
    background: white;  
    border: solid 1px ${Theme.colors.secondary_base_color};
    height: 314px;
    }
`



export const TitleWrapperExpenses = styled.div`
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
export const TitleWrapperGraphic = styled.div`
    margin: 0;
    padding-top: 10px;
    padding-bottom:10px;
    width: 95%;
    margin-left: 20px;
    font-size: 23px;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
    border-bottom: solid 1px ${Theme.colors.font_color};
    outline: none;
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
    color: ${Theme.colors.secondary_color};
`

export const Progress = styled.div`
    display: flex;
    align-items: center;
    padding-top: 35px;
    padding-right: 50px;
    justify-content: center;
    float: right;
    font-size: 30px;
    
    &:first-child{
    position: absolute;
    }
`