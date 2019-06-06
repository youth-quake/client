import React from 'react'
import DonutChart from 'react-donut-chart'
import styled from 'styled-components'
import { Formik, Field } from 'formik'
import { compose, withHandlers, withState } from 'recompose'
import { Theme, Button, Modal, NewTarget } from '../../components'

const Targets = styled.div`
  display: flex;
  flex-flow: row wrap;
  
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
  height: 300px;
  background: #FFF;
  display: flex;
  flex-flow: column;
  margin: 10px;
  border-radius: 3px;
  font-family: ${Theme.font.font_family};
  border: solid 1px ${Theme.colors.secondary_base_color};
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
  margin: 30px 50px 10px;
  color: ${Theme.colors.font_color};
  height: 100px;
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
  width: 290px;
  margin: 0 50px;
  font-size: 16px;
  border-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  & > div {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  
    & > span {
      width: 100%;
      font-weight: bold;
    }
  }

  & > h3 {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;

    & > span {
      font-weight: bold;
    }

    & > span+span {
      font-weight: normal;
    }
  }
`

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  margin: 0;
`

const Amount = styled.div`
  width: 88%;
  margin: 0 auto;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;


  & > span {
    width: 170px;
    padding: 10px;
    font-weight: bold;
  }

  & > * {
    background: transparent;
  }
`

const Form = (initialValues) => (
  <Formik
    initialValues={initialValues}
    render={({ values }) => (
      <Targets>
        <Container>
          <Field
            name="initialValues.title"
            render={({ field }) => (
              <Name
                {...field}
                title="Titulo do objetivo"
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
                    />
                  )}
                />
              </Description>
              <Information>
                <div>
                  <span title="Data inicial">Data inicial:</span>
                  <Field
                    name="initialValues.dateStart"
                    render={({ field }) => (
                      <Input
                        {...field}
                      />
                    )}
                  />
                </div>
                <div>
                  <span title="Data final">Data final:</span>
                  <Field
                    name="initialValues.dateEnd"
                    render={({ field }) => (
                      <Input
                        {...field}
                      />
                    )}
                  />
                </div>
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
          <Amount>
            <span title="Renda acumulada">Minha grana:</span>
            <Field
              name="initialValues.amount"
              render={({ field }) => (
                <Input
                  {...field}
                />
              )}
            />
          </Amount>
        </Container>
      </Targets>
    )}
  />
)

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & > button {
    position: absolute;
    right: 12px;
    top: -60px;
    width: 120px;
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

export const Component = ({
  targets,
  showModal,
  toggleModal
}) => (
    <Wrapper>
        <Button onClick={toggleModal} backgroundColor={Theme.colors.primary_color}>Novo objetivo</Button>
      {targets.map(item => (<Form key={item.key} initialValues={item.initialValues} />))}
      <Modal
        showModal={showModal}
        toggleModal={() => toggleModal()}
        title="Novo objetivo"
        text=""
        Form={NewTarget}
      />
    </Wrapper>
  )


export const Target = enhance(Component)