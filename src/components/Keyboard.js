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
    '0'
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
            <div key={i} className='key' onClick={() => props.handleNumKey(bttn)}>
              {bttn}
            </div>
          )
        })}
        <div className='key' id='decimal-bttn' onClick={props.handleDecimalKey}>{`.`}</div>
        <div className='key' id='backspace-bttn' onClick={props.handleBackspaceKey}>{`<=`}</div>
        <div className='key' id='enter-bttn' onClick={props.handleEnterKey}>{`Enter`}</div>
        <div className='key' id='exit-bttn' onClick={props.handleCancelKey}>
          Cancel
        </div>
      </div>
    </div>
  )
}

export default Keyboard
