import React, { HTMLAttributes, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Icon } from '@/components'
import Detail from '@/components/catalogue/detail'

import './gather.scss'

type HTMLDivElementAttributes = HTMLAttributes<HTMLDivElement>

type Props = HTMLDivElementAttributes & {
  gather: ToyComponent.CatalogueItem
}

const Gather: React.FC<Props> = ({ gather: propsGather, ...props }) => {
  const [gather, setGather] = useState<ToyComponent.CatalogueItem>(propsGather)
  const switchOpen = (item: ToyComponent.CatalogueItem) => {
    setGather({
      ...item,
      open: !item.open
    })
  }

  return (
    <section { ...props } className="gather-container">
      <div
        className="title-container"
        onClick={() => switchOpen(gather)}
      >
        <Icon
          name='arrow-down-filling'
          className={`arrow-filling ${gather.open ? 'down' : 'right'}`}
        />
        <span className="title">{ gather.title }</span>
      </div>
      <CSSTransition
        in={gather.open}
        timeout={500}
        className="spread"
        unmountOnExit
      >
        <div className="details">
          {
            (gather.children || []).map(detail => {
              return <Detail key={detail.key} detail={detail} />
            })
          }
        </div>
      </CSSTransition>
    </section>
  )
}

export default Gather
