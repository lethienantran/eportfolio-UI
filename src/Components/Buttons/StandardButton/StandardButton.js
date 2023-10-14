import React from 'react'

import './StandardButton.css'

function StandardButton(props) {
  return (
    <button className='StandardButton-Container' onClick={props.onClick}>
        <p className='heading-4'>{props.title}</p>
    </button>
  )
}

export default StandardButton