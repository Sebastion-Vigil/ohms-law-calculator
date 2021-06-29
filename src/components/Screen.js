import React from 'react'

import '../css/Screen.css'

const Screen = (props) => {
    const func = () => {
        console.log(props)
    }
    return (
        <div className='screen' onClick={func}>
            <div className='title'>{props.titles[0]}</div>
            {
                props.values.map((val, i) => {
                    return (
                        <div key={i} className='user-select-value'>{val}</div>
                    )
                })
            }
        </div>
    )
}

export default Screen