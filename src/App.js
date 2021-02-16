import React, { useState } from 'react'
import './App.css'
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
        <h1>Tinderloin</h1>
        <SignInScreen />
      </div>
    )
  }
}

export default App
