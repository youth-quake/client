import React from 'react'
import DonutChart from 'react-donut-chart'
import styled from 'styled-components'
import { Theme } from '../../components'
import { Formik, Field } from 'formik'
import { withFormik } from 'formik'

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

export const showInformation = withFormik({
  mapPropsToValues: () => ({
    target: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet consectetur dui. Sed venenatis at purus vel suscipit. Aenean luctus tellus vehicula quam luctus rhoncus. Praesent venenatis sem nunc, laoreet euismod risus luctus ut. ',
      dateEnd: '10/09/2020',
      dateStart: '11/09/2020',
      percent: 10.2,
      amount: 'R$ 10000',
      title: 'Nome do objetivo'
    }
  })
})

const Component = ({ initialValues, disabled }) => (
  <div>
    <Formik
      initialValues={initialValues}
      render={({ setFieldValue }) => (
        <Targets>
          <Container>
            <Field
              name="target.title"
              render={({ field }) => (
                <Name
                  {...field}
                  title="Titulo do objetivo"
                  disabled={disabled}
                />
              )}
            />
            <Column>
              <div>
                <Description>
                  <Field
                    name="target.description"
                    render={({ field }) => (
                      <textarea
                        {...field}
                        maxLength={200}
                        title="Descrição do objetivo"
                        disabled={disabled}
                      />
                    )}
                  />
                </Description>
                <Information>
                  <div>
                    <span title="Data inicial">Data inicial:</span>
                    <Field
                      name="target.dateStart"
                      render={({ field }) => (
                        <Input
                          {...field}
                          disabled={disabled}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <span title="Data final">Data final:</span>
                    <Field
                      name="target.dateEnd"
                      render={({ field }) => (
                        <Input
                          {...field}
                          disabled={disabled}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <span title="Renda acumulada">Renda:</span>
                    <Field
                      name="target.amount"
                      render={({ field }) => (
                        <Input
                          {...field}
                          disabled={disabled}
                        />
                      )}
                    />
                  </div>
                </Information>
              </div>
              <Progress title="Progresso do objetivo">
                <Field
                  name="target.values.percent"
                  render={({ field, values }) => (
                    <DonutChart
                      {...field}
                      data={[
                        { value: 10.2, isEmpty: true, label: '' },
                        { value: (100 - 10.2), label: '', }
                      ]}
                      colors={[
                        '#FFF',
                        Theme.colors.primary_color
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
  </div>
)

export const Target = showInformation(Component)