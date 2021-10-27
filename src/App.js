import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

import Advanced from './examples/Advanced'
import Simple from './examples/Simple'
import RestoreCard from './examples/RestoreCard'

const modes = {
  simple: 'simple',
  advanced: 'advanced',
  restoreCard: 'restoreCard',
}

function App () {
  const [mode, setMode] = useState(modes.simple)

  return (
    <div className="app">
      {mode === modes.simple && <Simple />}
      {mode === modes.advanced && <Advanced />}
      {mode === modes.restoreCard && <RestoreCard />}
      <div className="row">
        <div>
          <p style={{ color: "#fff" }}>Show Simple example</p>
          <Switch
            checked={mode === modes.simple}
            onChange={() => setMode(modes.simple)}
          />
        </div>
        <div>
          <p style={{ color: "#fff" }}>Show Advanced example</p>
          <Switch
            checked={mode === modes.advanced}
            onChange={() => setMode(modes.advanced)}
          />
        </div>
        <div>
          <p style={{ color: "#fff" }}>Show Restore Card example</p>
          <Switch
            checked={mode === modes.restoreCard}
            onChange={() => setMode(modes.restoreCard)}
          />
        </div>
      </div>
    </div>
  );
}

export default App
