import React, { useState, useEffect } from 'react'

import Screen from './Screen.js'

import '../css/calculator.css'

const Calculator = () => {
  const titles = useState([
    'Searching for which value?',
    'Which 2 values known?',
    'Answer'
  ])
  const values = useState(['Watts', 'Volts', 'Ohms', 'Amps'])
  const [renderedTitle, setRenderedTitle] = useState(0) // index into titles, updates as needed
  const [renderedValues, setRenderedVals] = useState([0, 1, 2, 3]) // indexes into values, splice as needed

  const userSelectValue = (val) => {
    if (renderedTitle >= 1) return
    console.log('user selected a value!', val)
    const selectedIndex = values.indexOf(val)
    const updatedVals = renderedValues
    updatedVals.splice(selectedIndex, 1)
    setRenderedVals(updatedVals)
    setRenderedTitle(1)
  }

  const userInputValue = (val) => {
    console.log('user input value!', val)
  }

  const calculateUserInput = (val) => {
    console.log('calculated user input!', val)
  }

  const handleUserInput = (val) => {
    const handleInput = [userSelectValue, userInputValue, calculateUserInput][renderedTitle]
    handleInput(val)
  }

  return (
    <div className='calculator'>
      <Screen
        currentTitle={titles[0][renderedTitle]}
        values={values[0]}
        renderedValIndexes={renderedValues}
        handleUser={handleUserInput}
      />
    </div>
  )
}
export default Calculator
