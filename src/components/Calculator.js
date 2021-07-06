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

  const values = useState([
    'Watts',
    'Volts',
    'Ohms', 
    'Amps',
    ])
  const [valueSought, setValueSought] = useState('no selection') // store val sought by user
  const [userInputVals, setUserInputVals] = useState([undefined, undefined]) // both truthy when value pair complete
  const [keyboard, setKeyboard] = useState(false) // just a boolean & method to update it
  const [display, setDisplay] = useState('') // here we go ya'll
  const [bttnVisibility, setBttnsVisibility] = useState(
    new Array(4).fill('visible')
  ) // ? does it reset on every render? if so, bad
  const [answerReady, sendAnswer] = useState([])
  const [renderedTitle, setRenderedTitle] = useState(0) // index into titles, updates as needed

  useEffect(() => {
    // console.log('Calculator useEffect invoked: ')
    // console.log('display state: ', display)
  }, [
    userInputVals,
    valueSought,
    answerReady,
    bttnVisibility,
    keyboard,
    display
  ]) // fires onMount & every time dependency changes

  const OhmsVals = { // this works in node console! O(1) !!!
    'Watts': {
      'EI': { 'EIcalcWatts': function(a, b) { return a * b } },
      'RI': { 'RIcalcWatts': function(a, b) { return a * b ** 2 } },
      'ER': { 'ERcalcWatts': function(a, b) { return a ** 2 / b } }
    },
    'Volts': {
      'RI': {'RIcalcVolts': function(a, b) {return a * b} },
      'PI': {'PIcalcVolts': function(a, b) {return a / b } },
      'PR': {'PRcalcVolts': function(a, b) {return (a * b) ** .5 }}
    },
    'Ohms': {
      'EI': {'EIcalcOhms': function(a, b) {return a / b}},
      'EP': {'EPcalcOhms': function(a, b) {return (a ** 2) / b}},
      'PI': {'PIcalcOhms': function(a, b) {return a / (b ** 2)}}
    },
    'Amps': {
      'ER': {'ERcalcAmps': function(a, b) {return a / b}},
      'PE': {'PEcalcAmps': function(a, b) {return a / b}},
      'PR': {'PRcalcAmps': function(a, b) {return (a / b) ** .5 }}
    }
  }

  const handleButtonVisibility = i => {
    const bttns = [...bttnVisibility]
    bttns[i] = 'hidden'
    setBttnsVisibility(bttns)
  }

  // step # 1 determine value sought by user
  const handleUserSelect = val => {
    console.log('user selected a value!', values[0][val], val)
    handleButtonVisibility(val)
    let valSought = valueSought
    valSought = values[0][val]
    setRenderedTitle(1)
    setValueSought(valSought) // console.log('End of step 1')
  }

  const getUserInput = val => {
    const newTitle = userInputVals[0] && !userInputVals[1] ? 2 : renderedTitle
    handleButtonVisibility(val)
    toggleKeyboard()
    const updatedUserInput = [...userInputVals]
    const newInputIndex = !userInputVals[0] && !userInputVals[1] ? 0 : 1
    updatedUserInput[newInputIndex] = values[0][val]
    if (newInputIndex === 1) {
      // if 1 then currently storing 2nd val
      console.log('Recording 2nd user input', values[0][val], val)
      const bttns = [...bttnVisibility]
      bttns.fill('hidden')
      setBttnsVisibility(bttns) // hide all bttns at this point
    } else {
      // otherwise currently storing 1st val
      console.log('Recording 1st user input', values[0][val], val)
    }
    setRenderedTitle(newTitle)
    setUserInputVals(updatedUserInput)
  }

  const calculateAnswer = (sought, v1, v2) => {
    // need 2 ensure params passed in correct order 2 prevent incorrect answer
    // 'EI' === 'IE'.split('').reverse().join('')
    // console.log('calculated user input!', val)
    // const readyAnswer = answerReady
    // readyAnswer.push('Calculating answer...')
    // sendAnswer(readyAnswer)
  }
  // https://www.calculator.net/ohms-law-calculator.html
  const handleUserInput = val => {
    // returns f() needed for current title/step of app process
    const handleInput = [handleUserSelect, getUserInput, calculateAnswer][
      renderedTitle
    ]
    handleInput(val)
  }

  // all below f() s 4 Keyboard.js

  const toggleKeyboard = () => {
    let toggled = !keyboard
    setKeyboard(toggled)
  }

  const handleNumKey = num => {
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
    console.log('Negative int toggle key clicked!')
  }

  const handleEnterKey = () => {
    // test f() just 2 see it worky
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
