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
    TitleWrapper

} from './Dashboard.style'


const Dashboard = () => (
    <Container>
        <NavBar/>
            <Wrapper>
                    <div>
                        <TitleWrapper>
                            <label>Minhas despesas fixas mensais</label>
                        </TitleWrapper>
                    </div>
                    <div>
                        <TitleWrapper>
                            <label>Minhas despesas</label>
                        </TitleWrapper>
                    </div>
            </Wrapper>
        <Footer/>
    </Container>
)

export default Dashboard