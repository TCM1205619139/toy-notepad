import React from 'react'
import ReactDom from 'react-dom/client'

class App extends React.Component {
  public render() {
    return (
      <div className="App">option</div>
    )
  }
}

ReactDom.createRoot(
  document.getElementById('app') as Element
).render(<App/>)