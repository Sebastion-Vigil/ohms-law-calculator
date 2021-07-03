import React, { useEffect } from 'react'

import Answer from './Answer.js'
import Keyboard from './Keyboard.js'

import '../css/Screen.css'

const Screen = props => {
  useEffect(() => {
    // console.log('Screen useEffect invoked')
  }, [props])

  return (
    <div className='screen'>
      <div className='title'>{props.currentTitle}</div>
      {props.values.map((val, i) => {
        return (
          <div
            key={i}
            className='user-select-value'
            id={val}
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
      {props.answer.map((a, i) => {
        return <Answer key={i} answer={a} />
      })}
      {props.keyboardActive ? <Keyboard tst={`Ohms`} /> : null}
    </div>
  )
}

export default Screen
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
