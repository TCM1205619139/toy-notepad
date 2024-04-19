import React, { HTMLAttributes } from 'react'
import './index.scss'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: `${ToyComponent.BaseTypes}`
  size?: `${ToyComponent.Sizes}`
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`toy-button ${props.size} ${props.type}`}
      {...props as HTMLAttributes<HTMLButtonElement>}
    >
      { props.children }
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  size: 'small'
}

export default Button
