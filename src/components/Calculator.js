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
  const [valueSought, setValueSought] = useState('no selection') // instead y not create working copies of data to mutate freely
  const [renderedTitle, setRenderedTitle] = useState(0) // index into titles, updates as needed
  const [renderedValues, setRenderedVals] = useState([0, 1, 2, 3]) // indexes into values, splice as needed
  const [userInputVals, setUserInputVals] = useState([undefined, undefined]) // both truthy when value pair complete
  // no likely la lógica aquí better yet keep all app process data immutable and use filter()
  useEffect(() => {
    console.log('Calculator useEffect invoked')
  }, [renderedValues, userInputVals, valueSought]) // fires onMount & every time dependency changes

  const userSelectValue = (val) => {
    // console.log('userInputVals in userSelectValue: ', userInputVals[0], userInputVals[1])
    console.log('user selected a value!', values[0][val])
    const updatedRenderedVals = [...renderedValues]
    let valSought = valueSought
    valSought = values[0][val]
    updatedRenderedVals.splice(updatedRenderedVals.indexOf(val), 1)
    console.log('updatedRenderedVals: ', updatedRenderedVals)
    setRenderedVals(updatedRenderedVals)
    setRenderedTitle(1)
    setValueSought(valSought)
  }

  const userInputValue = (val) => {
    // dont like the way newTile handled => 2 refactor
    const newTitle = userInputVals[0] && !userInputVals[1] ? 2 : renderedTitle
    const updatedRenderedVals = [...renderedValues]
    const updatedUserInput = [...userInputVals]
    if (!userInputVals[0] && !userInputVals[1]) {
      console.log('Recording first user input', values[0][val])
      updatedUserInput[0] = values[0][val]
      updatedRenderedVals.splice(updatedRenderedVals.indexOf(val), 1)
    }
    if (userInputVals[0] && !userInputVals[1]) {
      console.log('Recording second user input', values[0][val])
      updatedUserInput[1] = values[0][val]
      updatedRenderedVals.splice(updatedRenderedVals.indexOf(val), 1)
    }
    console.log('updatedRenderedVals in useInputValue: ', updatedRenderedVals)
    setRenderedTitle(newTitle)
    setRenderedVals(updatedRenderedVals)
    setUserInputVals(updatedUserInput)
  }

  const calculateUserInput = (val) => {
    console.log('calculated user input!', val)
    console.log(
      'userInputVals in calculateUserInput: ',
      userInputVals[0],
      userInputVals[1]
    )
  }

  const handleUserInput = (val) => {
    // returns f() needed for current title/step of app process
    const handleInput = [userSelectValue, userInputValue, calculateUserInput][
      renderedTitle
    ]
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
