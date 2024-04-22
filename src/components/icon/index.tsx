import React, { HTMLAttributes } from 'react'
import '@/assets/icons/iconfont'
import './index.scss'

type Props = HTMLAttributes<HTMLDivElement> & {
  name: keyof typeof ToyComponent.IconName
}

const Icon: React.FC<Props> = ({ name, ...props}) => {
  const svgName = `#icon-${name}`

  return (
    <div { ...props } className={`icon-container ${props.className}`}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={svgName}></use>
      </svg>
    </div>
  )
}

export default Icon
