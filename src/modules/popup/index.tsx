import React from 'react'
import ReactDom from 'react-dom/client'
import { Divider, Catalogue, Button } from '@/components'
import './index.scss'

import ToyEditor from '@/components/toy-editor'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="content">
        <section className="catalogue-wrapper">
          <div className="actions-group">
            <Button size="mini" type="default" >增加文件夹</Button>
          </div>
          <Divider style={{ margin: '8px 0' }} direction="horizontal" />
          <Catalogue />
        </section>
        <Divider direction="vertical" style={{ margin: '0 6px' }} />
        <ToyEditor/>
      </div>
    </div>
  )
}

ReactDom.createRoot(document.getElementById('app') as HTMLDivElement).render(<App/>)
