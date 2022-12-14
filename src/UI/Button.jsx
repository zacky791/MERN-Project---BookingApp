import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div>
      <button className={`${'btn'} ${props.className} `}>{props.children}</button>
    </div>
  )
}

export default Button
