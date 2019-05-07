import React from 'react'
import DonutChart from 'react-donut-chart'
import styled from 'styled-components'
import { Theme } from '../../components'

export const Title = styled.p`
  font-size: 28px;  
  font-family: ${Theme.font.font_family};
  font-weight: bold;
  padding: 10px 20px;
`

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

const Name = styled.h2`
  margin: 0;
  padding: 10px;
  width: 30%;
  font-size: 18px;
  text-align: center;
  border-radius: 2px;
  color: ${Theme.colors.base_color};
  background-color: ${Theme.colors.constrast_color};
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
  width: 220px;
  margin: 0 50px;

  & > div {
    display: flex;
    justify-content: space-between;

    & > span {
      font-weight: bold;
    }

    & > span+span {
      font-weight: normal;
    }
  }

  & > h3 {
    margin: 20px 0;

    & > span {
      font-weight: bold;
      margin: 0 10px 0 0;
    }

    & > span+span {
      font-weight: normal;
    }
  }
`

export const Target = ({ targets }) => (
  <div>
    <Title>Meus objetivos</Title>
    <Targets>
      {targets.map(item => (
        <Container key={item.key}>
          <Name>{item.title}</Name>
          <Column>
            <div>
              <Description>
                <textarea value={item.description} onChange={() => null} />
              </Description>
              <Information>
                <div>
                  <span>Data de início:</span>
                  <span>{item.start}</span>
                </div>
                <div>
                  <span>Data de fim:</span>
                  <span>{item.end}</span>
                </div>
                <h3>
                  <span>R$</span><span>{item.amount}</span>
                </h3>
              </Information>
            </div>
            <Progress>
              <DonutChart
                data={[
                  { value: item.percent, isEmpty: true, label: '' },
                  { value: 100 - item.percent, label: '' }
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
              />
            </Progress>
          </Column>
        </Container>
      )
      )}
    </Targets>
  </div>
)