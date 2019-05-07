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
  border: solid 1px ${Theme.colors.border_color};

`

const Name = styled.h2`
  margin: 0;
  padding: 10px;
  width: 30%;
  font-size: 18px;
  text-align: center;
  border-radius: 2px;
  color: ${Theme.colors.base_color};
  background-color: ${Theme.colors.primary_color};
  border: solid 1px ${Theme.colors.border_color};
`

const Description = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 40px 0;
  color: ${Theme.colors.font_color};
  height: 100px;
  width: 500px;

  & > textarea {
    font-size: 16.5px;
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
  padding: 10px;
  display: flex;

  & > div {
    margin: 0 20px;
    padding: 10px 0;
  }

  & > div > span {
    margin: 0 10px;
    font-weight: bold;
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
                <textarea value={item.description} onChange={() => null}/>
              </Description>
              <Information>
                <div>
                  <span>Data de início:</span>
                  <p>{item.start}</p>
                  <br />
                  <span>Data de fim:</span>
                  <p>{item.end}</p>
                </div>
                <div>
                  <span>Renda:</span>
                  <p>R$ {item.amount}</p>
                </div>
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
              />
            </Progress>
          </Column>
        </Container>
      )
      )}
    </Targets>
  </div>
)