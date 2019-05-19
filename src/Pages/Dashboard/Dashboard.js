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
    Wrapper,
    TitleWrapper,
    WrapperTitleDashboard,
    DescriptionExpense
} from './Dashboard.style'


const Dashboard = () => (
    <Container>
        <NavBar/>
            <WrapperTitleDashboard>
                <label>Dashboard de controle de gastos</label>
                <label>Renda: R$7,50</label>
            </WrapperTitleDashboard>

            {/* Despesas Fixas */}
            <Wrapper>
                    <div>
                        <TitleWrapper>
                            <label>Despesas fixas</label>
                        </TitleWrapper>

                        <DescriptionExpense>
                                
                        </DescriptionExpense>
                    </div>
                    <div>
                        <TitleWrapper>
                            <label>Mercado</label>
                        </TitleWrapper>
                        <DescriptionExpense>
                                R$ 100,00
                        </DescriptionExpense>
                    </div>
                    <div>
                        <TitleWrapper>
                            <label>Contas para pagar</label>
                        </TitleWrapper>
                        <DescriptionExpense>
                                R$ 432,00
                        </DescriptionExpense>
                    </div>
                    <div>
                        <TitleWrapper>
                            <label>Alimentação</label>
                        </TitleWrapper>
                        <DescriptionExpense>
                                R$ 120,00
                        </DescriptionExpense>
                    </div>
            </Wrapper>

            {/* Despesas Variaveis */}
            <Wrapper>
                    <div>
                        <TitleWrapper>
                            <label>Despesas variáveis</label>
                        </TitleWrapper>
                        <DescriptionExpense>
                        </DescriptionExpense>
                    </div>

                    <div>
                        <TitleWrapper>
                            <label>Medicamentos</label>
                        </TitleWrapper>
                        <DescriptionExpense>
                                R$ 373,30
                        </DescriptionExpense>
                    </div>

                    <div>
                        <TitleWrapper>
                            <label>Entretenimento</label>
                        </TitleWrapper>
                        <DescriptionExpense>
                                R$ 200,00
                        </DescriptionExpense>
                    </div>

                    <div>
                        <TitleWrapper>
                            <label>Roupas</label>
                        </TitleWrapper>
                        <DescriptionExpense>
                                R$ 59,00
                        </DescriptionExpense>
                    </div>
            </Wrapper>
        {/* <Footer/> */}
    </Container>
)

export default Dashboard