import React from 'react'
import DonutChart from 'react-donut-chart'
import styled, { css } from 'styled-components'
import { Formik, Field } from 'formik'
import { compose, withHandlers, withState } from 'recompose'
import { Theme, Button as ButtonWithTheme, Modal, NewTarget } from '../../components'

import dollar from '../../assets/img/dollar.png'
import dollarNoFill from '../../assets/img/dollar1.png'

import { updateTarget } from '../../services'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Button = styled(ButtonWithTheme)`
  width: 120px;
`

const Targets = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;

  & img > {
    margin: 10px;
  }
`

const Column = styled.div`
  display: flex;
  justify-content: space-between;
`

const Container = styled.div`
  width: 100%;
  height: 250px;
  background: #FFF;
  display: flex;
  flex-flow: column;
  margin: 10px;
  border-radius: 3px;
  font-family: ${Theme.font.font_family};
  border: solid 1px ${Theme.colors.secondary_base_color};
  position: relative;
`

const Name = styled.input`
  margin: 0;
  padding: 10px;
  width: 30%;
  font-size: 17px;
  text-align: center;
  border-radius: 2px;
  color: ${Theme.colors.base_color};
  background-color: ${Theme.colors.constrast_color};
  outline: none;
  border: none;
  cursor: default;
`

const Description = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 50px 0;
  color: ${Theme.colors.font_color};
  height: 80px;
  width: 450px;

  & > textarea {
    font-size: 15px;
    text-align: justify;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.font_color};
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
  }
`

const Progress = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  top: -20px;
  left: -35px;
  font-size: 30px;
  position: relative;

  &:first-child{
    position: absolute;
  }
`

const Information = styled.div`
  width: 90%;
  margin: 0 50px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  
  & > div {
    padding: 10px 0;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
`

const Data = styled.div`
  width: 210px;
  display: flex;

  & > div {
    display: flex;
  justify-content: space-between;
  }

  & >  div > span {
    width: 100px;
    margin: 0;
    font-weight: bold;
  }

  & > div > input {
    width: 100px;
  }
`

const Input = styled.input`
  outline: none;
  border: none;
  margin: 0;
  background: transparent;
`

const Amount = styled.div`
  max-width: 200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  
  & > span {
    padding: 0;
    width: 100%;
    font-weight: bold;
  }
`

const DollarStats = styled.div`
  margin-top: 10px;

  & > img {
    width: 30px;
    height: 30px;
    margin: 0 2px;
  }
`

const Blur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  z-index: 444;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${({ visible }) => visible ? css`block` : css`none`};

  & > button {
    width: 120px;
    margin: 0 auto;
  }
`

const Delete = styled(Button)`
  color: #A8A8A8; 
  border: solid 1px #E8E8E8;

  &:hover {
    background: ${Theme.colors.font_color};
    color: #FFF;
    opacity: 0.5;
  }
`

const Title = styled.p`
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

const Tag = styled.span`
  cursor: default;
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

const profile = JSON.parse(localStorage.getItem('profile'))

const update = (values) => {
  fetch(`${updateTarget}/${values.initialValues.id}/${profile.idUser}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "name": values.name,
      "description": values.initialValues.description,
      "dtEnd": values.initialValues.dateEnd,
      "value": values.initialValues.value,
    })
  })
    .then(response => response.json())
}

const Form = (initialValues) => (
  <Formik
    initialValues={initialValues}
    render={({ values }) => (
      <Targets>
        <Container>
          <Blur>
            <Delete backgroundColor={Theme.colors.transparent}>Excluir</Delete>
            <Button backgroundColor={Theme.colors.primary_color}>Editar</Button>
          </Blur>
          <Field
            name="initialValues.title"
            render={({ field }) => (
              <Name
                {...field}
                title="Titulo do objetivo"
                onBlur={() => update(values)}
              />
            )}
          />
          <Column>
            <div>
              <Description>
                <Field
                  name="initialValues.description"
                  render={({ field }) => (
                    <textarea
                      {...field}
                      maxLength={200}
                      title="Descrição do objetivo"
                      onBlur={() => update(values)}
                    />
                  )}
                />
              </Description>
              <Information>
                <Data>
                  <div>
                    <Tag title="Data inicial">Comecei em</Tag>
                    <Field
                      name="initialValues.dateStart"
                      render={({ field }) => (
                        <Input
                          {...field}
                          disabled
                        />
                      )}
                    />
                  </div>
                  <div>
                    <Tag title="Data final">Termino em</Tag>
                    <Field
                      name="initialValues.dateEnd"
                      render={({ field }) => (
                        <Input
                          {...field}
                          onBlur={() => update(values)}
                        />
                      )}
                    />
                  </div>
                </Data>
                <Amount>
                  <Tag title="Renda acumulada">R$ acumulada</Tag>
                  <DollarStats>
                    <img src={dollar} alt="Dollar" />
                    <img src={dollarNoFill} alt="Dollar" />
                    <img src={dollarNoFill} alt="Dollar" />
                    <img src={dollarNoFill} alt="Dollar" />
                    <img src={dollarNoFill} alt="Dollar" />
                  </DollarStats>
                </Amount>
              </Information>
            </div>
            <Progress title="Progresso do objetivo">
              <Field
                name="initialValues.percent"
                render={({ field }) => (
                  <DonutChart
                    {...field}
                    data={[
                      { value: values.initialValues.percent, label: '' },
                      { value: (100 - values.initialValues.percent), isEmpty: true, label: '', }
                    ]}
                    colors={[
                      Theme.colors.primary_color,
                      '#000'
                    ]}
                    width={180}
                    height={180}
                    legend={false}
                    strokeColor={'transparent'}
                    clickToggle={false}
                    emptyColor={Theme.colors.secondary_base_color}
                  />
                )}
              />
            </Progress>
          </Column>
        </Container>
      </Targets>
    )}
  />
)

export const Component = ({
  targets,
  showModal,
  toggleModal
}) => (
    <div>
      <Title>
        Todos os objetivos
        <Button onClick={toggleModal} backgroundColor={Theme.colors.primary_color}>Novo objetivo</Button>
      </Title>
      <Wrapper>
        {targets.map(item => <Form key={item.key} initialValues={item.initialValues} />)}
        <Modal
          showModal={showModal}
          toggleModal={() => toggleModal()}
          title="Novo objetivo"
          text=""
          Form={NewTarget}
        />
      </Wrapper>
    </div>
  )


export const Target = enhance(Component)