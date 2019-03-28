import React from 'react'
import { compose, withState, withHandlers } from 'recompose'


const enhance = compose(
    withState('', '', false),
    withState('', '', false),
    withHandlers()
)

export default enhance