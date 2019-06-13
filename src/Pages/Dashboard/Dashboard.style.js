import styled, { css } from 'styled-components'
import { Theme, Button } from '../../components'

import download from '../../assets/img/downloadMinor.png'


export const Container = styled.div`
  margin: 0 auto;
  padding: 10px 0 40px;
	display: flex;
	background: ${Theme.colors.base_color};
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

export const Description = styled.div`
	width: 100%;
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	font-family: ${Theme.font.font_family};
	height: 100%;
	line-height: 5;
	color: ${props => props.color ? css`${Theme.colors.secondary_color}` : css`${Theme.colors.constrast_color}`};
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
	background-color: ${props => props.color ? css`${Theme.colors.secondary_color}` : css`${Theme.colors.constrast_color}`};
	position: absolute;
	bottom: 0;

	& > label {
		margin: 10px;    
	}
`

export const Information = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	padding: 5px;
	position: relative;

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

export const Card = styled.div`
	width: 100%;	
	padding: 30px 30px;
	border-radius: 2px;
	box-sizing: border-box;

	& > div {
		display: flex;
		justify-content: space-between;
	}
`

export const Title = styled.h3`
	padding: 10px;
	font-size: 22px;
	font-family: ${Theme.font.font_family};
	color: ${Theme.colors.font_color};
	border-bottom: solid 0.3px ${Theme.colors.base_color};
	outline: none;
	cursor: default;
	line-height: 1.3;
	font-weight: 500;
`

export const Data = styled.div`
	width: 40%;	
	height: 200px;
	flex-flow: column;
	display: flex;
	justify-content: space-between;
	padding: 30px 10px;
	font-family: ${Theme.font.font_family};
	
	& > h3 {
		padding: 10px 0;
		font-weight: bold;
	}

	& > textarea {
		resize: none;
		width: 100%;
		height: 90%;
		border: none;
		outline: none;
		font-size: 14px;
		text-align: justify;
	}
`

export const Movement = styled(Button)`
	width: 120px;
`

export const Progress = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40%;
`

export const Download = styled(Button)`
	background: url(${download}) center no-repeat;
	background-size: 20px;
	width: 30px;
	position: absolute;
	right: 40px;
`

export const Table = styled.div`
	width: 100%;
	padding: 10px 0;
	text-align: center;
	font-family: ${Theme.font.font_family};
	margin: 20px 0 0;
	display: flex;
	flex-flow: column;
`

export const Header = styled.div`
	padding: 10px 0;
	font-weight: 500;
	display: flex;
	border-bottom: solid 1px ${Theme.colors.font_color};
	display: flex;
	justify-content: space-between;
`

export const Column = styled.div`
	padding: 10px 0;
	border-bottom: solid 1px ${Theme.colors.base_color};
	display: flex;
	display: flex;
	justify-content: space-between;
`

export const Line = styled.div`
	padding: 10px;
	display: flex;

	& > p {
		margin: 10px;
	}
`