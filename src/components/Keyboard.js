import React, { useState, useEffect } from 'react'

import '../css/Keyboard.css'

const Keyboard = props => {
  const keyboardButtons = useState([
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '0',
    '.',
    '<=',
    '+/-',
    'Enter',
    'Cancel'
  ])
  useEffect(() => {
    console.log('keyboardButtons[0]: ', keyboardButtons[0])
  })
  return (
    <div className='keyboard'>
      {keyboardButtons[0].map((bttn, i) => {
        return (
          <div key={i} className='key'>
            {bttn}
          </div>
        )
      })}
    </div>
  )
}

export default Keyboard
