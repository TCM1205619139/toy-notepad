import React, { HTMLAttributes, useState } from 'react'
import { Divider, Button } from '@/components'
import Gather from '@/components/catalogue/gather'
import './index.scss'

type Props = HTMLAttributes<HTMLDivElement>

const Catalogue: React.FC<Props> = (props) => {
  const [gathers, setGathers] = useState<ToyComponent.CatalogueItem[]>([
      {
        title: '工作日志',
        key: '工作日志',
        children: [
          {
            title: '2024年3月11日工作日志',
            key: '0-0-0-0',
          },
          {
            title: '2024年3月12日工作日志',
            key: '0-0-0-1',
          },
          {
            title: '2024年3月13日工作日志',
            key: '0-0-0-2',
          },
          {
            title: '2024年3月14日工作日志',
            key: '0-0-0-3',
          },
          {
            title: '2024年3月15日工作日志',
            key: '0-0-0-4',
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

  return (
    <section {...props} className="catalogue-container">
      <div className="actions-group">
        <Button size="mini" type="default" >增加文件夹</Button>
      </div>
      <Divider style={{ margin: '8px 0' }} direction="horizontal"></Divider>
      <section className="catalogue">
        {
          gathers.map(gather => {
            return <Gather key={gather.key} gather={gather} />
          })
        }
      </section>
    </section>
  )
}

export default Catalogue
