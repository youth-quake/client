import React from 'react'
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
    PatrimonialSituation
} from '../../components'

import {
    Container,
    WrapperTitleDashboard,
    WrapperExpenses,
    TitleWrapperExpenses,
    DescriptionExpense,
    WrapperGraphic,
    TitleWrapperGraphic
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