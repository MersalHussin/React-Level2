import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name = "Mersal"
  const changeName = () => {
    console.log("I'm Mersal")
    name = "Mohamed"  
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={changeName}>Click Me</button>
    </>
  )
}

export default App
