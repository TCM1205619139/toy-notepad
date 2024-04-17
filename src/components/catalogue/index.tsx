import React, { useState } from 'react'
import { Divider, Button } from '@/components'
// import Gather from '@/components/catalogue/gather'
import './index.scss'

const Catalogue: React.FC = () => {
  const [gathers, setGathers] = useState<any[]>([
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
      <Button size="small" >add a section</Button>
      <Divider style={{ margin: '6px 0' }} direction="horizontal"/>
      {/*<Tree*/}
      {/*  defaultExpandedKeys={defaultExpandedKeys}*/}
      {/*  blockNode*/}
      {/*  showIcon*/}
      {/*>*/}
      {/*  {*/}
      {/*    gathers.map(gather => {*/}
      {/*      return Gather(gather)*/}
      {/*    })*/}
      {/*  }*/}
      {/*</Tree>*/}
    </section>
  )
}

export default Catalogue
