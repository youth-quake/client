import React from 'react'
import { compose, withState, withHandlers } from 'recompose'


const enhance = compose(
    withState('', '', false),
    withState('', '', false),
    withHandlers()
)

withHandlers({ showConsoleLog: () => () => {
    console.log('Teste'); 
    },
});

export default enhance