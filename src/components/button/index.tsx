import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: `${ToyComponent.BaseTypes}`
  size?: `${ToyComponent.Sizes}`
}

const Button: React.FC<Props> = (props: Props) => {
  const size: `${ToyComponent.Sizes}` = 'small'
  return (
    <button className={`button-container ${props.size} ${props.type}`}>11111</button>
  )
}

// Button.defaultProps = {
//   type: ToyComponent.BaseTypes.DEFAULT,
//   size: ToyComponent.Sizes.MIDDLE
// }

export default Button
