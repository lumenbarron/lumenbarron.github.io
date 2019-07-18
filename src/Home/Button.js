import React from 'react';

const Button = (props) => {
  return <button
    variant="primary"
    className={props.className}
    name={props.name}
    onClick={props.onClick}
    id={props.id}>
    {props.label}
  </button>

}

export default Button