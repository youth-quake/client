import styled from 'styled-components'
import youthquake from '../../assets/img/youthquake.png'

export const Logo = styled.div`
  width: 300px;
  background-image: url(${youthquake});
  background: red;
`

export const Wrapper = styled.div`
  width: 300px;
  margin: 12% auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export const Form = styled.div`
  width: 50%;
  position: fixed;
`
