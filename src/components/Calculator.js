import React, { useState, useEffect } from 'react' // okay so we got to test this push to GitHub

import Screen from './Screen.js'

import '../css/calculator.css'

const Calculator = () => {
  const titles = useState([
    // 3 main steps of app process:
    'Searching for which value?', // 1 Select value
    'Which 2 values known?', // 2 Get two known values
    'Answer' // 3 Calculate and return answer
  ])
  const values = useState(['Watts', 'Volts', 'Ohms', 'Amps']) // the four Ohm's Law values
  const [valueSought, setValueSought] = useState('no selection') // store val sought by user
  const [answerReady, sendAnswer] = useState([])
  const [renderedTitle, setRenderedTitle] = useState(0) // index into titles, updates as needed
  const [renderedValues, setRenderedVals] = useState([0, 1, 2, 3]) // indexes into values, splice as needed
  const [userInputVals, setUserInputVals] = useState([undefined, undefined]) // both truthy when value pair complete

  useEffect(() => {
    // console.log('Calculator useEffect invoked: ')
  }, [renderedValues, userInputVals, valueSought, answerReady]) // fires onMount & every time dependency changes

  const userSelectValue = val => {
    // step # 1 determine value sought by user
    // console.log('user selected a value!', values[0][val])
    const updatedRenderedVals = [...renderedValues]
    let valSought = valueSought
    valSought = values[0][val]
    updatedRenderedVals.splice(updatedRenderedVals.indexOf(val), 1)
    setRenderedVals(updatedRenderedVals)
    setRenderedTitle(1)
    setValueSought(valSought)
    // console.log('End of step 1')
  }

  const userInputValue = val => {
    // step # 2 get two vals known by user
    // dont like the way newTile handled => 2 refactor
    const newTitle = userInputVals[0] && !userInputVals[1] ? 2 : renderedTitle
    const updatedRenderedVals = [...renderedValues]
    const updatedUserInput = [...userInputVals]
    if (!userInputVals[0] && !userInputVals[1]) {
      // if neither val recorded, do step # 2 part a
      // console.log('Recording first user input', values[0][val])
      updatedUserInput[0] = values[0][val] // => implement keyboard pop-up logic before renderedVals updated
      updatedRenderedVals.splice(updatedRenderedVals.indexOf(val), 1)
    }
    if (userInputVals[0] && !userInputVals[1]) {
      // if 1st val recorded, do step #2 part b
      // console.log('Recording second user input', values[0][val])
      updatedUserInput[1] = values[0][val]
      updatedRenderedVals.splice(updatedRenderedVals.indexOf(val), 1)
      updatedRenderedVals.pop()
      const readyAnswer = answerReady
      readyAnswer.push('Calculating answer...')
      sendAnswer(readyAnswer)
      // console.log('End of step 2')
    }
    setRenderedTitle(newTitle)
    setRenderedVals(updatedRenderedVals)
    setUserInputVals(updatedUserInput)
  }

  const calculateUserInput = val => {
    console.log('calculated user input!', val)
  }

  const handleUserInput = val => {
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
        answer={answerReady}
      />
    </div>
  )
}
export default Calculator
// learny learny https://stackoverflow.com/questions/54620928/useeffect-hook-not-firing-after-state-change#54621059
