import React from 'react'

import './IconButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconButton(props) {
  return (
    <button className='IconButton-Container' onClick={props.onClick}>
        <FontAwesomeIcon icon={props.icon} />
    </button>
  )
}

export default IconButton