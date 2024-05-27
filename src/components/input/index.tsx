import React, { HTMLAttributes } from 'react'

type InputType = 'text'

type Props = HTMLAttributes<HTMLInputElement> & {
  // type: InputType
}
const Input: React.FC<Props> = ({
  ...props
}) => {
  return (<>
    <input autoFocus={true} type="text" {...props}/>
  </>)
}

export default Input
