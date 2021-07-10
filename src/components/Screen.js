import React, { useEffect } from 'react'

import Keyboard from './Keyboard.js'

import '../css/flexbox.css' // base flex styling
import '../css/Screen.css'

const Screen = props => {
  useEffect(() => {
    // console.log('Screen useEffect invoked')
  }, [props])

  return (
    <div className='screen flex-col-spc-evn-cntr'>
      <div className='title-bar flex-col-cntr-cntr'>
        <div className='title flex-row-cntr-cntr'>{props.currentTitle}</div>
        <div className='title-display flex-row-flx-end-cntr'>{props.display}</div>
      </div>
      {props.values
        .filter(val => isNaN(parseInt(val)))
        .map((val, i) => {
          return (
            <div
              key={i}
              className='user-select-value flex-row-spc-evn-cntr'
              style={{
                visibility: props.bttnVisibility[i]
              }}
            >
              <div className='value-name'>{val}</div>
              <div className='divider'></div>
              <div
                className='user-select-button'
                onClick={() => {
                  props.handleUser(i)
                }}
              ></div>
            </div>
          )
        })}
      {props.keyboardActive ? (
        <Keyboard
          handleEnterKey={props.handleEnterKey}
          handleNumKey={props.handleNumKey}
          handleDecimalKey={props.handleDecimalKey}
          handleBackspaceKey={props.handleBackspaceKey}
          handleClearAllKey={props.handleClearAllKey}
          handleCancelKey={props.handleCancelKey}
        />
      ) : null}
      {props.resetButton ? (
        <div className='reset-button' onClick={props.handleResetButton}>
          Reset
        </div>
      ) : null}
    </div>
  )
}

export default Screen
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
