import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

import Advanced from './Examples/Advanced'
import Simple from './Examples/Simple'

function App () {
  const [showAdvanced, setShowAdvanced] = useState(true)
  console.log(showAdvanced)

  return (
    <div className='app'>
      {showAdvanced ? <Advanced /> : <Simple />}
      <div className='row'>
        <p style={{ color: '#fff' }}>Show advanced example</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
      </div>
    </div>
  )
}

export default App
