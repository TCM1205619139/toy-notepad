import React, { useState } from 'react'
import './index.scss'

enum Direction {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

type Props = {
  direction: `${Direction}`
} & React.HtmlHTMLAttributes<HTMLDivElement>

const Divider: React.FC<Props> = (props) => {
  const containerClass = `divider divider-${props.direction}`

  return (
    <div className={containerClass}>

    </div>
  )
}

export default Divider
