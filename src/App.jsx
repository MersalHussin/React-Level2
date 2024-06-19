import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./mood.css";
import Toggle from "../components/Toggle";
import { Link } from "react-router-dom";

const initialData = {
  name: "Mersal",
  age: 20,
  startCount: 0,
  theme: "",
};




const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
    case "COUNTER":
      return { ...state, startCount: action.newValue };
    case "TOGGLE":
      return { ...state, theme: action.newValue };
    case "TOGGLE_N":
      return { ...state, theme: action.newValue};


    default:
      return state;
  }
};

function App() {
  const [allData, dispatch] = useReducer(reducer, initialData);
  const [toggle , settoggle] = useState("")
  const toggleFun = () => {
    (toggle == "") ? settoggle("dark")  : settoggle("")
  }
  return (
    <>
    <div className={`App ${allData.theme}`}>
    <Link to ='/page2' >To Page 2</Link>
      <button onClick={()=>{
        dispatch({ type: "TOGGLE", newValue: allData.theme == "" ? "dark" : "" });
      }}>Toggle Menu</button>

      <br />
      <br />
      <div className='buttons'>
        <button  onClick={() =>{
          dispatch({ type: "TOGGLE_N", newValue: "" })
        }}>Light</button>
        <button onClick={() => {
          dispatch({ type: "TOGGLE_N", newValue: "dark" })
        }}>Dark</button>
        <button onClick={() => {
          dispatch({ type: "TOGGLE_N", newValue: "pink" })
        }}>Pink</button>
        <button onClick={() => {
          dispatch({ type: "TOGGLE_N", newValue: "green" })
        }}>Green</button>
        <button onClick={() => {
          dispatch({ type: "TOGGLE_N", newValue: "gray" })
        }}>Gray</button>
      </div>
      <br />
      <Toggle func={toggleFun}/>

      <br />
      <h1>Hello {allData.name}</h1>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_NAME", newValue: "Hussin" });
        }}
      >
        Click Me
      </button>
      
      <br />
      <br />
      <h1>My Age Is {allData.age}</h1>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_AGE", newValue: "21" });
        }}
      >
        Click Me
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "COUNTER", newValue:(allData.startCount + 1) });
        }}
      >
        Count Is {allData.startCount}{" "}
      </button>
    </div>
    </>
  );
}

export default App;
