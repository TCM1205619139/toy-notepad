import React, { HTMLAttributes } from 'react'
import { Icon } from '@/components'
import './detail.scss'

type Props = HTMLAttributes<HTMLDivElement> & {
  detail: ToyComponent.CatalogueItem
}

const Gather: React.FC<Props> = ({ detail, ...props}) => {

  return (
    <section { ...props } className="detail-container">
      <Icon name='file-open' />
      <span className="title">{ detail.title }</span>
    </section>
  )
}

export default Gather
