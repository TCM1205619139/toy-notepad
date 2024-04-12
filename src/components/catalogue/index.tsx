import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Tree, Space, Divider, Button } from 'antd'
import type { TreeDataNode } from 'antd'
import Gather from '@/components/catalogue/gather'
import './index.scss'

const Catalogue: React.FC = () => {
  const [gathers, setGathers] = useState<TreeDataNode[]>([
      {
        title: '工作日志',
        key: '工作日志',
        children: [
          {
            title: '2024年3月11日工作日志',
            key: '0-0-0-0',
          }
        ]
      },
    {
      title: '请假记录',
      key: '请假记录',
      children: [
        {
          title: '2024年4与12日请假记录',
          key: '0-0-0-0',
        }
      ]
    }
    ]
  )
  const [defaultExpandedKeys] = useState(() => ['0-0'])

  const onSelect = () => {

  }

  return (
    <section className="catalogue-container">
      <Space>
        <Button type="text" size="small" icon={<PlusOutlined />} >add a section</Button>
      </Space>
      <Divider style={{ margin: '6px 0' }}/>
      <Tree
        defaultExpandedKeys={defaultExpandedKeys}
        blockNode
        showIcon
      >
        {
          gathers.map(gather => {
            return Gather(gather)
          })
        }
      </Tree>
    </section>
  )
}

export default Catalogue
