import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers, withState } from 'recompose'
import { Theme, Modal, NewTarget } from '..'

import friend from '../../assets/img/girl mini.png'

export const Card = styled.div`
  width: 60vw;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  max-height: 600px;
  overflow-y: auto;
`

const Title = styled.p`
  font-size: 28px;  
  font-family: ${Theme.font.font_family};
  font-weight: bold;
  padding: 20px 0;
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
  text-align: justify;
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

const bet = [
  {
    name: 'Mariazinha',
    final: 'XX-XX-XXXX',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    name: 'Mariazinha',
    final: 'XX-XX-XXXX',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    name: 'Mariazinha',
    final: 'XX-XX-XXXX',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    name: 'Mariazinha',
    final: 'XX-XX-XXXX',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    name: 'Mariazinha',
    final: 'XX-XX-XXXX',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
]

const Component = ({
  showModal,
  toggleModal
}) => (
    <div>
      <Title>Todas as apostas</Title>
      <div>
        <Modal
          showModal={showModal}
          toggleModal={() => toggleModal()}
          title="Novo objetivo"
          text=""
          Form={NewTarget}
        />
        <Card>
          {bet.map(item => (
            <Profile>
              <Picture src={friend} alt="Amigo" />
              <Name>{item.name}</Name>
              <Description>{item.description}</Description>
              <Date>
                <p>Termina em:</p>
                <p>{item.final}</p>
              </Date>
            </Profile>
          ))}
        </Card>
      </div>
    </div>
  )


export const ModalBet = enhance(Component)