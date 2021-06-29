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
  const renderedValues = useState([0, 1, 2, 3]) // indexes into values, splices as needed

  const userSelectValue = () => {
    console.log('user selected a value!')
  }

  const userInputValue = () => {
    console.log('user input value!')
  }

  const calculateUserInput = () => {
    console.log('calculated user input!')
  }

  const handleUserInput = () => {
    const handleInput = [userSelectValue, userInputValue, calculateUserInput][renderedTitle]
    handleInput()
  }

  return (
    <div className='calculator'>
      <Screen
        titles={titles[0]}
        currentTitle={renderedTitle}
        values={values[0]}
        renderedValIndexes={renderedValues[0]}
        handleUser={handleUserInput}
      />
    </div>
  )
}
export default Calculator
