import React from 'react'
import ReactDom from 'react-dom/client'
import { Divider } from 'antd'
import './index.scss'

import ToyEditor from '@/components/toy-editor'
import Catalogue from '@/components/catalogue'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="content">
        <Catalogue/>
        <Divider type="vertical" style={{ height: '100%' }} />
        <ToyEditor/>
      </div>
    </div>
  )
}

ReactDom.createRoot(document.body).render(<App/>)
