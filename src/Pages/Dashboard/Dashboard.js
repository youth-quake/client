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
	Data,
	Label
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

const Dashboard = ({ initialValues }) => (
	<div>
		<Friends
			visible={false}
			toggleVisible={() => { }}
		/>
		<NavBar />
		<Container>
			<Wrapper>
				{initialValues.category !== undefined && (
					initialValues.category.map(item => (
						<div>
							<Description color="true">{item.value}</Description>
							<Tag color="true">{item.title}</Tag>
						</div>
					))
				)}
			</Wrapper>
			<Information>
				<Card>
					<Title>Visão geral</Title>
					<div>
						<Data>
							<textarea placeholder="Descrição" value={initialValues.description} />
							<div>
								<Label>1° Objetivo criado:</Label>
								<Label>{initialValues.firstTarget}</Label>
							</div>
							<div>
								<Label>Objetivo mais recente:</Label>
								<Label>{initialValues.lastTarget}</Label>
							</div>
						</Data>
						<Progress title="Progresso de sua renda mensal">
							<DonutChart
								data={[
									{ value: initialValues.progress, label: '', isEmpty: false },
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
					<img src={ProfileImage} alt="Faça o download da tabela" />
					<Title>Visualização em tabela</Title>
					{initialValues.moviment !== undefined && (
						<Table>
							{initialValues.moviment.map(item => (
								<Header>
									<Line>{item.title}</Line>
								</Header>
							))}
							<Line>
								{initialValues.moviment.map(item => (
									<Column>
										<Line>{item.value}</Line>
									</Column>
								))}
							</Line>
						</Table>
					)}
				</Card>
			</Information>
		</Container>
		<Footer />
	</div>
)

export default Dashboard