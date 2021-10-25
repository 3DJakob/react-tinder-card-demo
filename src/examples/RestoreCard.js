import React, { useState, useMemo, useRef } from 'react'
import TinderCard from '../react-tinder-card/index'
//import TinderCard from 'react-tinder-card'

const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg'
  }
]

function RestoreCard () {
  const [currentIndex, setCurrentIndex] = useState(db.length-1)
  const [lastDirection, setLastDirection] = useState()
  //used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  console.log("currentIndex", currentIndex)

  const childRefs = useMemo(
    () => Array(db.length).fill(0).map(i => React.createRef()), []
  )

  const _setCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = () => currentIndex < db.length - 1
  
  const canSwipe = () => currentIndex > 0


  const swiped = (direction, nameToDelete) => {
    console.log('hiding: ' + nameToDelete)
    setLastDirection(direction)
    _setCurrentIndex(currentIndex - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    //handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current === idx && childRefs[idx].current.restoreCard()
  }

  const swipe = (dir) => {
    if (currentIndex>=0 && currentIndex<db.length) {
      childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  const goBack = () => {
    if (!canGoBack()) return
    const newIndex = currentIndex + 1;
    _setCurrentIndex(newIndex)
    childRefs[newIndex].current.restoreCard()
  }


  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {db.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name, index)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      <div className='buttons'>
        {canSwipe() && <button onClick={() => swipe('left')}>Swipe left!</button>}
        {canSwipe() && <button onClick={() => swipe('right')}>Swipe right!</button>}
        {canGoBack() && <button onClick={() => goBack()}>Go Back!</button>}
      </div>
      {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get Restore Card button visible!</h2>}
    </div>
  )
}

export default RestoreCard
