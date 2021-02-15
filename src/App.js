import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

import SignInScreen from './components/SignInScreen'

function App () {

  return (
    <div className='app'>
      <SignInScreen />
    </div>
  )
}

export default App
