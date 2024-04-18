import React, { HTMLAttributes } from 'react'
import './index.scss'

type Size = Omit<'large' | 'small' | 'mini', 'mini' & 'small'>

interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: `${ToyComponent.BaseTypes}`
  size?: Size
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className={`toy-button ${props.size} ${props.type}`}>
      { props.children }
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  size: 'middle'
}

export default Button
