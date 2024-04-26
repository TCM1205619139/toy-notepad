import React, { HTMLAttributes, ReactNode } from 'react'
import './index.scss'

type HTMLButtonAttributes = HTMLAttributes<HTMLButtonElement>

type Props = HTMLButtonAttributes & {
  type?: `${ToyComponent.BaseTypes}`
  size?: `${ToyComponent.Sizes}`,
  icon?: ReactNode
}

const Button: React.FC<Props> = ({ size, type, icon, ...props }) => {
  const isIconButton = !!icon

  return (
    <button{ ...props } className={`toy-button ${size} ${type} ${isIconButton ? 'icon-button' : ''}`}>
      { icon }
      { props.children }
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  size: 'small'
}

export default Button
