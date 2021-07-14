import React, { useEffect } from 'react'

import Keyboard from './Keyboard.js'

import '../css/flexbox.css' // base flex styling
import '../css/Screen.css'

const Screen = props => {
  useEffect(() => {
    // console.log("letterMap: ", props.letterMap)
  }, [props])

  return (
    <div className='screen flex-col-spc-evn-cntr'>
      <div className='title-bar flex-col-spc-evn-cntr'>
        <div className='title flex-row-cntr-cntr'>{props.currentTitle}</div>
        <div className='title-display flex-row-flx-end-cntr'>{props.display}</div>
      </div>
      {props.values
        .filter(val => isNaN(parseInt(val)))
        .map((val, i) => {
          return (
            <div
              key={i}
              className='user-select-value flex-row-cntr-cntr'
              onClick={() => {
                props.handleUser(i)
              }}
              style={{
                visibility: props.bttnVisibility[i]
              }}
            >
              <div className='value-name flex-col-cntr-cntr'>{val}</div>
              <div
                className='value-letter flex-col-cntr-cntr'
              >{'(' + props.letterMap[val] + ')'}</div>
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
        <div className='reset-button flex-col-cntr-cntr' onClick={props.handleResetButton}>
          Reset
        </div>
      ) : null}
    </div>
  )
}

export default Screen
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
