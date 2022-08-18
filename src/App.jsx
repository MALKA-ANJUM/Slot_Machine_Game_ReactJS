import React from 'react'
import './index'
import Slot from './Slot'



const App = () => {
  return (
    <>
      <h1> 🎰  Welcome to  <span>Slot Machine Game 🎰</span> </h1>
      <div className='slot_machine'>
        <Slot x = '😄' y = '😄' z = '😄' />
        <Slot x = '🍎' y = '🍔' z = '🍎' />
        <Slot x = '🍊' y = '🍔'z = '🍊' />
        <Slot x = '🐈' y = '🍔' z = '🐈' />
        <Slot x = '🍔' y = '🍔' z = '🍔' />
      </div>
    </>
  )
}

export default App

