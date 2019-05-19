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
    WrapperTitleDashboard

} from './Dashboard.style'


const Dashboard = () => (
    <Container>
        <NavBar/>
            <WrapperTitleDashboard>
                <label>Dashboard de controle de gastos</label>
            </WrapperTitleDashboard>

            {/* Despesas Fixas */}
            <Wrapper>
                    <div>
                        <TitleWrapper>
                            <label>Total de despesas fixas</label>
                        </TitleWrapper>
                    </div>
                    <div>
                        <TitleWrapper>
                            <label>Alimentação</label>
                        </TitleWrapper>
                    </div>
                    <div>
                        <TitleWrapper>
                            <label>Contas para pagar</label>
                        </TitleWrapper>
                    </div>
                    <div>
                        <TitleWrapper>
                            <label>Medicamentos</label>
                        </TitleWrapper>
                    </div>
            </Wrapper>

            {/* Despesas Variaveis */}
            <Wrapper>
                    <div>
                        <TitleWrapper>
                            <label>Total de despesas variáveis</label>
                        </TitleWrapper>
                    </div>

                    <div>
                        <TitleWrapper>
                            <label>Cinema</label>
                        </TitleWrapper>
                    </div>

                    <div>
                        <TitleWrapper>
                            <label>Entretenimento</label>
                        </TitleWrapper>
                    </div>

                    <div>
                        <TitleWrapper>
                            <label>Roupas</label>
                        </TitleWrapper>
                    </div>
            </Wrapper>
        {/* <Footer/> */}
    </Container>
)

export default Dashboard