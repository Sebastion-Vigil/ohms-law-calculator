import React, { useState, useEffect } from 'react'

import Answer from './Answer.js'
import Keyboard from './Keyboard.js'

import '../css/Screen.css'

const Screen = props => {

  useEffect(() => {
    // console.log('Screen useEffect invoked')
    // console.log('answer in Screen: ', props.answer)
    // console.log(keyboardActive)
  }, [props])

  const [keyboardActive, toggleKeyboard] = useState('none')

  return (
    <div className='screen'>
      <div className='title'>{props.currentTitle}</div>
      {props.renderedValIndexes.map((rValIndex, i) => {
        return (
          <div key={i} className='user-select-value'>
            <div className='value-name'>{props.values[rValIndex]}</div>
            <div className='divider'></div>
            <div
              className='user-select-button'
              onClick={() => {
                props.handleUser(rValIndex)
              }}
            ></div>
          </div>
        )
      })}
      {
        props.answer.map((ans, i) => {
          return (
            <Answer
              key={i}
              ans={props.answer[i]}
            />
          )
        })
      }
      <Keyboard />
    </div>
  )
}

export default Screen
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
