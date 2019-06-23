import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers, withState } from 'recompose'
import { Theme, Modal, Button as ButtonWithTheme, Bet } from '..'

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
`

const Title = styled.h3`
  width: 100%;
  min-width: 819px;
  margin: 0;
  font-size: 28px;  
  font-family: ${Theme.font.font_family};
  font-weight: bold;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled(ButtonWithTheme)`
  width: 120px;
`

export const Profile = styled.div`
  width: 230px;
  height: 260px;
  background: #FFF;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-radius: 3px;
  border: solid 1px ${Theme.colors.base_color};
  box-shadow: 2px 5px 11px -11px rgba(0,0,0,0.75);
  box-sizing: border-box;
  margin: 5px;
  font-family: ${Theme.font.font_family};
`

const Picture = styled.img`
  width: 70px;
  height: 70px;
`

const Name = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

const Description = styled.p`
  width: 90%;
  text-align: center;
  padding: 10px 0;
`

const Date = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  justify-content: center;

  & > p {
    font-weight: bold;
    margin-right:10px;
  }

  & > p+p {
    font-weight: normal;
  }
`

const enhance = compose(
  withState('showModal', 'setShowModal', false),
  withState('visible', 'setVisible', false),
  withHandlers({
    toggleModal: ({ showModal, setShowModal }) => () => {
      setShowModal(!showModal)
    }
  })
)

const allBets = JSON.parse(localStorage.getItem('friends'))

const Component = ({
  showModal,
  toggleModal,
  bet
}) => (
    <div>
      <Title>Todas as apostas
        <Button>Nova aposta</Button>
      </Title>
      <Container>
        <Modal
          showModal={showModal}
          toggleModal={() => toggleModal()}
          title="Nova aposta"
          text=""
          Form={Bet}
        />
        {allBets.map(item => (
          (item.bets.length > 0 && (
            <Profile>
              <Picture src={item.picture} alt="Amigo" />
              <Name>{item.name}</Name>
              {item.bets.map(bet => (
                <div>
                  <Description>{bet.description}</Description>
                  <Date>
                    <p>Termina em:</p>
                    <p>{bet.date}</p>
                  </Date>
                </div>
              ))}
            </Profile>
          ))
        ))}
      </Container>
    </div>
  )


export const ModalBet = enhance(Component)