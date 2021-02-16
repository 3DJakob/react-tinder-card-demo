import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'

// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import ReactModal from 'react-modal';

import FreshCut from '../data/FreshCut'

var db = require('../data/prof.json').profiles
console.log(db)

function CardDeck () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()
  const [freshCuts, setFreshCuts] = useState([])
  const [showExpanded, setShowExpanded] = useState(false);
  const [profID, setProfID] = useState(0);

  useEffect(() => {
      // early return if we've already fetched fresh cuts, otherwise we'll create an infinite loop
      if (freshCuts.length != 0) return;

      var cuts = [];
      firebase.database().ref("users").orderByKey().on("value", function(snapshot) {
          var users = snapshot.toJSON();
          for (var uuid in users) {
              var u = users[uuid];
              cuts.push(new FreshCut(uuid, u.username, u.city, u.state, u.company, u.bio));
          }
          console.log("Fetched the following users: " + JSON.stringify(cuts));
          setFreshCuts(cuts);
      });
  })

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  function clickMore(char){
    setShowExpanded(true);
    setProfID(char.id)
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
              <h1>{freshCuts.length != 0 && freshCuts[0].username}</h1>
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
      <br/>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default CardDeck
