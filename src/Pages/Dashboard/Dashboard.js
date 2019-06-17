import React from 'react'

import {
	Theme,
	Footer,
	NavBar,
	Friends,
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
	Download,
	Movement
} from './Dashboard.style'

import { Progress as ProgressLevel } from 'react-sweet-progress'

const Dashboard = ({
	initialValues,
	toggleModal,
	showModal,
	toggleVisible,
	downloadCsv,
	visible
}) => (
		<>
			<Friends
				visible={visible}
				toggleVisible={toggleVisible}
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
					<Card>
						<Title>Visão geral</Title>
						<div>
							<Data>
								<h3>Descrição</h3>
								<textarea
									placeholder="Descrição"
									value={initialValues.description}
								/>
								<Movement 
									backgroundColor={Theme.colors.secondary_constrast_color}
									onClick={toggleModal}
								>
									Movimentar
								</Movement>
							</Data>
							<Progress>
								<ProgressLevel
									title="Progresso de sua renda mensal"
									type="circle"
									strokeWidth={5}
									percent={30}
									width={200}
									theme={
										{
											active: {
												symbol: ' ',
												trailColor: Theme.colors.base_color,
												color: Theme.colors.green
											}
										}
									}
								/>
							</Progress>
						</div>
					</Card>
					<Card>
						<Download onClick={downloadCsv} title="Faça o download do CSV" />
						<Title>Visualização em tabela</Title>
						{initialValues.moviment !== undefined && (
							<Table>
								<Header>
									{initialValues.moviment.map(item => (
										<Line>{item.title}</Line>
									))}
								</Header>
								<Column>
									{initialValues.moviment.map(item => (
										<Line>{item.value}</Line>
									))}
								</Column>
							</Table>
						)}
					</Card>
				</Information>
			</Container>
			<Footer />
		</>
	)

export default Dashboard