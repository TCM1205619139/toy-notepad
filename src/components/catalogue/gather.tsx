import React, { HTMLAttributes, useState } from 'react'
import { Icon } from '@/components'
import Detail from '@/components/catalogue/detail'

import './gather.scss'

type HTMLDivElementAttributes = HTMLAttributes<HTMLDivElement>

type Props = HTMLDivElementAttributes & {
  gather: ToyComponent.CatalogueItem
}

const Gather: React.FC<Props> = (props) => {
  const [gather, setGather] = useState<ToyComponent.CatalogueItem>(props.gather)
  const switchOpen = (item: ToyComponent.CatalogueItem) => {
    setGather({
      ...item,
      open: !item.open
    })
  }

  return (
    <section className="gather-container" { ...props }>
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
      {
        gather.open && (
          <div className="details">
            {
              (gather.children || []).map(detail => {
                return <Detail key={detail.key} detail={detail} />
              })
            }
          </div>
        )
      }
    </section>
  )
}

export default Gather
