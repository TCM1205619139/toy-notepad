import React, { HTMLAttributes } from 'react'
import '@/assets/icons/iconfont'
import './index.scss'

type Props = HTMLAttributes<HTMLDivElement> & {
  name: keyof typeof ToyComponent.IconName
  size?: `${ToyComponent.Sizes}`
}

const Icon: React.FC<Props> = ({
 size = 'middle',
 name,
 ...props
}) => {
  const svgName = `#icon-${name}`

  return (
    <div { ...props } className={`toy-icon ${props.className ?? ''} ${size ?? ''}`}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={svgName}></use>
      </svg>
    </div>
  )
}

export default Icon
