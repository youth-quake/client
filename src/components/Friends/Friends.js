import React from 'react'
import styled, { css } from 'styled-components'
import { Theme, Modal, Bet } from '../../components'
import { compose, withState, withHandlers, lifecycle, renderComponent } from 'recompose'
import { Input } from '../Input'

import { friend, friendSearch, friendAdd } from '../../services'

import search from '../../assets/img/search.png'
import errorImage from '../../assets/img/girl mini.png'

const Tag = styled.div`
  width: 100px;
  height: 50px;
  background: ${Theme.colors.secondary_color};
  position:fixed;
  right: 280px;
  top: 280px;
  z-index: 400;
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
  top: 25px;
  right: 0;
  text-align: center;
  border-radius: 2px;
  visibility: ${props => props.visible ? css`visible` : css`hidden`};
  box-shadow: -8px 6px 17px -15px rgba(0,0,0,0.75);
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  max-height: 380px;
  overflow-y: auto;
  overflow-x: hidden;
`

const Title = styled.p`
  font-size: 18px;  
  font-family: ${Theme.font.font_family};
  font-weight: bold;
  padding: 10px 20px;
  border-bottom: solid 0.3px ${Theme.colors.font_color};
  width: 50%;
  margin: 0 auto;
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
    width: 100%;
  }

  & > div > span {
    cursor: default;
    font-size: 14px;
    width: 90%;
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

export const Search = styled.div`
  display: flex;
  width: 90%;
  margin: 10px auto;
  height: 35px;
  border-radius: 3px;
  background-color: ${Theme.colors.secondary_base_color};
  align-items: center;

  & > input {
    background: transparent;
    padding: 0;
  }

  & > img {
    width: 20px;
    height: 20px;
    padding: 10px;
  }
`

const data = JSON.parse(localStorage.getItem('profile'))

const enhance = compose(
  withState('initialValues', 'setInitialValues', []),
  withState('friendsSearch', 'setFriendsSearch', []),
  withState('showModal', 'setShowModal', false),
  withState('isSearch', 'setIsSearch', false),
  withState('selectedFriend', 'setSelectedFriend', {}),
  withHandlers({
    handleSetInitialValues: ({ setInitialValues }) => () => {
      fetch(`${friend}/${data.idUser}`)
        .then(response => response.json())
        .then(friends => {
          if (friends) {
            const currentFriends = friends.map(item => {
              const friend = {
                id: item.user2.idUser,
                name: item.user2.name,
                picture: item.user2.picture === null ? errorImage : item.user2.picture,
                username: item.user2.login,
                bets: item.bets.map(bet => {
                  return {
                    friend: item.user2.name,
                    description: bet.description,
                    result: bet.result,
                    date: bet.time,
                    value: bet.value
                  }
                })
              }

              return friend
            })

            localStorage.setItem('friends', JSON.stringify(currentFriends))
            setInitialValues(currentFriends)
          } else {
            localStorage.setItem('profile', JSON.stringify({}))
          }

          return JSON.parse(localStorage.getItem('friends'))
        })
        .catch(error => { return error })
    },
    handleClick: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    },
    handleSearch: ({ setIsSearch, setFriendsSearch, initialValues }) => value => {
      setIsSearch(true)
      fetch(`${friendSearch}/${value}`)
        .then(response => response.json())
        .then(friend => {
          if (friend) {
            console.log(friend.map(item => item.idUser))
            console.log(initialValues.map(item => item.id))
            
            setFriendsSearch([])
            setFriendsSearch(friend.map(item => {
              if(!initialValues.map(item => item.id).includes(item.idUser) || data.idUser !== item.idUser){
                return {
                  id: item.idUser,
                  name: item.name,
                  picture: item.picture === null ? errorImage : item.picture,
                  username: item.login
                }
              }
              
              return []
            }))
          }
        })
        .catch(error => { return error })
    },
    handleAddFriend: () => name => {
      console.log(name)
      fetch(`${friendAdd}/${data.idUser}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "user2": name
        })
      }).then(response => response.json())
    }
  }),
  lifecycle({
    componentDidMount() {
      const { handleSetInitialValues } = this.props
      handleSetInitialValues()
    }
  })
)

const Component = ({
  handleClick,
  showModal,
  toggleModal,
  initialValues,
  selectedFriend,
  setSelectedFriend,
  handleSearch,
  isSearch,
  friendsSearch,
  setFriendsSearch,
  setIsSearch,
  handleAddFriend,
  ...props
}) => {

  const {
    visible,
    toggleVisible
  } = props

  return (
    <div>
      <Modal
        showModal={showModal}
        toggleModal={handleClick}
        title="Nova aposta"
        text={`Você vai iniciar uma aposta com ${selectedFriend.name} para isso precisamos de algumas informações:`}
        Form={() => (<Bet selectedFriend={selectedFriend} />)}
      />
      <Wrapper visible={visible}>
        <Title title="Seus contatos">Seus contatos ({initialValues.length})</Title>
        <Search>
          <img src={search} alt="Buscar usuário" />
          <Input
            id="search"
            placeholder='Pesquisar usuários...'
            onInput={e => handleSearch(e.target.value)}
          // onBlur={() => {
          //   setFriendsSearch([])
          //   setIsSearch(false)
          //   document.getElementById('search').value = ""
          // }}
          />
        </Search>

        <Container>
          {((initialValues && !isSearch) || document.getElementById('search').value === "") && (
            initialValues.map(item => (
              <Friend key={item.name}>
                <Image
                  src={item.picture}
                  onError={e => e.target.src = errorImage}
                />
                <div>
                  <span>{item.name}</span>
                  <span>{item.username}</span>
                </div>
                <button
                  onClick={() => {
                    handleClick()
                    setSelectedFriend(item)
                  }}
                >
                  Apostar
              </button>
              </Friend>
            ))
          )}
          {isSearch && (
            friendsSearch.map(item => (
              <Friend key={item.name}>
                <Image
                  src={item.picture}
                  onError={e => e.target.src = errorImage}
                />
                <div>
                  <span>{item.name}</span>
                  <span>{item.username}</span>
                </div>
                <button onClick={() => handleAddFriend(item.name)}>
                  Adicionar
                </button>
              </Friend>
            ))
          )}
        </Container>

      </Wrapper>
      <Tag title="Amigos" visible={visible} onClick={() => toggleVisible()}>
        Amigos
      </Tag>
    </div>
  )
}

export const Friends = enhance(Component)
