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
	Item,
	Title,
	Description,
	Information,
	Tag,
	Progress,
	Table,
	Column,
	Line,
	Header,
	Data,
	Download,
	Movement,
	Remove,
	Instructions,
	Category,
	Wrapper
} from './Dashboard.style'

import { Progress as Percent } from 'react-sweet-progress'

import download from '../../assets/img/downloadMinor.png'

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
				<Category>
					{initialValues.category !== undefined && (
						initialValues.category.map(item => (
							<div key={item.value}>
								<Description color="true">{item.value}</Description>
								<Tag color="true">{item.title}</Tag>
							</div>
						))
					)}
				</Category>
				<Information>
					<Item>
						<Title>Visão geral</Title>
						<Wrapper>
							<Data>
								<Instructions>
									<h3>Hey!</h3>
									<p>
										Aqui você terá uma visão geral de como está progredindo com as suas finanças e o histórico das suas movimentações, lembrando que aqui nós observamos com base em todos os objetivos e movimentações, sendo elas gastos ou economias.
									</p>
									<span>E ah, lembre-se sempre de registrar suas movimentações financeiras no botão abaixo <span role="img" aria-label="smile">😊</span></span>
								</Instructions>
								<Movement
									backgroundColor={Theme.colors.secondary_constrast_color}
									onClick={toggleModal}
								>
									Movimentar
								</Movement>
							</Data>
							<Progress>
								<Percent
									title="Progresso de sua renda mensal"
									type="circle"
									strokeWidth={5}
									percent={initialValues.progress}
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
								<p>Progresso total: {initialValues.progress}%</p>
							</Progress>
						</Wrapper>
					</Item>
					<Item>
						<Title>Visualização em tabela
							<Download onClick={downloadCsv}>
								<img src={download} alt="Faça o download do CSV" />
								<label>Download</label>
							</Download>
						</Title>
						{initialValues.movements !== undefined && (
							<div>
								<Header>
									<Line>Data</Line>
									<Line>Valor</Line>
									<Line>Descrição</Line>
									<Line>Tipo</Line>
									<Line>Referência</Line>
									<Line>Remover</Line>
								</Header>
								<Table>
									{initialValues.movements.map(item => (
										<div>
											<Column>
												<Line>{item.date}</Line>
												<Line>{item.value}</Line>
												<Line>{item.description}</Line>
												<Line>{item.type}</Line>
												<Line>{item.reference}</Line>
												<Line>
													<Remove>Deletar</Remove>
												</Line>
											</Column>
										</div>
									))}
								</Table>
							</div>
						)}
					</Item>
				</Information>
			</Container>
			<Footer />
		</>
	)

export default Dashboard