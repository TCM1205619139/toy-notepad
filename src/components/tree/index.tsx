import React, { HTMLAttributes, useMemo } from 'react'
import TreeItem from './tree-item'
import { createNode } from '@/components/tree/create-node'
import './index.scss'

type Props = HTMLAttributes<HTMLDivElement> & {
  data: any[],
  defaultExpandAll: boolean
}

const Tree: React.FC<Props> = ({
  data,
  defaultExpandAll = false,
  ...props
}) => {
  const nodes = useMemo(() => {
    return data.map(item => {
      return createNode(item)
    })
  }, [data])

  return (
    <div className="toy-tree" {...props}>
      {
        nodes.map(node => {
          return <TreeItem key={node.key} node={node} />
        })
      }
    </div>
  )
}

export default Tree
