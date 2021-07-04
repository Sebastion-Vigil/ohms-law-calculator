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
        <div className='title-display'></div>
      </div>
      {props.values.map((val, i) => {
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
      {props.keyboardActive ? <Keyboard toggle={props.toggleKeyboard} handleKeyboardInput={props.handleKey} /> : null}
    </div>
  )
}

export default Screen
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
