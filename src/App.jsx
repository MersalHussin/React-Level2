import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name , setName] = useState("Mersal") 
  const [age , setAge] = useState(20) 
  const [count , setCount] = useState(0) 
  
  const counter = () => {
    setCount(count+1);
  }
  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={() => setName("Ahmed")}>Click Me</button>
      <h1>My Age Is {age}</h1>
      <button onClick={() => setAge(21)}>Click Me</button>
      <br />
      <br />
      <br />
      <br />
      <button onClick={counter}>Count Is {count}</button>
    </>
  )
}

export default App
