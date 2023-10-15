import React from 'react'

import './StandardTextAreaInputField.css'

function StandardTextAreaInputField(props) {
  const className=`${props.className} StandardTextAreaInputField`

  return (
    <textarea placeholder={props.placeholder} className={className} value={props.value}/>
  )
}

export default StandardTextAreaInputField