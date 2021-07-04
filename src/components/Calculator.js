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

  const values = useState(['Watts', '0', 'Volts', '0', 'Ohms', '0', 'Amps', '0']) // 4 Ohm's Law Vals, each followed by quantity 2 b inserted from Keyboard
  const [valueSought, setValueSought] = useState('no selection') // store val sought by user
  const [keyboard, setKeyboard] = useState(false) // just a boolean & method to update it 
  const [display, setDisplay] = useState('') // here we go ya'll 
  const [bttnVisibility, setBttnsVisibility] = useState(new Array(4).fill('visible')) // ? does it reset on every render? if so, bad
  const [answerReady, sendAnswer] = useState([])
  const [renderedTitle, setRenderedTitle] = useState(0) // index into titles, updates as needed
  const [userInputVals, setUserInputVals] = useState([undefined, undefined]) // both truthy when value pair complete

  useEffect(() => {
    console.log('Calculator useEffect invoked: ')
    console.log('display state: ', display)
  }, [userInputVals, valueSought, answerReady, bttnVisibility, keyboard, display]) // fires onMount & every time dependency changes

  const toggleKeyboard = () => {
    let toggled = !keyboard
    setKeyboard(toggled)
  }

  const handleButtonVisibility = i => {
    const bttns = [...bttnVisibility]
    bttns[i] = 'hidden'
    setBttnsVisibility(bttns)
  }

  // step # 1 determine value sought by user
  const handleUserSelect = val => {
    // console.log('user selected a value!', values[0][val], val)
    handleButtonVisibility(val)
    let valSought = valueSought
    valSought = values[0][val]
    setRenderedTitle(1)
    setValueSought(valSought) // console.log('End of step 1')
  }

  // step # 2 get two vals known by user
  // aight this f() needs 2b broken down into smaller chunks, 
  // then do something similar to handleUserInput, have the specific
  // f() called only when the time is right and in the proper sequence.
  // taking this approach, how could i restructure the entire component?


  const getUserInput = val => {
    const newTitle = userInputVals[0] && !userInputVals[1] ? 2 : renderedTitle
    handleButtonVisibility(val)
    toggleKeyboard()
    const updatedUserInput = [...userInputVals]
    const newInputIndex = !userInputVals[0] && !userInputVals[1] ? 0 : 1
    updatedUserInput[newInputIndex] = values[0][val]
    if (newInputIndex === 1) { // if 1 then currently storing 2nd val
      // console.log('Recording 2nd user input', values[0][val])
      const bttns = [...bttnVisibility] 
      bttns.fill('hidden')
      setBttnsVisibility(bttns) // hide all bttns at this point
    } else { // otherwise currently storing 1st val
      // console.log('Recording 1st user input', values[0][val])
    }
    setRenderedTitle(newTitle)
    setUserInputVals(updatedUserInput)
  }

  const calculateUserInput = val => {
    // console.log('calculated user input!', val)
    // const readyAnswer = answerReady
    // readyAnswer.push('Calculating answer...')
    // sendAnswer(readyAnswer)
  }

  const handleUserInput = val => {
    // returns f() needed for current title/step of app process
    const handleInput = [handleUserSelect, getUserInput, calculateUserInput][
      renderedTitle
    ]
    handleInput(val)
  }

  // all below f() s 4 Keyboard.js

  const handleNumKey = (num) => {
    console.log('Number entered!', num, typeof num)
    let currentDisplay = display
    currentDisplay += num
    setDisplay(currentDisplay)
  }
  
  const handleDecimalKey = () => {
     console.log('Decimal key clicked!')
  }

  const handleBackspaceKey = () => {
    console.log('Backspace key clicked!')
  }

  const handleNegIntKey = () => {
    console.log("Negative int toggle key clicked!")
  }

  const handleEnterKey = () => { // test f() just 2 see it worky
    console.log('Enter key clicked!')
  }
  return (
    <div className='calculator'>
      <Screen
        currentTitle={titles[0][renderedTitle]}
        values={values[0]}
        keyboardActive={keyboard}
        answer={answerReady}
        bttnVisibility={bttnVisibility}
        toggleKeyboard={toggleKeyboard}
        handleUser={handleUserInput}
        handleNumKey={handleNumKey}
        handleDecimalKey={handleDecimalKey}
        handleBackspaceKey={handleBackspaceKey}
        handleNegIntKey={handleNegIntKey}
        handleEnterKey={handleEnterKey}
        display={display}
      />
    </div>
  )
}
export default Calculator
// learny learny https://stackoverflow.com/questions/54620928/useeffect-hook-not-firing-after-state-change#54621059