import React, { useState } from 'react'

import Screen from './Screen.js'

import '../css/calculator.css'

const Calculator = () => {
  const titles = useState(['Searching for which value?', 'Which 2 values known?', 'Answer']) 
  const values = useState(['Watts', 'Volts', 'Ohms', 'Amps'])
  const renderedTitle = useState(0)
  const renderedValues = useState([0, 1, 2, 3])
  const [excludedVal, setExcludedVal] = useState('none') // bout to get rid of dis 4 ^^^
  const userSelect = (val) => {
    console.log(val)
    setExcludedVal(val)
  }
  return (
    <div className='calculator'>
        <Screen
          currentTitle={titles[0][0]}
          values={values[0]}
          renderedVals={renderedValues}
          excludedValue={excludedVal}
          handleUserSelect={userSelect}
        />
    </div>
  )
}
export default Calculator
