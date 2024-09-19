import React, { HTMLAttributes, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import { Button, ConfigProvider } from 'antd'
import { PlusOutlined, EditOutlined } from '@ant-design/icons'
import { Icon } from '@/components'
import { useSpreadAnimation } from '@/composables/use-animation'
import { createNode } from '@/components/tree/create-node'
import './tree-item.scss'

type Props = HTMLAttributes<HTMLDivElement> & {
  node: ToyComponent.TreeNode<ToyNote.Profile | ToyNote.Gather>
}

const TreeItem: React.FC<Props> = ({
  node,
  ...props
}) => {
  const [nodeRef, setNodeRef] = useState(node)
  const transitionWrapper = useRef<HTMLDivElement>(null)
  const { onExited, onExit, onExiting, onEntered, onEntering, onEnter } = useSpreadAnimation(transitionWrapper)
  const switchOpen = () => {
    setNodeRef({
      ...nodeRef,
      isOpen: !nodeRef.isOpen
    })
  }

  const addProfile = () => {

  }

  const RenderGatherContent = () => {
    return (
      <div className="title-content">
        <span className="title" onClick={switchOpen}>{nodeRef.label}</span>
        <div className="actions">
          <ConfigProvider wave={{ disabled: true }}>
            <Button size="small" icon={<PlusOutlined/>} style={{ border: 0 }} onClick={addProfile} />
            <Button size="small" icon={<EditOutlined/>} style={{ border: 0 }} />
          </ConfigProvider>
        </div>
      </div>
    )
  }

  const RenderProfileContent = () => {
    return (
      <div className="title-content">
        <span className="title" onClick={switchOpen}>{nodeRef.label}</span>
        <div className="actions">
          <ConfigProvider wave={{ disabled: true }}>
            <Button size="small" icon={<EditOutlined/>} style={{ border: 0 }} />
          </ConfigProvider>
        </div>
      </div>
    )
  }

  // @ts-ignore
  // @ts-ignore
  return (
    <div className="toy-tree-item" {...props}>
      <div className="title-container">
        {
          !nodeRef.isLeaf && <Icon
            name="arrow-down-filling"
            className={`arrow-filling ${nodeRef.isOpen ? 'down' : 'right'}`}
            size="mini"
            onClick={switchOpen}
          />
        }
        <RenderGatherContent/>
      </div>
      <Transition
        in={nodeRef.isOpen}
        nodeRef={transitionWrapper}
        timeout={100}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
        unmountOnExit
      >
        <div className="child-wrapper" ref={transitionWrapper}>
          {
            ((nodeRef.data as NodeFor<ToyNote.Gather>).children || []).map((child: ToyNote.Profile) => {
              const childNode = createNode(child)
              return <TreeItem key={childNode.key} node={childNode} />
            })
          }
        </div>
      </Transition>
    </div>
  )
}

export default TreeItem
