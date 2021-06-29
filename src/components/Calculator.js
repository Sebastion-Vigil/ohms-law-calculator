import React, { useState, useEffect } from 'react'

import Screen from './Screen.js'

import '../css/calculator.css'

const Calculator = () => {
  const titles = useState(['Searching for which value?', 'Which 2 values known?', 'Answer']) 
  const values = useState(['Watts', 'Volts', 'Ohms', 'Amps'])
  const [renderedTitle, setRenderedTitle] = useState(0)
  const renderedValues = useState([0, 1, 2, 3])



  const testFunc = () => {
      let newTitle = renderedTitle
      newTitle += 1
      if (newTitle > 2) newTitle = 0
    //   console.log('newTitle index: ', newTitle)
      setRenderedTitle(newTitle)
  }

  const firstFunc = () => {
      console.log('first function!')
  }

  const otherFunc = () => {
      console.log('other function!')
  }

  const experimentFunc = () => {
    const toReturn = renderedTitle === 0 ? firstFunc : otherFunc
    toReturn() // k this worked but had 2 invoke it will experiment more later
  }

  
  return (
    <div className='calculator' >
        <Screen
          titles={titles[0]}
          currentTitle={renderedTitle}
          values={values[0]}
          renderedVals={renderedValues[0]}
          func={experimentFunc}
        />
    </div>
  )
}
export default Calculator
