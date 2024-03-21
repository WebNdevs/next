import React from 'react';
import '../css/button.css'

const Button = (props) => {
  return (
    <>
      <div className="buttons-page">
        <button className={props.class} >{props.content}</button>
      </div>
    </>
  )
}

export default Button;