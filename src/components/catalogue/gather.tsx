import React, {
  HTMLAttributes,
  useState,
  useRef
} from 'react'
import { Transition } from 'react-transition-group'
import { Icon, Button, Input } from '@/components'
import Detail from '@/components/catalogue/detail'
import { useSpreadAnimation } from '@/components/catalogue/use-animation'
import { generateEmptyDetail } from '@/components/catalogue/use-base'

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

  const addDetail = () => {
    const children = gather.children || []
    setGather({
      ...gather,
      open: true,
      children: [
        ...children,
        generateEmptyDetail()
      ]
    })
  }

  const onDeleteDetail = (detail: ToyComponent.CatalogueItem) => {
    const details = gather.children || []
    const index = details.findIndex(item => item.key === detail.key)

    index && details.splice(index, 1)
    setGather({
      ...gather,
      children: details
    })
  }

  const setGatherState = (isEdit: boolean) => {
    setGather({
      ...gather,
      isEdit
    })
  }

  return (
    <section {...props} className="gather-container">
      <div className="title-container">
        <Icon
          name="arrow-down-filling"
          className={`arrow-filling ${gather.open ? 'down' : 'right'}`}
          size="mini"
          onClick={() => switchOpen(gather)}
        />
        <div className="title-content">
          {
            gather.isEdit
            ? <Input
                defaultValue={gather.title}
                onBlur={() => setGatherState(false)}
              />
            : <span
                className="title"
                onClick={() => switchOpen(gather)}
              >{gather.title}</span>
          }
        </div>
        <div className="actions">
          <Button
            icon={<Icon name="edit" size="small"></Icon>}
            size="mini"
            onClick={() => setGatherState(true)}
          ></Button>
          <Button
            icon={<Icon name="add" size="small"></Icon>}
            size="mini"
            onClick={addDetail}
          ></Button>
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
              return <Detail
                key={detail.key}
                detail={detail}
                onDeleteDetail={onDeleteDetail}
              />
            })
          }
        </div>
      </Transition>
    </section>
  )
}

export default Gather
