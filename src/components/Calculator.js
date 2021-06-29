import React, { useState } from 'react'

import '../css/calculator.css'

const Calculator = () => {
  const values = useState(['Watts', 'Volts', 'Ohms', 'Amps'])
  const func = () => {
    console.log(values[0])
  }
  return (
    <div className='calculator' onClick={func}>
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
