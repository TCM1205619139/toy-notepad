import React from 'react'
import ReactDom from 'react-dom/client'
import { Divider, Catalogue } from '@/components'
import './index.scss'

import ToyEditor from '@/components/toy-editor'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="content">
        <Catalogue />
        <Divider direction="vertical" style={{ margin: '0 6px' }} ></Divider>
        <ToyEditor/>
      </div>
    </div>
  )
}

ReactDom.createRoot(document.getElementById('app') as HTMLDivElement).render(<App/>)
