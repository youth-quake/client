import styled, { css } from 'styled-components'
import { Theme, Button } from '../../components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px 0 40px;
	display: flex;
	background: ${Theme.colors.base_color};
`

export const Category = styled.div`
	width: 25%;
	display: flex;
	flex-flow: column;
	padding: 5px;

	& > div {
		border-radius: 2px;
		background: #FFF;  
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
	max-height: 25%;
	box-sizing: border-box;

	& > div+div{
		margin: 10px 0 0;
	}
`

export const Item = styled.div`
	border-radius: 3px;
	background: white;  
	padding: 10px;

	& > div {
		margin: 10px;
	}
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
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
	display: flex;
	justify-content: space-between;
		
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

	& > p {
		width: 100%;
		height: 90%;
		border: none;
		outline: none;
		font-size: 14px;
		text-align: justify;
	}
`

export const Instructions = styled.div`
	widht: 200px;
	line-height: 1.2;
	text-align: justify;
	letter-spacing: 1px;

	& > h3 {
		font-weight: bold;
		padding: 10px 0;
	}

	& > p {
		
	}

	& > span {
		width: 100%;
		font-weight: 500;
	}
`

export const Movement = styled(Button)`
	width: 120px;
`

export const Progress = styled.div`
	display: flex;	
	text-align: center;
	flex-flow: column;
	padding: 20px;

	& > p {
		padding: 10px 0;
		margin: 5px 0 0;
		font-family: ${Theme.font.font_family};
		font-size: 22px;
	}
`

export const Download = styled.div`
	display: flex;
	width: 100px;
	align-items: center;
	font-family: ${Theme.font.font_family};
	font-size: 14px;
	color: #707070;
	justify-content: space-between;

	& > img {
		width: 20px;
		height: 20px;
	}
`

export const Table = styled.div`
	font-family: ${Theme.font.font_family};
	display: flex;
	flex-flow: column;
	text-align: center;
	max-height: 300px;
	overflow-y: auto;
	padding: 10px;
`

export const Header = styled.div`
	font-weight: 500;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	font-family: ${Theme.font.font_family};
	margin: 5px 0;
	background: ${Theme.colors.base_color};
	margin: 0 auto;
	opacity: 0.6;
`

export const Column = styled.div`
	border-bottom: solid 1px ${Theme.colors.base_color};
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 25px;
	padding: 10px 0;
`

export const Line = styled.div`
	padding: 10px;
	width: 150px;
`
export const Remove = styled(Button)`
	width: 120px;
	background: transparent;
	color: ${Theme.colors.secondary_color};
`
