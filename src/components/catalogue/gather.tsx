import React, {
  HTMLAttributes,
  useState,
  useRef
} from 'react'
import { Transition } from 'react-transition-group'
import { Icon } from '@/components'
import Detail from '@/components/catalogue/detail'

import './gather.scss'

type HTMLDivElementAttributes = HTMLAttributes<HTMLDivElement>

type Props = HTMLDivElementAttributes & {
  gather: ToyComponent.CatalogueItem
}

const Gather: React.FC<Props> = ({gather: propsGather, ...props}) => {
  const [gather, setGather] = useState<ToyComponent.CatalogueItem>(propsGather)
  const detail = useRef<HTMLDivElement>(null)

  const switchOpen = (item: ToyComponent.CatalogueItem) => {
    setGather({
      ...item,
      open: !item.open
    })
  }

  const onEnter = () => {
    const el = detail.current as HTMLDivElement

    el.dataset.maxHeight = el.clientHeight + 'px'
    el.dataset.overflow = el.style.overflow
    el.style.maxHeight = '0px'
    el.style.overflow = 'hidden'
    el.classList.add('collapse-transition')
  }
  const onEntering = () => {
    const el = detail.current as HTMLDivElement

    setTimeout(() => {
      el.style.maxHeight = el.dataset.maxHeight || ''
    })
  }
  const onEntered = () => {
    const el = detail.current as HTMLDivElement

    el.style.maxHeight = ''
    el.style.overflow = ''
    el.classList.remove('collapse-transition')
  }
  const onExit = () => {
    const el = detail.current as HTMLDivElement

    el.style.maxHeight = el.dataset.maxHeight || ''
    el.style.overflow = 'hidden'
    el.classList.add('collapse-transition')
  }
  const onExiting = () => {
    const el = detail.current as HTMLDivElement

    setTimeout(() => {
      el.style.maxHeight = '0px'
    })
  }
  const onExited = () => {
    const el = detail.current as HTMLDivElement

    el.style.maxHeight = '0px'
    el.style.overflow = ''
    el.classList.remove('collapse-transition')
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
        />
        <span
          className="title">{gather.title}</span>
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
