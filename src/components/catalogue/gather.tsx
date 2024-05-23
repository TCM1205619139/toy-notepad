import React, {
  HTMLAttributes,
  useState,
  useRef
} from 'react'
import { Transition } from 'react-transition-group'
import { Icon, Button } from '@/components'
import Detail from '@/components/catalogue/detail'
import { useSpreadAnimation } from '@/components/catalogue/use-animation'

import './gather.scss'

type HTMLDivElementAttributes = HTMLAttributes<HTMLDivElement>

type Props = HTMLDivElementAttributes & {
  gather: ToyComponent.CatalogueItem
}

const Gather: React.FC<Props> = ({gather: propsGather, ...props}) => {
  const [gather, setGather] = useState<ToyComponent.CatalogueItem>(propsGather)
  const detail = useRef<HTMLDivElement>(null)
  const { onExited, onExit, onExiting, onEntered, onEntering, onEnter } = useSpreadAnimation(detail)

  const switchOpen = (item: ToyComponent.CatalogueItem) => {
    setGather({
      ...item,
      open: !item.open
    })
  }

  return (
    <section {...props} className="gather-container">
      <div
        className="title-container"
        onClick={() => switchOpen(gather)}
      >
        <Icon
          name="arrow-down-filling"
          className={`arrow-filling ${gather.open ? 'down' : 'right'}`}
          style={{ height: '20px' }}
        />
        <span className="title">{gather.title}</span>
        <div className="actions">
          <Button icon={<Icon name="add" size="mini"></Icon>} size="mini"></Button>
        </div>
      </div>
      <Transition
        in={gather.open}
        nodeRef={detail}
        timeout={100}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
        unmountOnExit
      >
        <div className="details" ref={detail}>
          {
            (gather.children || []).map(detail => {
              return <Detail key={detail.key} detail={detail}/>
            })
          }
        </div>
      </Transition>
    </section>
  )
}

export default Gather
