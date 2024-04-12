import React, { ReactNode } from 'react'
import { Tree } from 'antd'
import type { TreeDataNode } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'

const Gather: React.FC<TreeDataNode> = (detail: TreeDataNode) => {
  const Content = () => (
    <div className="detail-container">
      <FileTextOutlined/>
      <span>{ detail.title as ReactNode }</span>
    </div>
  )

  return (
    <Tree.TreeNode title={Content} key={detail.key}></Tree.TreeNode>
  )
}

export default Gather
