import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../../src/app.js'

class TestApp extends React.Component {
  render () {
    return (
      <div>
        <Button title='test button' onClick={() => console.log('testing')} />
      </div>
    )
  }
}

ReactDOM.render(<TestApp />, document.getElementById('app'))
