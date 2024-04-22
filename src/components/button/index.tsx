import React, { HTMLAttributes } from 'react'
import './index.scss'

type HTMLButtonAttributes = HTMLAttributes<HTMLButtonElement>

type Props = HTMLButtonAttributes & {
  type?: `${ToyComponent.BaseTypes}`
  size?: `${ToyComponent.Sizes}`
}

const Button: React.FC<Props> = ({ size, type, ...props }) => {
  return (
    <button{ ...props } className={`toy-button ${size} ${type}`}>
      { props.children }
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  size: 'small'
}

export default Button
