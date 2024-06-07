import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './mood.css'

function App() {
  const [name , setName] = useState("Mersal") 
  const [age , setAge] = useState(20) 
  const [count , setCount] = useState(0)
  const [mood , setMood] = useState("light")
  
  const nameChange = () => {
  if (name == "Mersal" ){
      setName("Hussin")
  }else{
    setName("Mersal")
  }
}



  const counter = () => {
    setCount(count+1);
  }
  return (
    <div className={`App ${mood}`}>
      <div className='buttons'>
        <button  onClick={() => setMood("")}>Light</button>
        <button onClick={() => setMood("dark")}>Dark</button>
        <button onClick={() => setMood("pink")}>Pink</button>
        <button onClick={() => setMood("gray")}>Gray</button>
        <button onClick={() => setMood("green")}>Green</button>
        <h1>Hello {name}</h1>
        <button onClick={nameChange}>Click Me</button>
        <h1>My Age Is {age}</h1>
        <button onClick={() => {setAge(21)}}>Click Me</button>
        <br />
        <br />
        <br />
        <br />
        <button onClick={counter}>Count Is {count}</button>
      </div>
    </div>

  )
}

export default App
