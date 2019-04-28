import styled from 'styled-components'
import { Title as TitleComponent, Theme} from '../../components'


export const Logo = styled.img`
  width: 310px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 10px;
`

export const LogoAlternativeLogin = styled.img`
  width: 25px;
  height: 25px;
  margin: 4px 0;
  float: left;
`

export const Form = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 50px;
  margin: 0 10%;
`

export const Container = styled.div`
  display: flex;
  margin: 2% auto;
  position: fixed;
`

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border-left: solid 1px ${Theme.colors.font_color};
  padding: 0 35px;
`

export const ContentImage = styled.img`
  width: auto;
  height: 400px;
  box-sizing: border-box;
  margin: 5% 0;
  box-sizing: border-box;
`

export const Title = styled(TitleComponent)`
  text-align: center;
  box-sizing: border-box;
  font-family: ${Theme.font.font_family};
`

export const Text = styled.p`
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
`

export const TextAccess = styled.p`
  text-align: center;
  margin-left: 30px;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};
`

export const TextDecision = styled.p`
font-family: ${Theme.font.font_family};
float: left;
color: ${Theme.colors.font_color}
`

export const ScratchesLeft = styled.div`
  float: left;
  width: 130px;
  margin-top: 10px;
  margin-right:5px;
  border: solid 1px ${Theme.colors.font_color};
`

export const ScratchesRight = styled.div`
  float: right;
  width: 130px;
  margin-top: 10px;
  margin-left:5px;
  border: solid 1px ${Theme.colors.font_color};
`

export const DivDecision = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


export const LoginAlternative = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 30px;
  border: solid 1px ${Theme.colors.font_color};
  padding: 7px;
  margin: 10px 0;
  cursor: pointer;
`

