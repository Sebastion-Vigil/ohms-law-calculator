import React from 'react'

// we're going to do this the 'right way' this time
// https://reactjs.org/docs/hooks-overview.html
// https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks

import Calculator from './Calculator.js'

import '../css/flexbox.css' // base flex styling
import '../css/App.css'

const App = () => {
    return (
        <div className='app flex-col-cntr-cntr'>
            <Calculator/>
        </div>
    )
}

export default App