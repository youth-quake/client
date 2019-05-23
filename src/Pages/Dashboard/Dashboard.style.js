import styled from 'styled-components'
import { Theme } from '../../components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px 0 40px;
	display: flex;
	background: ${Theme.colors.base_color};
`

export const AmountValue = styled.div`
	padding: 10px;
	font-size: 18px;
	font-weight: bold;
	text-align: right; 
	font-family: ${Theme.font.font_family};
	color: ${Theme.colors.font_color};
`


export const Information = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	padding: 5px;

	& > div {
		border-radius: 2px;
		background: white;  
		border: solid 1px ${Theme.colors.secondary_base_color};
	}

	& > div+div{
		margin: 10px 0 0;
		height: 65%;
	}
`

export const Wrapper = styled.div`
	width: 25%;
	display: flex;
	flex-flow: column;
	padding: 5px;

	& > div {
		border-radius: 2px;
		background: #FFF;  
		border: solid 1px ${Theme.colors.secondary_base_color};
		height: 160px;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	& > div+div {
		margin: 15px 0 0;
	}
`

export const Tag = styled.div`
	padding: 10px 0;
	width: 100%;
	font-size: 16px;
	text-align: center;
	border-radius: 2px;
	font-weight: bold;
	font-family: ${Theme.font.font_family};
	color: ${Theme.colors.base_color};
	background-color: ${props => props.color ? Theme.colors.secondary_color : Theme.colors.constrast_color};
	position: absolute;
	bottom: 0;

	& > label{
		margin: 10px;    
	}
`

export const Description = styled.div`
	width: 100%;
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	font-family: ${Theme.font.font_family};
	height: 100%;
	line-height: 5;
	color: ${props => props.color ? Theme.colors.secondary_color : Theme.colors.constrast_color};
`


export const Title = styled.h3`
	padding: 10px;
	font-size: 22px;
	font-family: ${Theme.font.font_family};
	color: ${Theme.colors.font_color};
	border-bottom: solid 1px ${Theme.colors.base_color};
	outline: none;
	cursor: default;
	line-height: 1.3;
	font-weight: 500;
`


export const Progress = styled.div`
	font-size: 20px;
	font-family: ${Theme.font.font_family};
	display: flex;
	flex-flow: column;
	align-items: center;
	width: 30%;

	& > * {
		padding: 5px;
		margin: 10px 0;
	}
`

export const Card = styled.div`
	padding: 15px 30px;
	border-radius: 2px;
	position: relative;

	& > img {
		width: 30px;
		heigth: 30px;
		position: absolute;
		z-index: 100;
		right: 35px;
		top: 20px;
	}

	& > div {
		display: flex;
		justify-content: space-between;
	}
`

export const Data = styled.div`
	width: 60%;
	display: flex;
	margin: 10px 0;
	flex-flow: column;
	
	& > * {
		padding: 10px 20px;
		font-family: ${Theme.font.font_family};
		color: ${Theme.colors.font_color};
	}

	& > textarea {
		padding: 20px;
		font-size: 15px;
    text-align: justify;
    border: none;
    height: 35%;
    outline: none;
		resize: none;
	}

	& > div > label {
		margin: 0;
		font-weight: 500;
	}

	& > div > label+label {
		margin: 0 10px;
		font-weight: normal;
	}
`

export const Table = styled.table`
	width: 100%;
	padding: 10px 0;
	text-align: center;
	font-family: ${Theme.font.font_family};
	margin: 20px 0 0;
`

export const Header = styled.th`
	padding: 10px 0;
	font-weight: 500;
	border-bottom: solid 1px ${Theme.colors.font_color};
`

export const Column = styled.td`
	padding: 10px 0;
	border-bottom: solid 1px ${Theme.colors.base_color};
`

export const Line = styled.tr`
	padding: 10px;
`
