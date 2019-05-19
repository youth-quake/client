import React from 'react'
import DonutChart from 'react-donut-chart'
import {
    Button,
    InputEditable as Editable,
    Theme,
    Target,
    Footer,
    NavBar,
    Achievements,
    Friends,
    Modal,
    PatrimonialSituation,
    
} from '../../components'

import {
    Container,
    WrapperTitleDashboard,
    WrapperExpenses,
    TitleWrapperExpenses,
    DescriptionExpense,
    WrapperGraphic,
    TitleWrapperGraphic,
    Progress
} from './Dashboard.style'


const Dashboard = () => (
    <body>
        <NavBar/>
        <Container>
            <WrapperTitleDashboard>
                <label></label>
                <label>Renda: R$7,50</label>
            </WrapperTitleDashboard>

            {/* Divisória da esquerda com as despesas */}
            <WrapperExpenses>
                    <div>
                        <TitleWrapperExpenses>
                            <label>Despesas fixas</label>
                        </TitleWrapperExpenses>

                        <DescriptionExpense>
                                60%
                        </DescriptionExpense>
                    </div>

                    <div>
                        <TitleWrapperExpenses>
                            <label>Gasto total despesas fixas</label>
                        </TitleWrapperExpenses>

                        <DescriptionExpense>
                                R$ 1.000,00
                        </DescriptionExpense>
                    </div>

                    <div>
                        <TitleWrapperExpenses>
                            <label>Despesas variáveis</label>
                        </TitleWrapperExpenses>

                        <DescriptionExpense>
                                40%
                        </DescriptionExpense>
                    </div>

                    <div>
                        <TitleWrapperExpenses>
                            <label>Gasto total despesas variáveis</label>
                        </TitleWrapperExpenses>

                        <DescriptionExpense>
                                R$ 2.500,00
                        </DescriptionExpense>
                    </div>
            </WrapperExpenses>

            {/* Divisória da direita com o grafico e tabela CSV */}
            <WrapperGraphic>
                    <div>
                        <TitleWrapperGraphic>
                            <label>Visão geral</label>
                        </TitleWrapperGraphic>
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


                        </Progress>
                    </div>

                    <div>
                        <TitleWrapperGraphic>
                            <label>Visualização em tabela</label>
                        </TitleWrapperGraphic>
                    </div>
            </WrapperGraphic>



        <Footer/>
    </Container>
    </body>
)

export default Dashboard