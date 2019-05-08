import React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Tag = styled.div`
  width: 100px;
  height: 50px;
  background: ${Theme.colors.constrast_color};
  position:fixed;
  right: 279px;
  top: 280px;
  z-index: 100;
  border-radius: 2px;
  transform: rotate(-90deg);
  text-align: center;
  line-height: 3.2;
  font-family: ${Theme.font.font_family};
  font-size: 15px;
  color: ${Theme.colors.base_color};
  font-weight: bold;

  ${props => !props.visible && css`
    right: -30px;
  `}
`

const Wrapper = styled.div`
  background: ${Theme.colors.base_color};
  width: 305px;
  height: 545px;
  padding: 10px 0;
  z-index: 100;
  position: fixed;
  top: 40px;
  right: 0;
  text-align: center;
  border-radius: 3px;
  visibility: ${props => props.visible ? css`visible` : css`hidden`};
  box-shadow: -8px 6px 17px -15px rgba(0,0,0,0.75);
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  max-height: 370px;
  overflow-y: hidden;
  overflow-x: hidden;
`

const Title = styled.p`
  font-size: 18px;  
  font-family: ${Theme.font.font_family};
  font-weight: bold;
  padding: 10px 20px;
`

const Friend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 50px;
  width: 100%;
  margin:  0 0 10px;
  font-family: ${Theme.font.font_family};
  color: ${Theme.colors.font_color};

  & > img {
    margin: 0 10px;
  }

  & > button {
    width: 80px;
    padding: 10px;
    margin: 0 30px;
    outline: none;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    background: ${Theme.colors.primary_color};
    color: ${Theme.colors.base_color};
    font-weight: bold;
    font-size: ${Theme.font.font_size};
    font-family: ${Theme.font.font_family};
  }

  & > div {
    display: flex;
    flex-flow: column;
  }

  & > div > span {
    cursor: default;
    font-size: 14px;
  }

  & > div > p {
    cursor: default;
    font-size: 12px;
  }
`

const Image = styled.img`
  height: 50px;
  width: 50px;
`

const Scroll = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  margin: 10px 0;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 22px;

  &:hover {
    opacity: 0.5;
  }
`

export const Friends = ({ friends, ...props }) => {
  const {
    visible,
    toggleVisible
  } = props

  return (
    <div>
      <Wrapper visible={visible}>
        <Title>Seus contatos ({friends.length})</Title>
        <Scroll onClick={() => document.getElementById('container-friends').scrollTop -= 35}>
          <Icon icon={faChevronUp} />
        </Scroll>
        <Container id="container-friends">
          {friends.map(item => (
            <Friend key={item.key}>
              <Image src={item.img} />
              <div>
                <span>{item.name}</span>
                <p>{item.nickname}</p>
              </div>
              <button>apostar</button>
            </Friend>
          )
          )}
        </Container>
        <Scroll onClick={() => document.getElementById('container-friends').scrollTop += 35}>
          <Icon icon={faChevronDown} />
        </Scroll>
      </Wrapper>
      <Tag visible={visible} onClick={() => toggleVisible()}>
        Amigos
      </Tag>
    </div>
  )
}