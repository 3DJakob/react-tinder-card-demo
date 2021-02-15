import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'
import CardDeck from './components/CardDeck'

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
	<CardDeck />
	</div>
    )
  }
}

export default App
