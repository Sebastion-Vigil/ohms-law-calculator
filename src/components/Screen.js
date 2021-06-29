import React, { useEffect } from 'react'
// divider class name needs 2 b changed later, k?
import '../css/Screen.css'

const Screen = props => {
  useEffect(() => {
    console.log('hola!')
  }, [props.excludedValue])
  const func = () => {
      console.log(props.renderedVals)
  }
  return (
    <div className='screen' >
      <div className='title'>{props.currentTitle}</div>
      {
          props.renderedVals[0].map((rVal, i) => {
              return (
                <div key={i} className='user-select-value'>
                <div className='value-name'>{props.values[rVal]}</div>
                <div className='divider'></div>
                <div className='user-select-button'></div>
              </div>
              )
          })
      }
    </div>
  )
}

export default Screen


// {props.values.map((val, i) => {
//     return (
//       <div key={i} className='user-select-value'>
//         <div className='value-name'>{val}</div>
//         <div className='divider'></div>
//         <div className='user-select-button'></div>
//       </div>
//     )
//   })}

{
  /* <div>
  {names.filter(name => name.includes('J')).map(filteredName => (
    <li>
      {filteredName}
    </li>
  ))}
</div> */
}
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
