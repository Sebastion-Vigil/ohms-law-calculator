import React, { useState, useEffect } from 'react'

import '../css/flexbox.css' // base flex styling
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
    <div className='keyboard-container flex-col-flx-end-cntr'>
      <div className='keyboard flex-row-cntr-cntr-wrap'>
        {keyboardButtons[0].map((bttn, i) => {
          return (
            <div
              key={i}
              className='key flex-row-cntr-cntr'
              onClick={() => props.handleNumKey(bttn)}
            >
              {bttn}
            </div>
          )
        })}
        <div
          className='key flex-row-cntr-cntr'
          id='decimal-bttn'
          onClick={props.handleDecimalKey}
        >{`.`}</div>
        <div
          className='key flex-row-cntr-cntr'
          id='backspace-bttn'
          onClick={props.handleBackspaceKey}
        >{`<=`}</div>
        <div
          className='key flex-row-cntr-cntr'
          id='clear-all-bttn'
          onClick={props.handleClearAllKey}
        >{`AC`}</div>
        <div
          className='key flex-row-cntr-cntr'
          id='enter-bttn'
          onClick={props.handleEnterKey}
        >{`Enter`}</div>
        <div className='key flex-row-cntr-cntr' id='exit-bttn' onClick={props.handleCancelKey}>
          Cancel
        </div>
      </div>
    </div>
  )
}

export default Keyboard
