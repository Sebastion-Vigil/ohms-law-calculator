import React, { useState } from 'react'

import '../css/calculator.css'

const Calculator = () => {
  const values = useState(['Watts', 'Volts', 'Ohms', 'Amps'])
  const titles = useState(['Searching for which value?', 'Which 2 values known?', 'Answer'])
  const func = () => {
    console.log(values[0], titles[0])
  }
  return (
    <div className='calculator' onClick={func}>
        <div className='title'>{titles[0][0]}</div>
        {
            values[0].map((val, i) => {
                return (
                    <div key={i} className='user-select-value'>{val}</div>
                )
            })
        }
    </div>
  )
}
export default Calculator
