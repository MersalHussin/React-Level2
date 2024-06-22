import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./mood.css";
import Toggle from "../components/Toggle";
import { Link } from "react-router-dom";
import {useContext } from "react";
import DataProvider from "./context/Datacontext";


function App() {


  const { name , changeName , age ,changeAge , theme , changeTheme , changeThemeColor , count,Counter} = useContext(DataProvider);

  return (
    <>
    <div className={`App ${theme}`}>
    <Link to ='/page2' >To Page 2</Link>
      <button onClick={()=>{changeTheme(theme == "" ? "dark" : "")}} >Toggle Menu</button>

      <br />
      <br />
      <div className='buttons'>
        <button onClick={()=>{changeThemeColor("")}}>Light</button>
        <button  onClick={()=>{changeThemeColor("dark")}} >Dark</button>
        <button  onClick={()=>{changeThemeColor("pink")}} >Pink</button>
        <button  onClick={()=>{changeThemeColor("green")}} >Green</button>
        <button  onClick={()=>{changeThemeColor("gray")}} >Gray</button>
      </div>
      <br /> 
      {/* <Toggle func={toggleFun}/> */}

      <br />
      <h1>Hello {name} </h1>
      <br />
      <button onClick={()=>{changeName("Hussin")}}> Change Name</button>
      
      <br />
      <br />
      <h1>My Age Is {age} {theme}</h1>
      <br />
      <button onClick={()=> {changeAge(21)}}> Change Age </button>
      <br />
      <br />
      <button onClick={()=>{Counter(count + 1)}}>Count Is {count}</button>
    </div>
    </>
  );
}

export default App;
