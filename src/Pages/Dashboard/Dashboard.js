import React from 'react'
import DonutChart from 'react-donut-chart'
import {
	Theme,
	Footer,
	NavBar,
	Friends
} from '../../components'

import {
	Container,
	Wrapper,
	Title,
	Description,
	Information,
	Tag,
	Progress,
	Table,
	Column,
	Line,
	Header,
	Card,
	Data
} from './Dashboard.style'

import ProfileImage from '../../assets/img/girl big.png'

const data = [
	{
		key: '1',
		percent: '60%',
		description: 'Despesas fixas'
	},
	{
		key: '2',
		percent: '70%',
		description: 'Despesas variaveis'
	},
	{
		key: '3',
		percent: 'R$ 1.000,00',
		description: 'Despesas variaveis'
	},
	{
		key: '4',
		percent: '15%',
		description: 'Despesas variaveis'
	}
]

const percentValues = [
	{ key: 10, value: 30 },
	{ key: 11, value: 50 },
	{ key: 12, value: 60 },
	{ key: 13, value: 70 }
]

const Dashboard = () => (
	<div>
		<Friends
			visible={false}
			toggleVisible={() => {}}
		/>
		<NavBar />
		<Container>
			<Wrapper>
				{data.map(item => (
					<div>
						<Description color>{item.percent}</Description>
						<Tag color>{item.description}</Tag>
					</div>
				))}
			</Wrapper>
			<Information>
				<Card>
					<Title>Visão geral</Title>
					<div>
						<Data>
							<textarea placeholder="Descrição" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet consectetur dui. Sed venenatis at purus vel suscipit. Aenean luctus tellus vehicula quam luctus rhoncus. Praesent venenatis sem nunc, laoreet euismod risus luctus ut. " />
							<div>
								<labeL>1° Objetivo criado:</labeL>
								<label>sdsd</label>
							</div>
							<div>
								<labeL>1° Objetivo criado:</labeL>
								<label>sdsd</label>
							</div>
						</Data>
						<Progress title="Progresso de sua renda mensal">
							<DonutChart
								data={[
									{ value: 30, label: '', isEmpty: false },
								]}
								colors={[
									Theme.colors.primary_color,
									'#000',
								]}
								width={180}
								height={180}
								legend={false}
								strokeColor={'transparent'}
								clickToggle={true}
								emptyColor={Theme.colors.secondary_base_color}
							/>
							<labeL>% de Progresso</labeL>
						</Progress>
					</div>
				</Card>
				<Card>
					<img src={ProfileImage} />
					<Title>Visualização em tabela</Title>
					<Table>
						<Line>
							<Header>Valor</Header>
							<Header>Valor</Header>
							<Header>Valor</Header>
							<Header>Valor</Header>
						</Line>
						{percentValues.map(item => (
							<Line>
								<Column>{item.value}</Column>
								<Column>{item.value}</Column>
								<Column>{item.value}</Column>
								<Column>{item.value}</Column>
							</Line>
						))}
					</Table>
				</Card>
			</Information>
		</Container>
		<Footer />
	</div>
)

export default Dashboard