import React from 'react'
// divider class name needs 2 b changed later, k?
import '../css/Screen.css'

const Screen = props => {
//   useEffect(() => {
//       console.log('hola!')
//   }, [props])
  return (
    <div className='screen' >
      <div className='title'>{props.titles[props.currentTitle]}</div>
      {
          props.renderedValIndexes.map((rValIndex, i) => {
              return (
                <div key={i} className='user-select-value'>
                <div className='value-name'>{props.values[rValIndex]}</div>
                <div className='divider'></div>
                <div className='user-select-button' onClick={props.handleUser}></div>
              </div>
              )
          })
      }
    </div>
  )
}

export default Screen
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
