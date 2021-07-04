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
    '+/-'
  ])
  useEffect(() => {
    // console.log('keyboardButtons[0]: ', keyboardButtons[0])
    // console.log('keyboard props: ', props)
  })
  return (
    <div className='keyboard-container'>
      <div className='keyboard'>
        {keyboardButtons[0].map((bttn, i) => {
          return (
            <div key={i} className='key'>
              {bttn}
            </div>
          )
        })}
        <div className='key' id='submit-bttn' onClick={props.handleKeyboardInput}>Enter</div>
        <div className='key' id='exit' onClick={props.toggle}>
          Cancel
        </div>
      </div>
    </div>
  )
}

export default Keyboard
