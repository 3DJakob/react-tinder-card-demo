import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import ReactModal from 'react-modal';
var db = require('../data/prof.json').profiles

console.log(db)

function CardDeck () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

    const [showExpanded, setShowExpanded] = React.useState(false);

    const [profID, setProfID] = React.useState(0);

    function clickMore(char){
	setShowExpanded(true);
	setProfID(char.id)
    }

  return (
      <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Tinderloin</h1>
     
      <div className='cardContainer'>
      {characters.map((character) =>
	  <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
	  <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
	  <h3>{character.name}</h3>
	  <h4 onClick={() => clickMore(character)}>See more</h4>
	  <ReactModal
	  className="Modal"
	  overlayClassName="Overlay"
	  isOpen={showExpanded && profID==character.id}
	  contentLabel="example"
	  >
	  <img className="photo" src={character.url}/>
	  <h2 className="Modal-h2">{character.name}, age</h2>
	  <h3>City</h3>
	  <h3>Favorite Meat</h3>
	  <button onClick={() => setShowExpanded(false)}>Close</button>
	  </ReactModal>
	  </div>
	  
	  </TinderCard>
      )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      </div>
  )
}

export default CardDeck
