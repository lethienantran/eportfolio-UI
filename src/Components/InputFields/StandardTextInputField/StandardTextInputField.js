import React from 'react'

import './StandardTextInputField.css'

function StandardTextInputField(props) {
  const className=`${props.className} StandardTextInputField`
  return (
    <input type='text' placeholder={props.placeholder} className={className}/>
  )
}

export default StandardTextInputField