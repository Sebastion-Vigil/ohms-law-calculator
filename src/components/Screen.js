import React, { useEffect } from 'react'

import Keyboard from './Keyboard.js'

import '../css/Screen.css'

const Screen = props => {
  useEffect(() => {
    // console.log('Screen useEffect invoked')
  }, [props])

  return (
    <div className='screen'>
      <div className='title-bar'>
        <div className='title'>{props.currentTitle}</div>
        <div className='title-display'>{props.display}</div>
      </div>
      {props.values
        .filter(val => isNaN(parseInt(val)))
        .map((val, i) => {
          return (
            <div
              key={i}
              className='user-select-value'
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
          handleNegIntKey={props.handleNegIntKey}
          handleCancelKey={props.handleCancelKey}
        />
      ) : null}
    </div>
  )
}

export default Screen
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
