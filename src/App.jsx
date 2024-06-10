import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./mood.css";
import Toggle from "../components/Toggle";

const initialData = {
  name: "Mersal",
  age: 20,
  startCount: 0,
  theme: "light",
  mood: "",
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
      return { ...state, mood: action.newValue};


    default:
      return state;
  }
};

function App() {
  const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App ${allData.theme}`}>
      <button onClick={()=>{
        dispatch({ type: "TOGGLE", newValue: allData.theme == "" ? "dark" : "" });
      }}>Toggle Menu</button>
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

      <h1>Hello {allData.name}</h1>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_NAME", newValue: "Hussin" });
        }}
      >
        Click Me
      </button>
      <h1>My Age Is {allData.age}</h1>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_AGE", newValue: "21" });
        }}
      >
        Click Me
      </button>
      <br />
      <br />
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
  );
}

export default App;
