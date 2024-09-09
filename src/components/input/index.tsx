import React, { HTMLAttributes } from 'react'

type InputType = 'text'

type Props = HTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = ({
  ...props
}) => {
  return (<input type="text" {...props}/>)
}

export default Input
