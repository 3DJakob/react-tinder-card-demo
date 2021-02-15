import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

import SignInScreen from './components/SignInScreen'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showexpanded: false
    };
  }
  
  
  render() {
    return (
      <div className='app'>
        <SignInScreen />
      </div>
    )
  }
}

export default App
