import React from 'react'

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