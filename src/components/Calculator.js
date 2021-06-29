import React, { useState, useEffect } from 'react'

import Screen from './Screen.js'

import '../css/calculator.css'
// learny learny https://stackoverflow.com/questions/54620928/useeffect-hook-not-firing-after-state-change#54621059
const Calculator = () => {
  const titles = useState([
    // 3 main steps of app process:
    'Searching for which value?', // 1 Select value
    'Which 2 values known?', // 2 Get two known values
    'Answer' // 3 Calculate and return answer
  ])
  const values = useState(['Watts', 'Volts', 'Ohms', 'Amps'])
  const [valueSought, setValueSought] = useState('no selection')
  const [renderedTitle, setRenderedTitle] = useState(0) // index into titles, updates as needed
  const [renderedValues, setRenderedVals] = useState([0, 1, 2, 3]) // indexes into values, splice as needed
  const [userInputVals, setUserInputVals] = useState([undefined, undefined]) // both truthy when value pair complete

  useEffect(() => {
    console.log('Calculator useEffect invoked')
  }, [renderedValues, userInputVals, valueSought]) // fires onMount & every time dependency changes

  const userSelectValue = val => {
    // console.log('userInputVals in userSelectValue: ', userInputVals[0], userInputVals[1])
    console.log('user selected a value!', values[0][val])
    const updatedRenderedVals = [...renderedValues]
    let valSought = valueSought
    valSought = values[0][val]
    updatedRenderedVals.splice(val, 1)
    setRenderedVals(updatedRenderedVals)
    setRenderedTitle(1)
    setValueSought(valSought)
  }

  const userInputValue = val => { // dont like the way newTile handled => 2 refactor
    const newTitle = userInputVals[0] && !userInputVals[1] ? 2 : renderedTitle
    const updatedRenderedVals = [...renderedValues]
    const updatedUserInput = [...userInputVals]
    if (!userInputVals[0] && !userInputVals[1]) {
      console.log('Recording first user input', values[0][val])
      updatedUserInput[0] = values[0][val]
    } 
    if (userInputVals[0] && !userInputVals[1]) {
      console.log('Recording second user input', values[0][val])
      updatedUserInput[1] = values[0][val]
      // upon entering 2nd val change renderedVals to exlude unselected val
      // get index address of two selected vals, make that new arr w/only 2 vals
      // or find index of unselected value 
      // console.log('index value of 1st recorded value: ', values[0].indexOf(updatedUserInput[0]), updatedUserInput[0])
      // console.log('index value of 2nd recorded value: ', values[0].indexOf(values[0][val]), values[0][val])
      // index address actual element inside renderedValues
      for (let i = 0; i < values[0].length; i++) {
        if (values[0][i] !== valueSought && values[0][i] !== updatedUserInput[0] && values[0][i] !== values[0][val]) {
          console.log('the missing link! ', values[0][i], i)
          console.log('the other missing link!' , updatedRenderedVals.indexOf(i))
          updatedRenderedVals.splice(updatedRenderedVals.indexOf(i), 1)
          console.log('here: ', updatedRenderedVals)
        }
      }
    }
    setRenderedTitle(newTitle)
    setRenderedVals(updatedRenderedVals)
    setUserInputVals(updatedUserInput)
  }

  const calculateUserInput = val => {
    console.log('calculated user input!', val)
    console.log('userInputVals in calculateUserInput: ', userInputVals[0], userInputVals[1])
  }

  const handleUserInput = val => { // returns f() needed for current title/step of app process
    const handleInput = [userSelectValue, userInputValue, calculateUserInput][
      renderedTitle
    ]
    handleInput(val)
  }
  return (
    <div className='calculator' >
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
