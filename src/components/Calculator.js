import React, { useState } from 'react'

import Screen from './Screen.js'

import '../css/calculator.css'

const Calculator = () => {
  const values = useState(['Watts', 'Volts', 'Ohms', 'Amps'])
  const titles = useState(['Searching for which value?', 'Which 2 values known?', 'Answer'])
  
  return (
    <div className='calculator'>
        <Screen
          titles={titles[0]}
          values={values[0]}
        />
        {/* <div className='title'>{titles[0][0]}</div>
        {
            values[0].map((val, i) => {
                return (
                    <div key={i} className='user-select-value'>{val}</div>
                )
            })
        } */}
    </div>
  )
}
export default Calculator
