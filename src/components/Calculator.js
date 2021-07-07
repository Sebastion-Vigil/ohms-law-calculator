import React, { useState, useEffect } from 'react' // okay so we got to test this push to GitHub

import Screen from './Screen.js'

import '../css/calculator.css'

const Calculator = () => {
  
  const [titles, setTitles] = useState([
    // 3 main steps of app process:
    'Searching for which value?', // 1 Select value
    'Enter 1st value known', // 2 Get two known values
    'Answer' // 3 Calculate and return answer
  ])

  const values = useState([
    'Watts',
    'Volts',
    'Ohms', 
    'Amps',
    ])
  const [valueSought, setValueSought] = useState('none') // store val sought by user
  const [userInputVals, setUserInputVals] = useState([]) // both truthy when value pair complete
  const [keyboard, setKeyboard] = useState(false) // just a boolean & method to update it
  const [display, setDisplay] = useState('')
  const [resetButton, setResetButton] = useState(false)
  const [decimalPresent, setDecimalPresent] = useState(false)
  const [bttnVisibility, setBttnsVisibility] = useState(new Array(4).fill('visible'))
  const [lastBttnSelected, setLastBttnSelected] = useState(0)
  const [renderedTitle, setRenderedTitle] = useState(0) // index into titles, updates as needed

  useEffect(() => {
    // console.log('Calculator useEffect invoked: ')
    // console.log('display state: ', display)
  }, [
    userInputVals,
    valueSought,
    bttnVisibility,
    lastBttnSelected,
    keyboard,
    display,
    titles,
    resetButton
  ]) // fires onMount & every time dependency changes

  const OhmsVals = { // this works in node console! O(1) !!!
    'LetterMap': {
       'Watts': 'P',
       'Volts': 'E',
       'Ohms': 'R',
       'Amps': 'I'
    },
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
    setLastBttnSelected(i)
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
    handleButtonVisibility(val)
    toggleKeyboard()
    const updatedTitle = [...titles]
    updatedTitle[1] = 'Enter number for ' + values[0][val]
    setTitles(updatedTitle)
    const updatedUserInput = [...userInputVals]
    const userInputString = values[0][val]
    const userInputObj = {}
    userInputObj[userInputString] = undefined
    updatedUserInput.push(userInputObj)
    if (userInputVals.length === 1) { // if 1 then currently storing 2nd val
      console.log('Recording 2nd user input', values[0][val], val)
    } else { // otherwise currently storing 1st val
      console.log('Recording 1st user input', values[0][val], val)
    }
    setUserInputVals(updatedUserInput)
  }

  const calculateAnswer = (sought, valPair, v1, v2) => {
    const funcKey = valPair + 'calc' + sought
    let answer = OhmsVals[sought][valPair][funcKey](v1, v2)
    setRenderedTitle(2)
    setDisplay(answer.toString())
    setResetButton(true)
  }
  // https://www.calculator.net/ohms-law-calculator.html
  const handleUserInput = val => {
    // returns f() needed for current title/step of app process
    const handleInput = [handleUserSelect, getUserInput, calculateAnswer][
      renderedTitle
    ]
    handleInput(val)
  }
  // passed to Screen.js
  const toggleKeyboard = () => {
    let toggled = !keyboard
    setKeyboard(toggled)
  }

  // all below f()s passed 2 Keyboard.js

  const handleNumKey = num => {
    let currentDisplay = display
    currentDisplay += num
    setDisplay(currentDisplay)
  }

  const handleDecimalKey = () => {
    if (decimalPresent) return 
    let currentDisplay = display
    currentDisplay += '.'
    setDisplay(currentDisplay)
    setDecimalPresent(true)
  }

  const handleBackspaceKey = () => {
    let currentDisplay = display.split('')
    const deleted = currentDisplay.pop()
    if (deleted === '.') setDecimalPresent(false) // make sure '.' allowed again if deleted
    currentDisplay = currentDisplay.join('')
    setDisplay(currentDisplay)
  }

  const handleNegIntKey = () => {
    console.log('Negative int toggle key clicked!')
  }

  const handleEnterKey = () => {
    const inputTitle = userInputVals.length === 1 ? 'Enter 2nd Value known' : 'Calculating...'
    const newTitle = [...titles]
    newTitle[1] = inputTitle
    const userInputIndex = userInputVals.length - 1
    const updatedUserInput = [...userInputVals]
    updatedUserInput[userInputIndex][Object.keys(updatedUserInput[userInputIndex])[0]] = parseFloat(display)
    setUserInputVals(updatedUserInput)
    setDisplay('')
    toggleKeyboard()
    setDecimalPresent(false)
    setTitles(newTitle)
    if (userInputVals.length === 2) {
      const hidden = new Array(4).fill('hidden')
      setBttnsVisibility(hidden)
      const firstInputStr = Object.keys(userInputVals[0])[0]
      const secondInputStr = Object.keys(userInputVals[1])[0]
      let inputLetterPair = OhmsVals['LetterMap'][firstInputStr] + OhmsVals['LetterMap'][secondInputStr]
      if (!OhmsVals[valueSought][inputLetterPair]) {
        inputLetterPair = inputLetterPair.split('').reverse().join('')
        const swappedInputVals = [...userInputVals]
        swappedInputVals.reverse()
      }
      
      calculateAnswer(valueSought, inputLetterPair, Object.values(userInputVals[0])[0], Object.values(userInputVals[1])[0])
      // const answer = OhmsVals[valueSought][inputLetterPair][inputKey](firstInput, secondInput)
    }
  }

  const handleCancelKey = () => {
    const inputVals = [...userInputVals]
    const canceled = inputVals.pop()
    const bttns = [...bttnVisibility]
    bttns[lastBttnSelected] = 'visible'
    setBttnsVisibility(bttns)
    console.log('okay, canceling ' + Object.entries(canceled))
    setUserInputVals(inputVals)
    setDisplay('')
    toggleKeyboard()
    setDecimalPresent(false)
  }

  const handleResetButton = () => {
    setValueSought('none')
    const resetUserInputVals = []
    setUserInputVals(resetUserInputVals)
    setKeyboard(false)
    setDisplay('')
    setResetButton(false)
    setDecimalPresent(false)
    const resetBttnVisibility = new Array(4).fill('visible')
    setBttnsVisibility(resetBttnVisibility)
    setLastBttnSelected(0)
    setRenderedTitle(0)
  }

  return (
    <div className='calculator' >
      <Screen
        currentTitle={titles[renderedTitle]}
        values={values[0]}
        keyboardActive={keyboard}
        bttnVisibility={bttnVisibility}
        toggleKeyboard={toggleKeyboard}
        handleUser={handleUserInput}
        handleNumKey={handleNumKey}
        handleDecimalKey={handleDecimalKey}
        handleBackspaceKey={handleBackspaceKey}
        handleNegIntKey={handleNegIntKey}
        handleEnterKey={handleEnterKey}
        handleCancelKey={handleCancelKey}
        display={display}
        resetButton={resetButton}
        handleResetButton={handleResetButton}
      />
    </div>
  )
}
export default Calculator
// learny learny https://stackoverflow.com/questions/54620928/useeffect-hook-not-firing-after-state-change#54621059

// const obj = {
//   ... 'Watts': 'P',
//   ... 'Volts': 'E',
//   ... 'Ohms': 'R',
//   ... 'Amps': 'I'
//   ... }
//   undefined
//   > 
//   > 
//   > let str = 'Watts'
//   undefined
//   > 
//   > str = obj[str]
//   'P'
//   > str
//   'P'
//   > 
  
