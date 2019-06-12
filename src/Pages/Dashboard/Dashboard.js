import React from 'react'
import DonutChart from 'react-donut-chart'

import {
	Theme,
	Footer,
	NavBar,
	Friends,
	Button,
	Modal,
	Movements
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
	Text
} from './Dashboard.style'

import ProfileImage from '../../assets/img/girl big.png'

const Dashboard = ({
	initialValues,
	toggleModal,
	showModal
}) => (
		<>
			<Friends
				visible={false}
				toggleVisible={() => { }}
			/>
			<NavBar />
			<Container>
				<Modal
					showModal={showModal}
					toggleModal={toggleModal}
					title="Nova movimentação"
					text=""
					Form={Movements}
				/>
				<Wrapper>
					{initialValues.category !== undefined && (
						initialValues.category.map(item => (
							<div key={item.value}>
								<Description color="true">{item.value}</Description>
								<Tag color="true">{item.title}</Tag>
							</div>
						))
					)}
				</Wrapper>
				<Information>
					<Button
						onClick={toggleModal}
						backgroundColor={Theme.colors.primary_color}
					>
						Movimentar
					</Button>
					<Card>
						<Title>Visão geral</Title>
						<div>
							<Data>
								<textarea placeholder="Descrição" value={initialValues.description} />
								<div>
									<Text>1° Objetivo criado:</Text>
									<Text>{initialValues.firstTarget}</Text>
								</div>
								<div>
									<Text>Objetivo mais recente:</Text>
									<Text>{initialValues.lastTarget}</Text>
								</div>
							</Data>
							<Progress title="Progresso de sua renda mensal">
								<DonutChart
									data={[
										{ value: 80.5, label: '', isEmpty: false },
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
								<Text>% de Progresso</Text>
							</Progress>
						</div>
					</Card>
					<Card>
						<img src={ProfileImage} alt="Faça o download da tabela" />
						<Title>Visualização em tabela</Title>
						{initialValues.moviment !== undefined && (
							<Table>
								{initialValues.moviment.map(item => (
									<Header key={item.title}>
										<Line>{item.title}</Line>
									</Header>
								))}
								<Line>
									{initialValues.moviment.map(item => (
										<Column key={item.value}>
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
		</>
	)

export default Dashboard