import React from 'react'

// we're going to do this the 'right way' this time
// https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks

import Calculator from './Calculator.js'

import '../css/App.css'

const App = () => {
    return (
        <div className='app'>
            <Calculator/>
        </div>
    )
}

export default App