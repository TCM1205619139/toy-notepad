import React, { StrictMode, useState } from 'react'
import ReactDom from 'react-dom/client'
import { Divider, Catalogue, Button } from '@/components'
import './index.scss'

import ToyEditor from '@/components/toy-editor'
import { generateEmptyGather } from '@/components/catalogue/use-base'

const App: React.FC = () => {
  const [catalogues, setCatalogues] = useState<ToyComponent.CatalogueItem[]>([
    {
      title: '工作日志',
      key: '工作日志',
      children: [
        {
          title: '2024年3月11日工作日志',
          key: '0-0-0-0'
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
  ])

  const addGather = () => {
    setCatalogues([...catalogues, generateEmptyGather()])
  }

  return (
    <StrictMode>
      <div className="app">
        <div className="content">
          <section className="catalogue-wrapper">
            <div className="actions-group">
              <Button size="mini" type="default" onClick={addGather}>增加文件夹</Button>
            </div>
            <Divider style={{ margin: '8px 0' }} direction="horizontal" />
            <Catalogue data={catalogues} />
          </section>
          <Divider direction="vertical" style={{ margin: '0 6px' }} />
          <ToyEditor/>
        </div>
      </div>
    </StrictMode>
  )
}

ReactDom.createRoot(document.getElementById('app') as HTMLDivElement).render(<App/>)
